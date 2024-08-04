import React from "react";
import trusted from "./assets/icons/trusted.svg";
import shipping from "./assets/icons/shipping.svg";
import verified from "./assets/icons/verified.svg";

import facebook from "./assets/icons/facebook.svg";
import linkedin from "./assets/icons/linkedin.svg";
import youtube from "./assets/icons/youtube.svg";

import logo from "./assets/logo-white.svg";

import { nanoid } from "nanoid";



const socials = [facebook, youtube, linkedin];

function Footer() {
  return (
    <div className="bg-[#112D35] text-white relative bottom-0">
      <div className=" lg:w-[1240px] m-auto">
        <div className="lg:hidden flex lg:flex-row flex-col items-center justify-center lg:gap-[112px] p-5">
          
          <br />
          <div className=" flex relative items-center gap-5 ">
            {socials.map((item) => (
              <img
                className="cursor-pointer"
                key={nanoid()}
                src={item}
                alt={item}
              />
            ))}
          </div>
        </div>

        <div className="lg:flex lg:flex-row flex-col justify-center lg:gap-[445px] items-center p-10">
         

          <div className="flex lg:flex-row flex-col lg:items-center lg:gap-[100px] gap-[50px]">

            <div className="flex flex-col gap-5">
              <p className="font-bold text-base">Company</p>
              {["About Us", "Career", "Blog", "Contact Us"].map((item) => (
                <p key={nanoid()} className="text-base font-light opacity-80 hover:underline cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-base">Support</p>

              {["FAQ", "Terms", "Privacy Policy", "Returns & Warranty"].map(
                (item: any) => (
                  <p key={nanoid()} className="text-base font-light opacity-80 hover:underline cursor-pointer">
                    {item}
                  </p>
                )
              )}
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-base">Get in touch</p>
              {["+1 815-369-0989", "help@inito.com"].map((item: any) => (
                <p key={nanoid()} className="text-base font-light opacity-80 hover:underline cursor-pointer">
                  {item}
                </p>
              ))}

              <p className="lg:w-[231px] text-base font-light opacity-80 hover:underline cursor-pointer">
              355 Bryant Street, Suite 403, San Francisco 94017
              </p>
            </div>
            <div className="lg:flex hidden relative items-center gap-5 ">
            {socials.map((item) => (
              <img
                className="cursor-pointer"
                key={nanoid()}
                src={item}
                alt={item}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
        <div className="p-4 bg-black opacity-40 flex lg:flex-row flex-col lg:justify-between items-center lg:px-40">
          <div><img className=" block w-[112px]" src={"https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo%20Inito%20Small-469e31eca89154d7507eaa91c3dd05b75cc908346860f04e2729a9fca8094e2b.svg"} alt={logo} /></div>
          <p>Copyright 2023, Inito Inc.</p>
        </div>
    </div>
  );
}

export default Footer;
