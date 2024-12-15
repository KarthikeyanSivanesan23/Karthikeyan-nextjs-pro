"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9600455344",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "karthikeyansivanesan23@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "s/2 Staff Quarters Valavajanur Thiruvannamalai",
  },
];

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    // Create WhatsApp message
    const whatsappMessage = `Hello! My name is ${firstname} ${lastname}.
Email: ${email}
Phone: ${phone}
Service Interested: ${service}
Message: ${message}`;

    // Encode the message for use in the URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Redirect to WhatsApp with pre-filled message
    window.open(`https://wa.me/919600455344?text=${encodedMessage}`, "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Let us make the work easier work together to make global
                communications
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="Firstname" required />
                <Input name="lastname" type="text" placeholder="Lastname" required />
                <Input name="email" type="email" placeholder="Email address" required />
                <Input name="phone" type="tel" placeholder="Phone number" required />
              </div>
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Your Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Your Domain</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Hiring Team">Hiring Team</SelectItem>
                    <SelectItem value="Students/Freshers">Students/Freshers</SelectItem>
                    <SelectItem value="Freelancer">Freelancer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                required
              />
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center justify-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-[37px] h-[37px] xl:w-[55px] xl:h-[55px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[17px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-xs">{item.title}</p>
                    <h3 className="text-base">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
