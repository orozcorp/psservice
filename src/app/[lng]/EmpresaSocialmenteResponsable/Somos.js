import ChangingImage from "../../components/atoms/ChangingImage";
export default function Somos({ t }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row flex-nowrap lg:flex-wrap w-full justify-center items-center my-8">
        <ChangingImage
          width={300}
          height={200}
          lightImg="https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/RSE/RSE_LIGHT.svg"
          darkImg="https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/RSE/RSE_DARK.svg"
          classN="p-10"
        />
        <div className="flex justify-center items-center min-h-[40vh] w-[75vw] ">
          <div className="w-full  text-[#0A2473] dark:text-[#fff]">
            <h2 className="text-3xl lg:text-5xl  font-bold py-2 ">
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
