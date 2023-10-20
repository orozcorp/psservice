import ReactPlayer from "react-player";

export default function HBgVideo({ video }) {
  return (
    <div className=" inset-0 flex items-center justify-center z-[-1] overflow-hidden">
      <ReactPlayer
        url={video}
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
