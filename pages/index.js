import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Twitter from "../images/icons/twitter.svg";
import Facebook from "../images/icons/facebook.svg";
import Instagram from "../images/icons/instagram.svg";
import Linkedin from "../images/icons/linkedin.svg"
import Image from "next/image";
import deved from '../images/pics/hacker.png';
import design from '../images/pics/design.png'
import code from '../images/pics/code.png'
import Consulting from '../images/pics/consulting.png'
import { useState } from "react";
import SSRpage from "./ssr-page";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Portfolio of VZsecure</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className=" py-5 mb-10 flex justify-between">
            <h1 className=" text-xl font-burtons bg-gradient-to-r  from-lime-500 to-teal-500 text-white px-4 py-2 rounded-md shadow-lg shadow-cyan-400">Developed by Vzsecure</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode) } className=" cursor-pointer text-2xl text-black dark:text-white" />
              </li>
              <li>
                <a className=" bg-gradient-to-r  from-lime-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 shadow-lg shadow-cyan-400" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className=" text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl drop-shadow-lg">Vaibhav Zadane</h2>
            <h3 className=" text-2xl py-2 md:text-3xl dark:text-white" >CyberSecurity Exert and Malware Analyzer</h3>
            <hr className=" w-80 h-1 mx-auto border-2 rounded md:my-10 drop-shadow-xl" />
            <p className=" text-lg py-5 leading-8 text-gray-800 md:text-xl mal-w-xl mx-auto lg:mr-60 lg:ml-60 dark:text-white">
              Hello, Welcome you all to my profile. <br /> 
              I am Cyber Security Expert. Since from last 1 year I am in these field working as a freelancer 
              and completed by internship. I have experience in the filed like Ethical Hacking, Penetration Testing, 
              Network Security, Malware Alalyst, Programmer. Righ now I am pursuing my BSC-IT degree and completing serveral 
              courses related to this field. 
            </p>
          </div>
          <div className=" text-xl flex justify-center gap-16 py-3 text-gray-600 " >
            <a href="#"><Image src={Twitter} alt="Twitter" /></a>
            <a href="#"><Image src={Linkedin} alt="Linkedin"/></a>
            <a href="#"><Image src={Facebook} alt="Facebook" /></a>
            <a href="#"><Image src={Instagram} alt="Instagram" /></a>
          </div>
          <div className=" shadow-lg shadow-cyan-400 relative bg-gradient-to-b overflow-hidden from-white rounded-full w-80 h-80 mt-20 mx-auto md:h-96 md:w-96 dark:from-lime-500 dark:to-teal-500">
            <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
          </div>
        </section>
        <hr className=" w-80 h-1 mx-auto border-2 rounded md:my-10 dark:bg-lime-500" />
        <section className=" text-center mt-10">
          <div>
            <h2 className=" text-3xl py-1 dark:text-white">Services We Offer</h2>
            <p className=" text-lg py-5 leading-8 text-gray-800 md:text-xl mal-w-xl mx-auto lg:mr-60 lg:ml-60 dark:text-white">
              We also provide various types of services to fullfield the customers needs. We want our customer should be satisfied with our hard word.
              These services we provide are mention below.
            </p>
          </div>
          <div className=" grid grid-cols-3 gap-10">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white md:flex-row">
              <Image src={ design } width={100} height={100} alt="design" />
              <h2 className=" text-3xl font-bold pt-8 pb-2">Website Application <br />Development</h2>
              <p className="py-2">
                Everyone in there own Industry want to do some <br />
                creative so to get the attention of public and make the profit<br /> 
                of our business. For website development <br />we will fulfield you needs.
              </p>
              <h4 className="py-4 text-teal-600">What can we do</h4>
              <p className=" text-gray-800 py-1">Front-End Designing</p>
              <p className=" text-gray-800 py-1">Back-End Management</p>
              <p className=" text-gray-800 py-1">Wordpress</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={ code } width={100} height={100} alt="code" />
              <h2 className=" text-3xl font-bold pt-8 pb-2">Vulnerability Analysis & <br /> Penetration Testing</h2>
              <p className="py-2">
                Security is the main concern in the business industries. <br />
                If there is lack of security there may be chanches of loss<br /> of financial and reputaion.
              </p>
              <h4 className="py-4 text-teal-600">What can we do</h4>
              <p className=" text-gray-800 py-1">WEB/Mobile/API Penetration Testing.</p>
              <p className=" text-gray-800 py-1">Network Penetration Testing.</p>
              <p className=" text-gray-800 py-1">Source Code Reviewing.</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={ Consulting } width={100} height={100} alt="consultins" />
              <h2 className=" text-3xl font-bold pt-8 pb-2">Spreading Security <br /> Awareness</h2>
              <p className="py-2 ">
                In our day to day life the most of people don't know about <br />security.Some people are getting tricked by Social <br />Engineering Attacks.
              </p>
              <h4 className="py-4 text-teal-600">What can we do</h4>
              <p className=" text-gray-800 py-1">Taking a live Seminar</p>
              <p className=" text-gray-800 py-1">Teaching about Cyber Security</p>
              <p className=" text-gray-800 py-1">How to prevent those activities.</p>
            </div>
          </div>
          <hr className=" w-80 h-1 mx-auto border-2 rounded md:my-10 drop-shadow-xl" />
        </section>
        <section className=" text-center">
          <div>
            <h2 className=" text-3xl py-1 dark:text-white">
              Projects
            </h2>
            <p className=" text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since in the begining of my journey I have done with the internship and bougbounty as well
            </p>
          </div>
          <div>
            <div>
              <Image src={code} alt="test" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


