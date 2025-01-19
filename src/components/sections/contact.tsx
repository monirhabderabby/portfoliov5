import {
  AiFillGithub,
  AiOutlineCode,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import EmailCopy from "./email-copy";

const Contact = () => {
  return (
    <div className="min-h-screen lg:min-h-[80vh]  flex flex-col justify-center gap-y-[30px]  px-[20px]">
      <div className="flex justify-center items-center">
        <p className="bg-[#E5E7EB]/10 text-white/90 font-light px-[20px] py-[4px] rounded-[50px] ">
          Get in touch
        </p>
      </div>
      <p className="md:max-w-[576px] mx-auto text-center text-white/70 text-[14px] md:text-[16px]">
        What&apos;s next? Feel free to reach out to me if you&apos;re looking
        for a developer, have a query, or simply want to connect.
      </p>
      <EmailCopy />
      <div
        className="flex flex-col gap-y-[10px] justify-center 
            items-center"
      >
        <p className="text-white/60 font-light text-[12px] md:text-[14px]">
          You may also find me on these platforms
        </p>
        <div className="flex items-center gap-[20px] mt-1">
          <a href="https://github.com/monirhabderabby" target="_github">
            <AiFillGithub className="text-white/80 hover:text-white hover:scale-110 duration-300 transition-all ease-linear" />
          </a>
          <a
            href="https://www.linkedin.com/in/monirhabderabby/"
            target="_linkedIN"
          >
            <AiOutlineLinkedin className="text-white/80 hover:text-white hover:scale-110 duration-300 transition-all ease-linear" />
          </a>

          <a
            href="https://www.facebook.com/monirhabderabby/"
            target="_facebook"
          >
            <AiOutlineFacebook className="text-white/80 hover:text-white hover:scale-110 duration-300 transition-all ease-linear" />
          </a>
          <a href="https://leetcode.com/u/monirhrabby" target="_leetcode">
            <AiOutlineCode className="text-white/80 hover:text-white hover:scale-110 duration-300 transition-all ease-linear" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
