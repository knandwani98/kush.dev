"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [inputError, setInputError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData?.name) {
      setInputError({ ...inputError, name: true });
    } else if (!formData?.email) {
      setInputError({ ...inputError, email: true });
    } else if (!formData?.message) {
      setInputError({ ...inputError, message: true });
    } else if (!formData?.name || !formData?.email || !formData?.message) {
      return;
    }

    const MAIL_SERVICE_ID = process?.env?.NEXT_PUBLIC_MAIL_SERVICE_ID;
    const MAIL_TEMPLATE_ID = process?.env?.NEXT_PUBLIC_MAIL_TEMPLATE_ID;
    const MAIL_PUBLIC_KEY = process?.env?.NEXT_PUBLIC_MAIL_PUBLIC_KEY;

    const templateParams = {
      from_name: formData?.name,
      from_email: formData?.email,
      to_name: "Kushal Nandwani",
      message: formData?.message,
    };

    emailjs
      .send(
        MAIL_SERVICE_ID!,
        MAIL_TEMPLATE_ID!,
        templateParams,
        MAIL_PUBLIC_KEY!
      )
      .then(() => {
        alert("Email sent successfully");
        setInputError({ name: false, email: false, message: false });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="my-container pt-8">
      <h1 className="font-bold text-3xl sm:text-5xl whitespace-nowrap mb-8">
        contact me.
      </h1>

      {/* Projects */}

      <form action="" onSubmit={handleFormSubmit}>
        <fieldset className="grid">
          <div className="flex justify-between items-start gap-4">
            <div className="w-full">
              <input
                onChange={handleInputChange}
                className="border border-primary/50 w-full rounded-sm px-3 py-1 bg-primary-foreground"
                type="text"
                placeholder="Name"
                value={formData?.name}
                name="name"
                required
              />
              {inputError?.name && (
                <p className="text-red-500 mt-1">Name is required</p>
              )}
            </div>
            <div className="w-full">
              <input
                onChange={handleInputChange}
                className="border border-primary/50 w-full rounded-sm px-3 py-1 bg-primary-foreground"
                type="email"
                placeholder="Email"
                value={formData?.email}
                name="email"
                required
              />
              {inputError?.email && (
                <p className="text-red-500 mt-1">Email is required</p>
              )}
            </div>
          </div>

          <div className="my-4">
            <textarea
              onChange={handleInputChange}
              rows={4}
              className="border border-primary/50 w-full rounded-sm px-3 py-1 bg-primary-foreground"
              placeholder="Leave feedback about the site, career opportunities or just to say hello etc."
              value={formData?.message}
              name="message"
              required
            />

            {inputError?.message && (
              <p className="text-red-500 mt-1">Message is required</p>
            )}
          </div>

          <input
            disabled={isLoading}
            type="submit"
            className={cn(
              "w-full bg-primary text-primary-foreground rounded-sm py-1.5",
              isLoading && "bg-primary/70 cursor-not-allowed"
            )}
            value={!isLoading ? "Send Message" : "Loading..."}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default ContactPage;
