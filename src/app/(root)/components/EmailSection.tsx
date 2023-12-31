"use client";
import Link from "next/link";
import React, { useState } from "react";
import Mashup from "./Mashup";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [message, setMessage] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  function SendEmail(e: any) {
    e.preventDefault();
    if (fromEmail && subject && message) {
      setDisableButton(true);
      emailjs
        .send(
          "paulsontiti",
          "paulsontiti",
          {
            to_name: "paulsontiti@gmail.com",
            message: `Subject: ${subject} \n ${message}`,
            from_name: fromEmail,
          },
          process.env.PUBLIC_KEY
        )
        .then((response: any) => {
          setErrMsg("");
          if (response.status === 200) {
            setSuccessMsg(
              "Thanks for contacting me. You will hear from me soon"
            );
          }
          setDisableButton(false);
        })
        .catch((err: any) => {
          setSuccessMsg("");
          setErrMsg("Something wrong happened, please try again");
          setDisableButton(false);
        });
    } else {
      setSuccessMsg("");
      setErrMsg("Ensure you provide the required fields");
      setDisableButton(false);
    }
  }
  return (
    <section
      id="contact-me"
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
      <Mashup />
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">{`Let's Connect`}</h5>
        <p className="text-stone-300 mb-4 max-w-md">
          {`I'm a logical and results-driven Software Developer dedicated to
          building and optimizing user-focused software for customers with
          various business objectives. Judicious and creative when crafting
          effective websites, apps and platforms to propel competitive advantage
          and revenue growth.`}
        </p>
        <div className="socials flex gap-2">
          <Link href={"https://www.linkedin.com/in/paulson-nwoha-2b255a113/"}>
            <FaLinkedinIn className="cursor-pointer  h-10 w-10 m-2 text-primary-500 group-hover/link:text-white" />
          </Link>
          <Link href={"https://github.com/paulsontiti/"}>
            <FaGithub className="cursor-pointer  h-10 w-10 m-2 text-primary-500 group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div>
        {successMsg && (
          <div className="bg-green-700 text-white py-2 px-4 mb-4">
            {successMsg}
          </div>
        )}
        {errMsg && (
          <div className="bg-red-700 text-white py-2 px-4 mb-4">{errMsg}</div>
        )}
        <form className="flex flex-col gap-4" onSubmit={(e) => SendEmail(e)}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="text-white text-sm font-medium block mb-1"
            >
              Your email<span className="text-red-600">*</span>
            </label>
            <input
              value={fromEmail}
              className="
            bg-[#18191E] border border-stone-100
            placeholder-[#9CA2A9] text-gray-100
            text-sm block w-full p-2.5
            h-10 px-2 rounded-lg
             focus:border-primary-500"
              type="email"
              id="email"
              required
              placeholder="john@gmail.com"
              onChange={(e) => {
                setFromEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="subject"
              className="text-white text-sm font-medium block mb-1"
            >
              Subject<span className="text-red-600">*</span>
            </label>
            <input
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className="
            bg-[#18191E] border border-stone-100
            placeholder-[#9CA2A9] text-gray-100
            text-sm block w-full p-2.5
            h-10 px-2 rounded-lg
             focus:border-primary-500"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="message"
              className="text-white text-sm font-medium block mb-1"
            >
              Message<span className="text-red-600">*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="
            bg-[#18191E] border border-stone-100
            placeholder-[#9CA2A9] text-gray-100
            text-sm block w-full p-2.5
             px-2 rounded-lg
             focus:border-primary-500"
              id="message"
              rows={10}
              required
              placeholder="I like what i see in your portfolio, let's talk business"
            />
          </div>
          <button
            type="submit"
            disabled={disableButton}
            className={`bg-gradient-to-br from-orange-700 via-pink-500 to-yellow-500
             text-white rounded-full hover:bg-secondary-500 py-2.5 px-2.5 w-full font-medium`}
          >
            Seng Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
