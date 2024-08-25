import styles from "../styles";
import { key_features } from "../assets";
import { features } from "../constants";
import FeatureCard from "./FeatureCard";

const KeyFeatures = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingX}`}>
      <div className="flex flex-1 flex-col justify-center items-start mb-5">
        <h4 className="text-secondary font-poppins uppercase font-semibold text-2xl">
          Key features
        </h4>
        <h2 className="font-bold font-poppins mb-5 text-[44px] leading-[50px]">
          We offer best services
        </h2>
        <p className={`${styles.paragraph} mb-10 max-w-[500px]`}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>

        <div className="flex flex-col gap-x-6 gap-y-6 my-4 mx-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center">
        <img
          src={key_features}
          alt="key_features"
          className="w-[80%]  relative z-[5]"
        />
      </div>
    </section>
  );
};

export default KeyFeatures;
