import { CiLocationOn } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import logo from "../../ui/logo.svg";


const Footer = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-900  h-48 pt-4 pb-4 mt-12">
      <div className="flex h-full justify-between font-mono text-gray-600 dark:text-gray-400">
        <div className="flex flex-col justify-between xl:pl-48 ">
          <div className="flex text-xs md:text-base items-center">
            <CiLocationOn size={32} />
            <div className="flex flex-col items-left md:pl-4">
              <p>46 Chromosomes Street</p>
              <h3>Tel Aviv, Israel</h3>
            </div>
          </div>

          <div className="flex items-center">
            <SlPhone size={32} />
            <div className="items-center md:pl-4">
              <p>+972 11 111 1111</p>
            </div>
          </div>

          <div className="flex items-center">
            <CiMail size={32} />
            <div className="md:pl-4">
              <p>example@example.com</p>
            </div>
          </div>
        </div>
      <img src={logo} className="h-auto w-12" alt="the logo of the website"/>
        <div className="flex flex-col xl:pr-48 h-full justify-between text-center">
          <div>
            <h2 className="md:text-2xl">Science for everybody</h2>
          </div>
          <div className="">
            <p className="mb-3">
              Let us bring you the lateset scientific news.
              <br />
              Leave the hard research for our experts.
              <br />
              Stay tuned
            </p>
            <NavLink to="/terms" className="text hover:underline ">Terms of use</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
