import React from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Drawer from "../../components/Drawer/Drawer";
import webaliser from "./Images/webaliser.png";
import bg from "./Images/bg.png";
import img from "./Images/img.png";
import Ellipse6 from "./Images/Ellipse 6.png";
import Ellipse61 from "./Images/Ellipse 6 (1).png";
import Ellipse62 from "./Images/Ellipse 6 (2).png";
import Ellipse63 from "./Images/Ellipse 6 (3).png";
import rectangle24 from "./Images/rectangle 24.png";
import Swiper2 from "../../components/Swiper2/Swiper2";
import Swiper3 from "../../components/Swiper3/Swiper3";
import Switcher from "../../components/Switcher/Switcher";

const Story = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="dark:bg-black dark:text-white">
      <header className="container1 headerbg text-white ">
        <div className="container111 relative h-[512px]">
          <div className="container11 relative z-10">
            <nav className="flex items-center justify-between">
              <h1 data-aos-duration="1500"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="font-[700] text-[66px] text-[]">DB-</h1>
              <ul data-aos-duration="1500"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="flex gap-[40px] lg:hidden items-center">
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
                <h1 data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="font-[700] max-w-[1001px] text-center mx-auto text-[52px] leading-[78px]">
                  {t("Read some story from clients!")}
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
        <div data-aos-duration="1500"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="container11 py-[75px]">
          <Swiper2
            className="text-white"
            img={Ellipse6}
            h1="- Mr. James"
            p="I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it."
            bgimg={rectangle24}
            img2={Ellipse61}
            h12="- Mr. Ahmed"
            p2="I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it."
            img3={Ellipse62}
            h13="- Mr. Marco"
            p3="I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it."
          />
        </div>
      </section>

      <section className="container1">
        <div className="container111 relative">
          <div className="container11 flex justify-around py-[64px] items-center text-white lg:flex-wrap lg:justify-center lg:gap-[25px]">
            <img data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" src={Ellipse63} alt="" />
            <div data-aos-duration="1500"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="max-w-[517px] flex flex-col gap-[16px]">
                <h1 className="font-[700] text-[24px] lg:text-center text-[] leading-[41px]">{t("Mr. James’s says : “I’m so happy!”")}</h1>
                <p className="font-[400] text-[16px] lg:text-center text-[] leading-[27px]">{t("is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")}</p>
            </div>
          </div>
          <img
          data-aos="zoom-in"
            src={bg}
            className="absolute top-0 right-0 w-[100%] h-[100%] z-[-1]"
            alt=""
          />
        </div>
      </section>

      <section className="container1">
        <div  className="container11 py-[75px] flex flex-col gap-[32px]">
            <h1 data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="font-[700] text-center text-[24px] text-[#056088] leading-[41px]">{t("Mr. James’s villa")}</h1>
            <div data-aos-duration="1500"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <Swiper3 img={img}/>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
