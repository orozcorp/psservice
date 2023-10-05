import { useRef, useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { postData } from "../../lib/helpers/getData";
import { uploadFiles } from "s3up-client";

export default function Upload({
  title,
  setUrl,
  percent,
  setPercent,
  setDocument,
  reset,
  setReset,
}) {
  const [key, setKey] = useState("");
  const inputFile = useRef(null);
  function resetUpload() {
    inputFile.current.value = "";
    setKey("");
  }
  useEffect(() => {
    if (!reset) return;
    resetUpload();
    setReset(false);
  }, [reset, setReset]);
  useEffect(() => {
    if (key) {
      async function signUpload() {
        if (!key) return null;
        return await postData({
          query: `
              mutation Mutation($key: String!) {
              signFile(key: $key) {
                url
                fields {
                  key
                  bucket
                  xAmzAlgorithm
                  xAmzCredential
                  xAmzDate
                  Policy
                  xAmzSignature
                }
              }
            }
          `,
          variables: { key },
        });
      }
      async function Sign() {
        try {
          const sign = await signUpload();
          const { signFile } = sign;
          const newSignFile = {
            url: signFile.url,
            fields: {
              Policy: signFile.fields.Policy,
              key: signFile.fields.key,
              bucket: signFile.fields.bucket,
            },
          };
          newSignFile.fields["X-Amz-Algorithm"] = signFile.fields.xAmzAlgorithm;
          newSignFile.fields["X-Amz-Credential"] =
            signFile.fields.xAmzCredential;
          newSignFile.fields["X-Amz-Date"] = signFile.fields.xAmzDate;
          newSignFile.fields["X-Amz-Signature"] = signFile.fields.xAmzSignature;
          return newSignFile;
        } catch (error) {
          console.log(error);
          throw new Error(error);
        }
      }
      uploadFiles(inputFile.current.files, {
        signer: Sign,
        onProgress: (state) => {
          setUrl(state.list[0].url);
          setPercent(state.percent());
        },
      });
    }
  }, [key, setUrl, setPercent]);

  function uploadImage() {
    const Ogfile = inputFile.current.files[0];
    const fileName = Ogfile.name;
    const fileNameArray = fileName.split(".");
    const fileExtension = fileNameArray.pop(); // This will give you the file extension
    const fileNameWithoutExtension = fileNameArray.join(".");
    setDocument({
      name: fileNameWithoutExtension,
      extension: fileExtension,
    });
    setKey(`documentos/esr/${Date.now()}-${Ogfile.name}`);
  }

  return (
    <div style={{ width: "320px", margin: "6px" }}>
      <label
        className="block mb-2 font-medium text-gray-900 text-2xl "
        htmlFor="file_input"
      >
        {title}
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
        type="file"
        ref={inputFile}
        onChange={uploadImage}
      />
      {percent > 0 && <ProgressBar completed={percent} />}
    </div>
  );
}
