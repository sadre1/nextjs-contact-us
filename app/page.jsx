import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <div id="time" className="bg-cover bg-center h-screen ">
      <div className="p-3 max-w-3xl mx-auto bg-opacity-50 ">
        <div className=" p-3 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-1xl fond-thin">Enter Your Details</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
