import React from "react";
import CV from "../../../public/resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let&apos;s Get Connected!
      </a>
    </div>
  );
};

export default CTA;
