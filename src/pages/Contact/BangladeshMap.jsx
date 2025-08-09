import React from "react";
import ContactForm from "./ContactForm";

const BarishalMap = () => {
  return (
    <div className="w-11/12 mx-auto h-[300px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Barishal Division Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651185.295738588!2d90.10089941506087!3d22.701041210046028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8994158c34b%3A0x5a046f98813a40f4!2sBarisal!5e0!3m2!1sen!2sbd!4v1697893479000!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* <ContactForm></ContactForm> */}
    </div>
  );
};

export default BarishalMap;
