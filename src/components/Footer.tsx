import React from "react";
import ThreeDWrapper from "./ThreeDWrapper";


const Footer: React.FC = () => (
  <ThreeDWrapper>
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Tanuj Gupta. All rights reserved. Website created by Priyanshu Verma.</p>
    </footer>
  </ThreeDWrapper>
);

export default Footer;
