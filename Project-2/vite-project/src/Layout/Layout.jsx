import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import Btn from "../components/Btn/Btn";

const Layout = () => {
  const [t,i18n] = useTranslation()

  const changeLanguage=()=>{

  }
  return (
    <div className="container1">


      <Outlet />
      <div className="flex flex-col items-center">
      <footer className="container1 bg-[#023957] text-white">
        <div className="container11 flex items-center justify-between p-[60px_0_74px_0] md:flex-wrap md:justify-center md:gap-[75px]">
          <div className="max-w-[180px] flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[16px]">
              <h1 className="font-[700] text-[66px] text-[]">DB-</h1>

              <p className="font-[400] text-[16px] text-[]">{t("Lizenzo street number 12 Jakarta, Indonesia")}</p>
            </div>
            <Btn text="Get directions"/>
          </div>

          <div className="flex flex-col gap-[32px]">
            <h1 className="font-[700] text-[24px] text-[]">{t("Menu")}</h1>
            <ul className="flex flex-col gap-[16px]">
              <li className="font-[400] text-[16px] text-[]">{t("Home")}</li>
              <li className="font-[400] text-[16px] text-[]">{t("About")}</li>
              <li className="font-[400] text-[16px] text-[]">{t("Gallery")}</li>
              <li className="font-[400] text-[16px] text-[]">{t("Service")}</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[32px]">
            <h1 className="font-[700] text-[24px] text-[]">{t("Contact")}</h1>
            <ul className="flex flex-col gap-[16px]">
              <li className="font-[400] text-[16px] text-[]">{t("E-mail")}</li>
              <li className="font-[400] text-[16px] text-[]">{t("Mobile")}</li>
              <li className="font-[400] text-[16px] text-[]">{t("Whatsapp")}</li>
              <li className="font-[400] text-[16px] text-[]">{t("Fax")}</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[32px]">
            <h1 className="font-[700] text-[24px] text-[]">{t("Career")}</h1>
            <ul className="flex flex-col gap-[16px]">
              <li className="font-[400] text-[16px] text-[]">{t("Job")}</li>
              <li className="font-[400] text-[16px] text-[]">{t("Part-time")}</li>
              <li className="font-[400] text-[16px] text-[]">{t("Internship")}</li>
              <li className="font-[400] text-[16px] text-[]">{t("Service")}</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[32px]">
            <h1 className="font-[700] text-[24px] text-[]">{t("Business")}</h1>
            <ul className="flex flex-col gap-[16px]">
              <li className="font-[400] text-[16px] text-[]">{t("Affiliate")}</li>
              <li className="font-[400] text-[16px] text-[]">{t("Collaboration")}</li>
              <li className="font-[400] text-[16px] text-[]">{t("Investment")}</li>
              <li className="font-[400] text-[16px] text-[]">{t("People")}</li>
            </ul>
          </div>
        </div>
      </footer>
      <p className="py-[32px]">{t("2021 - Copyright ZHB Studio")}</p>
      </div>
    </div>
  );
};

export default Layout;
