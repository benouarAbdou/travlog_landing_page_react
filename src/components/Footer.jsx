import styles from "../styles";
import { footerLinks, socialMedia } from "../constants";
import { travlog } from "../assets";
import { waves } from "../assets";
const Footer = () => {
  return (
    <section
      className={`relative flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}
    >
      <div className="absolute -top-40 right-0 -z-10">
        <img src={waves} alt="waves_decoration" className="w-[100%] h-[100%]" />
      </div>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className=" flex-1 flex flex-col justify-start mr-10">
          <img
            src={travlog}
            alt="travlog"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
          <div className="flex flex-row gap-4 mt-4">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[32px] h-[32px] object-contain cursor-pointer  bg-primary rounded-full p-2 `}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-semibold text-[18px] leading-[27px] ">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-medium text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {" "}
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
