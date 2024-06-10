import React from "react";
import { Logo } from "./Navbar";
import Mashup from "./Mashup";

const Footer = () => {
  return (
    <section className="border-2 border-t-white border-l-transparent border-r-transparent border-b-transparent">
      <div className="container px-4">
        <div className=" text-white mt-5 md:grid md:grid-cols-2 relative h-72">
          <div>
            <Logo />
            <div className="mt-10 relative z-10">
              <h5 className="font-bold text-medium">Contacts:</h5>
              <p>
                <ContactSpan label="Phone:" />
                <ContactSpan label="+2349167704504" />
              </p>
              <p>
                <ContactSpan label="WhatsApp:" />
                <ContactSpan label="+2349167704504" />
              </p>
              <p>
                <ContactSpan label="Email:" />
                <ContactSpan label="Amintiti@gmail.com" />
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <Mashup />
          </div>
        </div>
        <p className="text-center text-white">All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
function ContactSpan({ label }: { label: string }) {
  return <span className=" m-2">{label}</span>;
}
