import React from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Drawer from "../../components/Drawer/Drawer";
import Btn from "../../components/Btn/Btn";
import Card2 from "../../components/Card2/Card2";

import webaliser from "./images/webaliser.png";
import img from "./images/img.png";
import rectangle38 from "./images/rectangle 38.png";
import rectangle37 from "./images/rectangle 37.png";
import Switcher from "../../components/Switcher/Switcher";

const News = () => {
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
                data-aos-easing="ease-in-sine" className="font-[700] max-w-[740px] text-center mx-auto text-[52px] leading-[78px]">
                  {t("Article and news about property and constructions")}
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

      <section className="container1 mt-[230px]">
        <div className="container111 h-[580px] relative">
        <img data-aos="zoom-in" src={rectangle38} className="w-[100%] absolute top-0 left-0" alt="" />

        <div data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="container11 relative">
            <div className=" absolute top-[-100px] right-0 ">
                <div className="relative text-white">
                  <img src={rectangle37} className="w-[100%]" alt="" />
                <div className=" absolute bottom-0 flex items-start justify-between w-[100%] px-[77px] lg:px-0  pb-[52px]">
                    <h1 className="font-[700] text-[52px] text-[] leading-[78px]">{t("Today’s property news")}</h1>
                    <p className="font-[400] max-w-[342px] text-[16px] text-[] leading-[27px]">{t("is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'")}</p>
                </div>
                </div>
            </div>

        </div>
        </div>

      </section>
            <div className=" relative top-[-100px] lg:top-[-300px] flex items-center flex-wrap gap-y-[50px] gap-x-[20px] justify-center">
                <Card2 className="bg-white" img={img} h1="Tips of the week" p="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' " btntext="Read more"/> 
                <Card2 className="bg-white" img={img} h1="Tips of the week" p="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' " btntext="Read more"/> 
                <Card2 className="bg-white" img={img} h1="Tips of the week" p="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' " btntext="Read more"/> 
            </div>

      <h1 className='font-[700] text-[24px] text-[#056088] pb-[75px] text-center'>
                {t("See more")}
            </h1>
    </div>
  );
};

export default News;
