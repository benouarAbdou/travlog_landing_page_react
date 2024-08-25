import { hero_image } from "../assets";
import styles from "../styles";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart}`}>
      <h1>hello</h1>
    </div>
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
