"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Socials = () => {
  return (
    <div className="flex gap-4 justify-between items-center">
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/kushal-nandwani-303003153/"}
        className="opacity-70 hover:opacity-100"
      >
        <Linkedin />
      </Link>

      <Link
        target="_blank"
        href={"https://github.com/knandwani98/"}
        className="opacity-70 hover:opacity-100"
      >
        <Github />
      </Link>

      <Link
        href={`mailto:knandwani27@gmail.com`}
        className="opacity-70 hover:opacity-100"
      >
        <Mail />
      </Link>
    </div>
  );
};
