import ChangingImage from "../../components/atoms/ChangingImage";
export default function Somos({ t }) {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-start items-center min-h-[60vh] w-[100vw]  gap-2 ">
        <ChangingImage
          width={300}
          height={200}
          lightImg="https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/RSE/RSE_LIGHT.svg"
          darkImg="https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/RSE/RSE_DARK.svg"
          classN="p-10"
        />
        <div className="flex flex-row flex-wrap items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2 ml-4">
          <div className="w-full max-w-2xl text-[#0A2473] dark:text-[#fff]">
            <h2 className="text-3xl lg:text-5xl  font-bold py-2">
              {t("Hero2")}
            </h2>
            <p className="text-2xl font-bold mb-8">{t("Hero2sub")}</p>
            <p className="text-lg font-bold">{t("HeroText")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
