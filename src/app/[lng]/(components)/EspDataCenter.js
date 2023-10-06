import Image from "next/image";

export default function EspDataCenter({ title, text, active }) {
  const { active: activeState, setActive } = active;
  const activo = activeState == "dataCenter";

  return (
    <div
      className={`
        ${
          activo
            ? "relative w-full items-start pl-10 duration-1000"
            : "relative w-60 ml-0 lg:ml-[-19rem] items-center"
        }
       h-[26rem]  rounded flex flex-col flex-nowrap justify-end`}
      onClick={() => {
        if (activeState == "dataCenter") {
          setActive("");
        } else {
          setActive("dataCenter");
        }
      }}
    >
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 rounded overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/inicio_datacenter.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="left"
            quality={100}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="font-bold mb-4 text-lg">{title}</div>
        {activo && <div className="mb-4 text-sm">{text}</div>}
      </div>
    </div>
  );
}
