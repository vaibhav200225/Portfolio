import React from "react"
import design from "../../images/pics/design.png";
import code from "../../images/pics/code.png";
import Consulting from "../../images/pics/consulting.png";
import Image from "next/image";

export default function service() {
    return(
        <>
        <section className=" text-center mt-16">
          <div>
            <h2 className=" text-3xl py-1 text-teal-600 dark:text-teal-600 font-serif font-semibold">Services Offered</h2>
            <p className=" text-lg py-5 leading-8 text-gray-800 md:text-xl mal-w-xl mx-auto lg:mr-60 lg:ml-60 dark:text-white">
              I offer a range of high-quality services to help our clients
              achieve their business goals. Our services include all the topics
              which are mentioned below. I as Experienced professionals will
              provide the service and delivery result that our client is
              expecting from us. I believe in building long-term relationships
              with our clients based on trust and respect.
            </p>
          </div>
          <div className=" lg:grid lg:grid-cols-3 gap-10 flex-row">
            <div className=" shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} width={100} height={100} alt="design" />
              <h2 className="text-center text-3xl font-bold pt-8 pb-2">
                Website Application <br />
                Development
              </h2>
              <p className="py-2 text-center ">
                Everyone in there own Industry want to do some <br />
                creative so to get the attention of public and make the profit
                <br />
                of our business. For website development <br />
                we will fulfield you needs.
              </p>
              <h4 className="py-4 text-teal-600">What can we do</h4>
              <div className=" right-3">
                <p className=" text-gray-800 py-1">Front-End Designing</p>
                <p className=" text-gray-800 py-1">Back-End Management</p>
                <p className=" text-gray-800 py-1">Wordpress</p>
              </div>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white ">
              <Image src={code} width={100} height={100} alt="code" />
              <h2 className=" text-3xl font-bold pt-8 pb-2">
                Vulnerability Analysis & <br /> Penetration Testing
              </h2>
              <p className="py-2">
                Security is the main concern in the business industries. <br />
                If there is lack of security there may be chanches of loss
                <br /> of financial and reputaion.
              </p>
              <h4 className="py-4 text-teal-600">What can we do</h4>
              <p className=" text-gray-800 py-1">
                WEB/Mobile/API Penetration Testing
              </p>
              <p className=" text-gray-800 py-1">Network Penetration Testing</p>
              <p className=" text-gray-800 py-1">Source Code Reviewing</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={Consulting}
                width={100}
                height={100}
                alt="consultins"
              />
              <h2 className=" text-3xl font-bold pt-8 pb-2">
                Spreading Security <br /> Awareness
              </h2>
              <p className="py-2 ">
                In our day to day life the most of people not know about <br />
                security.Some people are getting tricked by Social <br />
                Engineering Attacks.
              </p>
              <h4 className="py-4 text-teal-600">What can we do</h4>
              <p className=" text-gray-800 py-1">Taking a live Seminar</p>
              <p className=" text-gray-800 py-1">
                Teaching about Cyber Security
              </p>
              <p className=" text-gray-800 py-1">
                How to prevent those activities.
              </p>
            </div>
          </div>
        </section>
        <hr className=" w-80 h-1 mx-auto border-2 rounded md:my-10 drop-shadow-xl" />
        <section className=" text-center md:mt-7">
          <div>
            <h2 className=" text-3xl py-1 text-teal-600 font-semibold font-serif">PROJECTS</h2>
            <p className=" text-lg py-2 leading-8 text-gray-800 dark:text-white">
              Some of mine recent work
            </p>
          </div>
        </section>
        </>
    )
}