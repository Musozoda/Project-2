import { Layout } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Btn from "../../components/Btn/Btn";



// images
import webaliser from "./images/webaliser.png";
import img from "./images/img.png";
import Jconstruct from "./images/J.construct.png";
import Arch from "./images/Arch.png";
import Whixco from "./images/Whix.co.png";
import DZIKRA from "./images/DZIKRA.png";
import video from "./images/video.png";
import bg from "./images/bg.png";

import ellipse6 from "./images/ellipse 6.png";
import rectangle13 from "./images/rectangle 13.png";
import rectangle14 from "./images/rectangle 14.png";
import rectangle15 from "./images/rectangle 15.png";
import rectangle16 from "./images/rectangle 16.png";
import rectangle17 from "./images/rectangle 17.png";
import rectangle18 from "./images/rectangle 18.png";
import rectangle19 from "./images/rectangle 19.png";
import rectangle20 from "./images/rectangle 20.png";
import rectangle21 from "./images/rectangle 21.png";
import rectangle22 from "./images/rectangle 22.png";
import rectangle23 from "./images/rectangle 23.png";
import rectangle38 from "./images/rectangle 38.png";
import rectangle131 from "./images/rectangle 13 (1).png";
import rectangle132 from "./images/rectangle 13 (2).png";
import rectangle133 from "./images/rectangle 13 (3).png";
import ic_baseline from "./images/ic_baseline.png";
import mdi_sofa from "./images/mdi_sofa.png";
import akaricons from "./images/akar-icons.png";
import group from "./images/group.png";
import Card from "../../components/Card/Card";
import Swiper1 from "../../components/Swiper/Swiper";
import Drawer from "../../components/Drawer/Drawer";
import UseDarkSide from "../../Hook/Switcher";
import Switcher from "../../components/Switcher/Switcher";

const Home = () => {
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
                data-aos="fade-up-left"
                className="font-[700] text-[66px] text-[]"
              >
                DB-
              </h1>
              <ul
                data-aos="fade-up-right"
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
                  data-aos="fade-left"
                  className="font-[700] max-w-[740px] text-[52px] leading-[78px]"
                >
                  {t("We build your dream house well and professionally")}
                </h1>
                <p
                  data-aos="fade-left"
                  className="font-[500] max-w-[445px] text-[16px] text-[] leading-[27px]"
                >
                  {t(
                    "Our team can build a house according to your wishes. Any design and concept, we will help make it happen"
                  )}
                </p>
              </div>
              <Btn text={t("Contact us")} />
            </div>
          </div>
          <img
            data-aos="fade-right"
            src={webaliser}
            className="absolute right-0 top-0 h-[103%]"
            alt=""
          />
        </div>
      </header>

      <section className="container1 ">
        <div className="container11 flex items-center gap-[130px] p-[100px_0_50px_0] xl:flex-wrap xl:justify-center">
          <img data-aos="zoom-in" src={img} alt="" />
          <div
            data-aos="zoom-in-right"
            className="flex flex-col gap-[32px] xl:items-center"
          >
            <div className="flex flex-col gap-[16px] max-w-[425px]">
              <h1 className="font-[700] xl:text-center text-[24px] text-[#056088] leading-[41px]">
                {t("Our company")}
              </h1>
              <p className="font-[400] xl:text-center text-[16px] text-[#434343] dark:text-white leading-[29px]">
                {t(
                  "Debuilds is a team of architects, interior design, and contractors who help our clients not only to build their dream building, but also to feel comfortable after the building is used."
                )}
              </p>
              <p className="font-[500] xl:text-center text-[16px] text-[#434343] dark:text-white leading-[29px]">
                {t("We already handled")}
              </p>
              <ul className="flex items-center justify-between">
                <li className="font-[700] text-[20px] text-[#056088] leading-[34px]">
                  {t("50+ Clients")}
                </li>
                <li className="font-[700] text-[20px] text-[#056088] leading-[34px]">
                  {t("30+ House")}
                </li>
                <li className="font-[700] text-[20px] text-[#056088] leading-[34px]">
                  {t("20+ Building")}
                </li>
              </ul>
            </div>
            <Btn text={t("See more")} />
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container11 flex flex-col gap-[32px] py-[50px]">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="max-w-[348px] mx-auto flex flex-col gap-[16px]"
          >
            <h1 className="text-center font-[700] text-[24px] leading-[40px] text-[#056088]">
              {t("Our services")}
            </h1>
            <p className="text-center font-[400] text-[16px] leading-[29px] text-[#434343]">
              {t(
                "Our services include building new buildings and renovating old buildings"
              )}
            </p>
          </div>

          <div  className="flex items-center justify-between xl:flex-wrap xl:justify-center xl:gap-[75px]">
            <Card
              img={ic_baseline}
              h1={t("Design building/house")}
              p={t("We have an architect for design new buildings")}
              className="text-white  bgimage"
            />
            <Card
              img={mdi_sofa}
              h1={t("Interior Design")}
              p={t(
                "We have an interior designer for design your perfect inside house"
              )}
            />
            <Card
              img={mdi_sofa}
              h1={t("Build from scratch")}
              p={t("We have an contractor for build new building from scratch")}
            />
            <Card
              img={mdi_sofa}
              h1={t("Renovation")}
              p={t("We can also renovate or rebuilds new buildings/house")}
            />
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container11 py-[50px] flex flex-col gap-[32px]">
          <div className="max-w-[320px] mx-auto flex flex-col gap-[16px]">
            <h1 className="text-center font-[700] text-[24px] leading-[40px] text-[#056088]">
              {t("Our benefits")}
            </h1>
            <p className="text-center font-[400] text-[16px] leading-[29px] text-[#434343]">
              {t("Here our benefits if you collaboration with our team")}
            </p>
          </div>
          <div>
            <Swiper1
              bgimage1={rectangle131}
              img1={akaricons}
              h11={t("Flexible time")}
              p1={t(
                "We work wherever you ready to builds. Work fast and profesional"
              )}
              bgimage2={rectangle132}
              img2={akaricons}
              h12={t("Customizable design")}
              p2={t(
                "We can design your buildings, but we open if you want to customize your design or if you have architect"
              )}
              bgimage3={rectangle133}
              img3={akaricons}
              h13={t("Negotiable price")}
              p3={t(
                "Yes, we’re open to negotiate the price with you, and we will give the best price for our lovely clients"
              )}
            />
          </div>
        </div>
      </section>

      <section className="container1 top-[-150px] text-white">
        <div className="container111 relative">
          <div className="container11 flex flex-col gap-[32px] pt-[150px] pb-[50px]">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="max-w-[320px] mx-auto flex flex-col gap-[16px]"
            >
              <h1 className="text-center font-[700] text-[24px] leading-[40px] ">
                {t("Our works")}
              </h1>
              <p className="text-center font-[400] text-[16px] leading-[29px]">
                {t(
                  "Here our some of the best the result when we build some buildings, houses, and also interior designs"
                )}
              </p>
            </div>
            <div className="flex flex-col gap-[32px]">
              <div className="flex gap-[20px] justify-center xl:flex-wrap">
                <div className="flex justify-between gap-[20px]">
                  <div className="flex flex-col justify-between">
                    <img
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className=""
                      src={rectangle15}
                      alt=""
                    />
                    <img
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className=""
                      src={rectangle18}
                      alt=""
                    />
                  </div>
                  <img
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className=""
                    src={rectangle16}
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-between md:gap-[20px]">
                  <img
                    data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    src={rectangle14}
                    alt=""
                  />
                  <img
                    data-aos="flip-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    src={rectangle17}
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-between md:gap-y-[20px]">
                  <div className="flex justify-between">
                    <img
                      data-aos="flip-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      src={rectangle19}
                      alt=""
                    />
                    <div className="flex flex-col justify-between">
                      <img
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        src={rectangle20}
                        alt=""
                      />
                      <img
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        src={rectangle22}
                        alt=""
                      />
                    </div>
                  </div>
                  <img
                    data-aos="flip-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    src={rectangle21}
                    alt=""
                  />
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="flex items-center justify-end gap-[40px] mr-[40px] md:m-0 lg:flex-wrap lg:justify-center"
              >
                <div className="w-[714px] h-[2px] bg-[#056088]"></div>
                <Btn text={t("See more")} />
              </div>
            </div>
          </div>
          <img
            src={rectangle38}
            className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]"
            alt=""
          />

          <div className="container11 flex items-start pb-[50px] lg:items-center lg:justify-between md:flex-wrap md:justify-center md:gap-[50px]">
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
              className="flex flex-col gap-[32px] bg-white text-black p-[50px_32px]"
            >
              <div className="flex flex-col gap-[16px]">
                <h1 className="font-[700] text-[24px] text-[#056088] leading-[40px]">
                  {t("What our clients say?")}
                </h1>
                <p className="max-w-[195px] font-[400] text-[#434343] text-[16px] leading-[29px]">
                  {t("See what our clients say about their new home")}
                </p>
              </div>
              <Btn text={t("See more")} />
            </div>

            <div className="w-[100%] h-[100%] relative lg:w-max">
              <img
                data-aos-duration="1500"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                src={rectangle23}
                className="w-[100%] h-[100%] lg:hidden"
                alt=""
              />
              <div
                data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className=" absolute bottom-[-20%] right-0 lg:static"
              >
                <div className="flex flex-col gap-[16px] relative p-[59px_24px_29px_50px] sm:p-[29px_12px_14px_25px] bglinear  max-w-max ">
                  <p className=" max-w-[342px]">
                    {t(
                      "I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it."
                    )}
                  </p>
                  <span className="">- Mr. Roberto</span>
                  <img
                    src={ellipse6}
                    className=" absolute top-[-20%] left-[-10%] md:left-[40%]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container11 py-[100px]">
          <div className="flex flex-col gap-[100px]">
            <div className="flex items-center justify-between xl:flex-wrap">
              <h1
                data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="font-[700] text-[24px] xl:mx-auto xl:mb-[25px] text-[#056088] leading-[41px]"
              >
                {t("Our Partners")}
              </h1>
              <div
                data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="flex items-center gap-[144px] xl:flex-wrap xl:justify-center xl:gap-[75px]"
              >
                <img src={Jconstruct} alt="" />
                <img src={Arch} alt="" />
                <img src={Whixco} alt="" />
                <img src={DZIKRA} alt="" />
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="relative md:flex md:flex-col sm:w-[100%] md:items-center md:gap-[25px]">
                <img
                  data-aos-duration="1500"
                  data-aos="fade-down"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  src={video}
                  alt=""
                />
                <div
                  data-aos-duration="1500"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="p-[35px_50px] bglinear h-max w-max sm:w-[100%]  text-white absolute md:static right-0 bottom-[-5%]"
                >
                  <p className="font-[400] md:text-center text-[16px] leading-[29px] max-w-[270px]">
                    {t(
                      "This is the timelapse video that shows how our teams work"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container1 my-[50px]">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="container11 text-white py-[55px] relative"
        >
          <div
            data-aos="zoom-out-down"
            data-aos-duration="1500"
            className="max-w-[640px] mx-auto flex flex-col gap-[32px]"
          >
            <div className="flex flex-col gap-[16px]">
              <h1 className="font-[700] text-center text-[52px] text-[] leading-[78px]">
                {t("Want to get our offer updates and news?")}
              </h1>
              <p className="font-[500] mx-auto max-w-[517px] text-center text-[] text-[16px] leading-[27px]">
                {t(
                  "Submit your e-mail and we will give you update about information and discount. Every single week. (not spamming)"
                )}
              </p>
            </div>
            <div className="flex">
              <div className="p-[18px_0_18px_30px] w-[100%] text-[#00000066] bg-white">
                {t("Enter your e-mail here")}
              </div>
              <Btn text={t("Submit")} />
            </div>
          </div>
          <img
            src={bg}
            className=" absolute top-0 right-0 w-[100%] h-[100%] z-[-1]"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
