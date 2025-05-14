import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { PiWhatsappLogo } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";



const Footer = () => {
  return (
    <footer>
      <div className="bg-head pt-20">
        <div className="container text-white md:px-4 lg:px-5 pb-2">
          <div className="flex gap-1 items-center ">
            <img src="/metalogo.png" alt="metalogo" className="h-16 w-16 " />
            <div className="flex flex-col leading-none ">
              <span className="font-exo text-[30px] font-semibold ">
                MetaLogic
              </span>{" "}
              <span>Software Private Limited</span>
            </div>
          </div>
          <div className="grid gap-6 text-[14px] font-medium md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:text-[15px]  ">
            <div>
              <ul className="flex flex-col gap-1 mt-[24px]">
                <li>
                  <IoLocationOutline className="icons" />
                  <span>Saptakhel, Lalitpur (Head office)</span>
                </li>
                <li>
                  <FiPhone className="icons" />
                  <span>+ 977 9851353599</span>
                </li>
                <li>
                  <MdMailOutline className="icons" /> info@metalogic.com.np
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="footer-list">Company</li>
                <li>Feedback</li>
                <li>Partnership</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="footer-list">Services</li>
                <li>Custom Software Development</li>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Cloud Computing Services</li>
                <li>Quality Assurance and Testing</li>
                <li>UI/UX Designing</li>
                <li>Maintenance and Support</li>
                <li>Dev Ops</li>
                <li>Blockchain Solutions</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="footer-list">
          
                  <span>Join</span>
                </li>
                <li>
                  <span>Careers at MetaLogic</span>
                </li>
                <li>
                  <span>Internships</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer-list mb-2">Join us on Social Medias</p>
              <ul className="flex gap-4">
                <li className="social-media"><PiWhatsappLogo className="text-[20px]"/></li>
                <li className="social-media"><LuFacebook className="text-[20px]"/></li>
                <li className="social-media"><FaInstagram className="text-[20px]"/></li>
                <li className="social-media"><FiLinkedin className="text-[20px]"/></li>
              </ul>
            </div>

          </div>
            <p className="mt-10 mb-[20px]  text-[14px] md:text-[16px]">&copy; Copyright 2024 MetaLogic. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
