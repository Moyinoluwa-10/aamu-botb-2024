import video from "../assets/videos/hero-video.mp4";

const Hero = () => {
  return (
    <section className="hero relative p-5 py-10 overflow-hidden bg-black">
      <div className="container max-w-7xl max-h-[462px] mx-auto relative">
        <div className="w-full">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="video w-full h-full m-0 p-0 rounded-2xl"
          >
            Your browser is not supported
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
