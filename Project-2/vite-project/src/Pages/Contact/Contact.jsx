import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Drawer from '../../components/Drawer/Drawer';
import Btn from '../../components/Btn/Btn';
import webaliser from './images/webaliser.png'

import Rectangle31 from './images/Rectangle 31.png'
import Switcher from '../../components/Switcher/Switcher';

const Contact = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className='dark:bg-[#4a4a4a] dark:text-white'>
      <header className="container1 headerbg text-white">
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

                <button onClick={()=>{changeLanguage("en")}}>En</button>
                <button onClick={()=>{changeLanguage("ru")}}>Ru</button>
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
                data-aos-easing="ease-in-sine" className="font-[700] sm:text-[30px] max-w-[1022px] text-center mx-auto text-[52px] leading-[78px]">
                  {t("Need some consultation or want to collaborarion with us? Let’s connect!")}
                </h1>

              </div>
            </div>
          </div>
          <img src={webaliser} className="absolute right-0 top-0 h-[100%] w-[100%]" alt="" />
        </div>
      </header>

      <section className='container1 my-[75px]'>
        <div className='container11 flex items-center bg-[#F5F5F5] dark:bg-[#4a4a4a] flex-wrap justify-center gap-y-[25px]'>
          <img data-aos-duration="1500"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" src={Rectangle31} alt="" />
          <div className='flex flex-col gap-[24px] p-[35px] lg:p-0'>
            <h1 data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='font-[700] text-[24px] leading-[41px] text-[#056088]'>{t("Let’s talk about anything you need")}</h1>
            <div className='flex flex-col gap-[16px]'>
            <form data-aos-duration="1500"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='flex flex-col gap-[16px]'>
              <div className='flex text-center gap-[16px]'>
              <input data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className=' dark:bg-black p-[12px_20px] w-[50%]' type="text" name="" id=""  placeholder='Your name/company name'/>
              <input data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className=' dark:bg-black p-[12px_20px] w-[50%]' type="text" name="" id=""  placeholder='Phone/E-mail'/>
              </div>
              <textarea data-aos-duration="1500"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='w-[696px] dark:bg-black p-[12px_20px] lg:w-[100%] max-h-[183px]' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>

            </form>
          <Btn text="Submit"/>
            </div>
          </div>
        </div>
      </section>

      <section className='container1'>
        <div className='container11 flex justify-center p-[50px_0_100px_0]'>
          <div className='flex flex-col gap-[32px] items-center'>
          <h1 data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='font-[700] text-[24px] leading-[41px] text-[#056088]'>{t("Or contact us via e-mails or even mobile call or Whatsapp messages")}</h1>
          <div data-aos-duration="1500"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='flex gap-[32px] sm:flex-wrap sm:justify-center sm:gap-[50px]'>
            <Btn text="E-mails"/>
            <Btn text="Whatsapp"/>
            <Btn text="Message"/>
          </div>

          </div>
        </div>
      </section>
    </div>

  )
}

export default Contact