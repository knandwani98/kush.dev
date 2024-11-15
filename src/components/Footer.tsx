import React from "react";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center my-container pb-20">
      <small>&copy; 2024 Kushal Nandwani</small>

      <Socials />
    </footer>
  );
};
