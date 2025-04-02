import React from "react";
import { Container } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faPhone, } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";


function TopHeadInfo() {
  return (
    <div className="bg-gradient-to-r from-[#764508] to-[#403406]">
      <Container
        noBackground
        noPaddingY
        className="flex items-centerflex-row  justify-between flex-wrap -mx-3
"
      >
        <div className="float-left w-1/2">
          <ul className=" float-left flex items-center flex-row w-full">
            <li>
              <a
                href="#!"
                className="inline-block text-[rgb(234,_208,_176)] font-[1000] border-r border-r-white/20 px-[15px] uppercase py-[5px]"
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className=" text-[14px] box-border  antialiased [font:normal_normal_normal_14px_/_1_FontAwesome]"
                />
              </a>
            </li>
            <li>
              <a
                href="about.html"
                className="inline-block text-[rgb(234,208,176)] text-[11px] font-medium border-r border-r-white/20 px-[15px] py-[10px] uppercase
"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="faq.html"
                className="inline-block text-[rgb(234,208,176)] text-[11px] font-medium border-r border-r-white/20 px-[15px] py-[10px] uppercase
"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="contact.html"
                className="inline-block text-[rgb(234,_208,_176)] text-[11px] font-medium px-[15px] py-[10px] uppercase"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="float-right w-1/2">
          <ul className="float-right flex items-centerflex-row w-full justify-end">
            <li>
              <a
                className="inline-block text-[rgb(234,208,176)] text-[11px] font-medium border-r border-r-white/20 px-[15px] py-[10px] uppercase
"
                href="tel:+919923404583"
              >
                <FontAwesomeIcon icon={faPhone} />
                &nbsp;+919923404583
              </a>
            </li>
            <li>
              <a
                href="mailto:lokmangalgroups@gmail.com"
                className="inline-block text-[rgb(234,208,176)] text-[11px] font-medium border-r border-r-white/20 px-[15px] py-[10px] uppercase
"
              >
                <i class="fa-regular fa-envelope"></i>&nbsp;
                lokmangalgroups@gmail.com
              </a>
            </li>
            <li>
              <a
                className="inline-block text-[rgb(234,208,176)] text-[11px] font-medium border-r border-r-white/20 px-[15px] py-[10px] uppercase
"
                target="_blank"
                href="https://www.facebook.com/lokmangalfoundation/"
              >

                <i class="fa-brands fa-facebook-f " aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                className="inline-block text-[rgb(234,208,176)] text-[11px] font-medium border-r border-r-white/20 px-[15px] py-[10px] uppercase
"
                target="_blank"
                href="https://twitter.com/LokmangalFound"
              >
                <i className="fa-brands fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                className="inline-block text-[rgb(234,_208,_176)] text-[11px] font-medium
 px-[15px] py-[10px] uppercase"
                target="_blank"
                href="https://www.youtube.com/channel/UCk4QgXC_Qr6UtkHx9Tbm8yA?view_as=subscriberv"
              >
                <i class="fa-brands fa-youtube" aria-hidden="true"></i>

              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default TopHeadInfo;
