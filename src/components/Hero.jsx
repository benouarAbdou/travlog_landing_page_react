import { hero_image, work_icon, play } from "../assets";
import styles from "../styles";
import MainButton from "./MainButton";

const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}
  >
    {/* Gradient overlay */}
    <div className="absolute top-[-150px] left-[-250px] w-[500px] h-[500px] rounded-full bg-gradient-radial from-tertiary opacity-30 to-transparent blur-[150px]" />

    {/* Left side */}
    <div className={`flex flex-1 flex-col justify-start items-start`}>
      <div className="rounded-[40px] flex justify-center gap-2 items-center bg-white py-3 px-6 z-10">
        <p className="text-secondary font-poppins font-semibold">
          Explore the world!
        </p>
        <img src={work_icon} alt="" className="w-[24px] h-[24px]" />
      </div>
      <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] mt-4 leading-[80px] ">
        Travel{" "}
        <span className="text-secondary font-semibold">top destination of</span>{" "}
        the world
      </h1>
      <p className={`${styles.paragraph} mt-4`}>
        We always make our customer happy by providing as many choices as
        possible
      </p>

      <div className="flex gap-8 mt-4 items-center cursor-pointer mb-4">
        <MainButton text={"Get Started"} />
        <div className=" flex gap-2">
          <img src={play} alt="" className="w-[24px] h-[24px]" />
          <p className="font-poppins font-semibold">Watch Demo</p>
        </div>
      </div>
    </div>

    {/* Right side */}
    <div className="flex-1 flex">
      <img
        src={hero_image}
        alt="Hero"
        className="w-[100%] h-[100%] relative z-[5]"
      />
    </div>
  </section>
);

export default Hero;
