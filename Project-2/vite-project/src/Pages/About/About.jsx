import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Drawer from "../../components/Drawer/Drawer";
import Btn from "../../components/Btn/Btn";
import webaliser from "./images/webaliser.png";

import rectangle31 from "./images/rectangle 31.png";
import rectangle32 from "./images/rectangle 32.png";
import rectangle38 from "./images/rectangle 38.png";
import ryanancill from "./images/ryan-ancill.png";
import Switcher from "../../components/Switcher/Switcher";

const About = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="dark:bg-black dark:text-white">
      <header className="container1 headerbg text-white ">
        <div className="container111 relative">
          <div className="container11 relative z-10">
            <nav className="flex items-center justify-between">
              <h1
                data-aos-duration="1500"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="font-[700] text-[66px] text-[]"
              >
                DB-
              </h1>
              <ul
                data-aos-duration="1500"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="flex gap-[40px] lg:hidden items-center"
              >
                <li>
                  <Link to="/">{t("Home")}</Link>
                </li>
                <li>
                  <Link to="/about">{t("About")}</Link>
                </li>
                <li>
                  <Link to="/services">{t("Services")}</Link>
                </li>
                <li>
                  <Link to="/gallery">{t("Gallery")}</Link>
                </li>
                <li>
                  <Link to="/contact">{t("Contact")}</Link>
                </li>
                <li>
                  <Link to="/story">{t("Story")}</Link>
                </li>
                <li>
                  <Link to="/careers">{t("Careers")}</Link>
                </li>
                <li>
                  <Link to="/news">{t("News")}</Link>
                </li>
                <Switcher />

                <button
                  onClick={() => {
                    changeLanguage("en");
                  }}
                >
                  En
                </button>
                <button
                  onClick={() => {
                    changeLanguage("ru");
                  }}
                >
                  Ru
                </button>
              </ul>
              <div className=" hidden lg:block">
                <Drawer />
              </div>
            </nav>{" "}
            <div className="flex flex-col gap-[32px] p-[83px_0_174px_0]">
              <div className="flex flex-col gap-[16px]">
                <h1
                  data-aos-duration="1500"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="font-[700] max-w-[740px] text-center mx-auto text-[52px] leading-[78px]"
                >
                  {t("About our story - We are the best team")}
                </h1>
              </div>
            </div>
          </div>
          <img
            src={webaliser}
            className="absolute right-0 top-0 h-[100%] w-[100%]"
            alt=""
          />
        </div>
      </header>

      <section className="container1">
        <div className="container11 flex items-center gap-[160px] py-[75px] xl:flex-wrap xl:justify-center xl:gap-y-[75px]">
          <div className="relative">
            <img
              data-aos-duration="1500"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src={rectangle31}
              alt=""
            />
            <img
              data-aos-duration="1500"
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src={rectangle32}
              className=" absolute bottom-[-10%] right-[-25%] xl:right-[8%]"
              alt=""
            />
          </div>

          <div className="max-w-[510px] flex flex-col gap-[16px]">
            <h1
              data-aos-duration="1500"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="font-[700] text-[24px] text-[#056088] leading-[41px]"
            >
              {t("Here were the story begins")}
            </h1>
            <div className="flex flex-col gap-[32px]">
              <p
                data-aos-duration="1500"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="font-[400] text-[16px] text-[#434343] leading-[27px]"
              >
                {t(
                  "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                )}
              </p>
              <p
                data-aos-duration="1500"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="font-[400] text-[16px] text-[#434343] leading-[27px]"
              >
                {t(
                  "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container1 py-[50px]">
        <div className="container111 relative">
          <div className="container11 py-[20px] text-white flex justify-between xl:flex-wrap xl:justify-center xl:gap-[50px]">
            <div className="max-w-[510px] flex flex-col gap-[16px]">
              <h1
                data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="font-[700] text-[32px] text-[] leading-[54px]"
              >
                {t("We love to make perfect   home")}
              </h1>
              <p
                data-aos-duration="1500"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="font-[400] text-[16px] text-[] leading-[27px]"
              >
                {t(
                  "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                )}
              </p>
            </div>
            <img
              data-aos-duration="1500"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src={ryanancill}
              alt=""
            />
          </div>
          <img
            src={rectangle38}
            className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default About;
