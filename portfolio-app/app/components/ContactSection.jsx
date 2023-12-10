import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24" id="contact">
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-white mb-4 my-2">
          Let's Connect
        </h2>
        <p className="text-neutral-300 mb-4 max-w-md">
          {" "}
          I'm ready to explore new horizons in the tech industry. Eager to
          connect with fellow professionals who share my passion, opening doors
          to new opportunities, valuable insights, and meaningful
          collaborations. For direct communication, feel free to use the form,
          Linkedin or email me at mohamedtchoketch0@gmail.com
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/mohamed70601">
            <Image src={GithubIcon} alt="github image" />
          </Link>
          <Link href={"https://www.linkedin.com/in/mohamedtchoketch/"}>
            <Image src={LinkedinIcon} alt="linkedin image" />
          </Link>
        </div>
      </div>
      <div>
        <form
          className="flex flex-col gap-2"
          action="https://formsubmit.co/mohamedtchoketch0@email.com"
          method="POST"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium mb-2"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="border border-stone-400 placeholder-neutral-300 text-black text-sm block w-full p-2.5"
              placeholder="name@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="border border-stone-400 placeholder-neutral-300 text-black text-sm block w-full p-2.5"
              placeholder="Subject"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="border border-stone-400 placeholder-neutral-300 text-black text-sm block w-full p-2.5"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="bg-black hover:bg-stone-400 text-white border border-neutral-300 font-medium py-2.5 px-5 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
