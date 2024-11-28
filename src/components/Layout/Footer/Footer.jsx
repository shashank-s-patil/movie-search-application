import "./Footer.css";
import React from "react";

export const Footer = () => {

  return (
    <footer className="text-white text-center py-3">
      <p>
        &copy; {new Date().getFullYear()} MovieSearch. All rights reserved.
      </p>
    </footer>
  );
};