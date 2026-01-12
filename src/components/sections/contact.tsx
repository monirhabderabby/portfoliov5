import {
  AiFillGithub,
  AiOutlineCode,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import EmailCopy from "./email-copy";

const Contact = () => {
  return (
    <section
      className="min-h-[calc(100vh-60px)] py-24 flex flex-col justify-center items-center px-4 md:px-6"
      aria-label="Contact Section"
    >
      {/* Section Header */}
      <header className="flex flex-col items-center mb-8">
        <span className="bg-[#E5E7EB]/10 text-white/90 font-light px-6 py-2 rounded-full">
          Get in Touch
        </span>

        {/* ✅ Updated <h1> with fixed font size */}
        <h1 className="text-[25px] md:text-[30px] font-bold text-white mt-4 text-center">
          Let&apos;s Build Something Amazing Together
        </h1>

        <p className="text-white/70 mt-2 max-w-xl text-center text-[14px] md:text-[16px]">
          I’m Monir Hossain Rabby, a Full Stack Developer skilled in Next.js,
          TypeScript, Prisma, and MongoDB, PostgreSQL. Whether you have a
          project idea, want to collaborate, or just say hi, I’d love to hear
          from you!
        </p>
      </header>

      {/* Email CTA */}
      <EmailCopy />

      {/* Social Links */}
      <div className="mt-12 flex flex-col items-center gap-2">
        <p className="text-white/60 font-light text-[12px] md:text-[14px]">
          You may also find me on these platforms
        </p>
        <div className="flex items-center gap-5 mt-2">
          <a
            href="https://github.com/monirhabderabby"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <AiFillGithub className="text-white/80 h-6 w-6 hover:text-white hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/monirhabderabby/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <AiOutlineLinkedin className="text-white/80 h-6 w-6 hover:text-white hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://www.facebook.com/monirhabderabby/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
          >
            <AiOutlineFacebook className="text-white/80 h-6 w-6 hover:text-white hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://leetcode.com/u/monirhrabby"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
          >
            <AiOutlineCode className="text-white/80 h-6 w-6 hover:text-white hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
