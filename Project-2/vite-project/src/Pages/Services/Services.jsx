import React from 'react'

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Drawer from "../../components/Drawer/Drawer";
import webaliser from "./Images/webaliser.png";
import ic_baseline from '../Home/images/ic_baseline.png'
import rectangle13 from '../Home/images/rectangle 13.png'
import mdi_sofa from '../Home/images/mdi_sofa.png'
import bg from './images/bg.png'
import bg1 from './images/bg (1).png'
import bg2 from './images/bg (2).png'
import whiteline from './images/white line.png'
import whiteline1 from './images/white line (1).png'
import Card from '../../components/Card/Card';
import Switcher from '../../components/Switcher/Switcher';

const Services = () => {
    const [t, i18n] = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
  return (
    <div className='dark:bg-black dark:text-white'>


      <header className="container1 headerbg text-white ">
        <div className="container111 relative h-[512px]">
          <div className="container11 relative z-10">
            <nav className="flex items-center justify-between">
              <h1                 data-aos-duration="1500"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="font-[700] text-[66px] text-[]">DB-</h1>
              <ul                 data-aos-duration="1500"
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
                <h1                 data-aos-duration="1500"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-up="ease-in-sine" className="font-[700] max-w-[1001px] text-center mx-auto text-[52px] leading-[78px]">
                  {t("Our team services")}
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
      
      <section className='container1'>
        <div className='container11 py-[75px]'>
        <div                 data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="flex items-center justify-between xl:flex-wrap xl:justify-center xl:gap-[75px]">
            <Card
              img={ic_baseline}
              h1={t("Design building/house")}
              p={t("We have an architect for design new buildings")}
              className="text-white"
              bgimage={rectangle13}
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

      <section className='container1 my-[75px] lg:my-[50px]'>
        <div className='container11 lg:justify-center  relative text-white flex items-center gap-[50px] '>
                <img data-aos="zoom-in" src={bg} className=' absolute z-[-1] top-0 right-0 w-[100%] h-[100%]' alt="" />
                <div                 data-aos-duration="1500"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='relative lg:hidden'>
                    <img src={whiteline} className=' relative left-[20px]' alt="" />
                    <img src={bg1} className=' absolute top-0 left-[0]' alt="" />
                </div>

                <div                 data-aos-duration="1500"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='max-w-[517px] flex flex-col gap-[16px]'>
                    <h1 className='font-[700] lg:text-center text-[24px] text-[] leading-[41px]'>
                        {t("Design building / house")}
                    </h1>

                        <p className='font-[400] lg:text-center text-[16px] text-[] leading-[27px]'>
                            {t("is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")}
                        </p>
                </div>
        </div>
      </section>

      <section className='container1 mt-[125px] lg:my-[50px] pb-[125px]'>
        <div className='container11 lg:justify-center py-[50px] max-h-[328px] relative lg:pl-0 pl-[95px] text-white flex items-center justify-between gap-[50px] '>
                <img data-aos="zoom-in" src={bg} className=' absolute z-[-1] top-0 right-0 w-[100%] h-[100%]' alt="" />
                <div data-aos-duration="1500"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='max-w-[517px]'>
                        <p className='font-[400] lg:text-center text-[16px] text-[] leading-[27px]'>
                            {t("is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")}
                        </p>
                </div>
                <div data-aos-duration="1500"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='relative lg:hidden'>
                    <img src={whiteline1} className=' relative right-[20px]' alt="" />
                    <img src={bg2} className=' absolute top-0 left-0' alt="" />
                </div>

        </div>
      </section>
    </div>
  )
}

export default Services