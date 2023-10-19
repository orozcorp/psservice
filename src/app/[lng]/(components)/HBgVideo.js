import ReactPlayer from "react-player";

export default function HBgVideo() {
  return (
    <div className=" inset-0 flex items-center justify-center z-[-1] overflow-hidden">
      <ReactPlayer
        url="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/LANDING/hero2.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="object-cover "
      />
    </div>
  );
}
