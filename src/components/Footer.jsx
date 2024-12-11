import React from 'react';

const Footer = () => {
    const CurrentYear = new Date().getFullYear();
  return (
    <footer className="py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-white text-sm">
          © {CurrentYear} EcmosDev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;