import React from "react";
import Image from "next/image";
import contactImage from "../../../public/assets/contact-hero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Contact Section */}
      <section className="flex flex-col lg:flex-row text-black items-center gap-8 py-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-xl font-semibold mb-4">CONTACT US</p>
          <h2 className="text-4xl font-bold mb-4">
            Get in touct
            <br />
            today!
          </h2>
          <p className="text-gray-600 mb-6">
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>
          <p className="font-bold mb-6">
            Phone: +451 215 215
            <br />
            Fax: +451 215 215
          </p>
          <div className="flex mt-2 space-x-3">
            <a href="#" className="text-[252b48] hover:text-blue-700">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="text-[252b48] hover:text-blue-700">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="text-[252b48] hover:text-blue-700">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="text-[252b48] hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={contactImage}
            alt="Shopping woman"
            width={1440}
            height={639}
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="w-full h-[500px] items-center py-12">
        <p className="text-center text-gray-600 mb-8">VISIT OUR SITE</p>
        <h1 className="text-3xl font-bold text-center mb-8">
          We help small businesses
          <br />
          with big ideas
        </h1>
      </section>

      <section className="w-auto h-[700px] items-center gap-8 py-12">
        <div className="flex flex-col lg:flex-row h-[403px] justify-center items-center px-11">
          <div className="lg:w-1/3 text-center  py-20">
            <a href="#" className="text-blue-500 hover:text-purple-800 mt-20">
              <FontAwesomeIcon icon={faPhone} size="xl" />
            </a>
            <p className="text-xl font-semibold my-4">
              georgia.young@example.com
              <br />
              georgia.young@ple.com
            </p>
            <h2 className="text-4xl font-bold mb-4">Get Support</h2>
            <button className="bg-white text-blue-700 px-6 py-3 border border-sky-800 rounded-full hover:bg-blue-600 hover:text-black">
              Submit Request
            </button>
          </div>

          <div className="lg:w-1/3 bg-custom-dark-blue text-center text-white  py-20">
            <a href="#" className="text-blue-500 hover:text-purple-800">
              <FontAwesomeIcon icon={faLocationDot} size="xl" />
            </a>
            <p className="text-xl font-semibold my-4">
              georgia.young@example.com
              <br />
              georgia.young@ple.com
            </p>
            <h2 className="text-4xl font-bold mb-4">Get Support</h2>
            <button className="text-white px-6 py-3 border border-sky-100 rounded-full hover:bg-blue-600 hover:text-black">
              Submit Request
            </button>
          </div>

          <div className="lg:w-1/3 text-center  py-20">
            <a href="#" className="text-blue-500 hover:text-purple-800 mt-20">
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </a>
            <p className="text-xl font-semibold my-4">
              georgia.young@example.com
              <br />
              georgia.young@ple.com
            </p>
            <h2 className="text-4xl font-bold mb-4">Get Support</h2>
            <button className="bg-white text-blue-700 px-6 py-3 border border-sky-800 rounded-full hover:bg-blue-600 hover:text-black">
              Submit Request
            </button>
          </div>
        </div>
      </section>

      <section className="w-full h-[500px] items-center gap-8 py-12">
        <div className="text-center  py-20">
          <p className="text-center text-gray-600 mb-8">
            WE Cant WAIT TO MEET YOU
          </p>
          <h1 className="text-3xl font-bold text-center mb-8">Lets Talk</h1>
          <button className="bg-blue-700 text-white px-6 py-3 border border-sky-800 rounded-lg hover:bg-sky-950 hover:text-purple-300">
            Try it free now
          </button>
        </div>
      </section>
    </div>
  );
}
