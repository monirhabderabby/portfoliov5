import ContactForm from "@/components/forms/contact-form";
import Image from "next/image";

const Page = () => {
  return (
    <section className="min-h-[calc(100vh-60px)] py-24 flex justify-center items-center">
      <div className="w-full container flex flex-col md:flex-row justify-between md:bg-white/5 rounded-lg md:p-5 h-auto">
        <div className="flex-1 ">
          <div className="relative w-full  max-w-[500px] h-full">
            <Image
              src="https://files.edgestore.dev/fo77r421j6yzhzmy/PortfolioV5/_public/profile-photo-black-bg.webp"
              fill
              alt="Monir Hossain Rabby"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Page;
