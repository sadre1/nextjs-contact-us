// ... (your imports remain unchanged)
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [userLists, setUserLists] = useState([]);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!fullname.trim()) {
      errors.fullname = "Full Name is required";
    } else if (fullname.length < 3 || fullname.length > 30) {
      errors.fullname = "Full Name should be between 3 and 30 characters";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!phonenumber.trim()) {
      errors.phonenumber = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(phonenumber)) {
      errors.phonenumber = "Invalid phone number";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    } else if (message.split(/\s+/).length > 50) {
      errors.message = "Message should be under 50 words";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSummit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form Submitted Successfully");
      const newUser = {
        fullname: fullname.trim(),
        email: email.trim(),
        message: message.trim(),
        phonenumber: phonenumber.trim(),
      };
      setUserLists([...userLists, newUser]);
      console.log(userLists);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSummit}
        className="py-2 mt-2 border-t flex-col gap-5 max-w-md mx-auto"
      >
        <div className="mb-2">
          <label
            htmlFor="fullname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Full Name
          </label>
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="Sadrealam"
            className={`shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.fullname ? "border-red-500" : ""
            }`}
          />
          {errors.fullname && (
            <p className="text-red-500 text-xs italic">{errors.fullname}</p>
          )}
        </div>

        <div className="mb-2">
          <label
            htmlFor="phonenumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            onChange={(e) => setphonenumber(e.target.value)}
            value={phonenumber}
            id="phonenumber"
            placeholder="xyz@gmail.com"
            className={`shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.phonenumber ? "border-red-500" : ""
            }`}
          />
          {errors.phonenumber && (
            <p className="text-red-500 text-xs italic">{errors.phonenumber}</p>
          )}
        </div>

        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            placeholder="xyz@gmail.com"
            className={`shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>

        <div className="mb-2">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none ${
              errors.message ? "border-red-500" : ""
            }`}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            id="message"
            placeholder="Type Your Message Here"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs italic">{errors.message}</p>
          )}
        </div>

        <button
          className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send
        </button>
      </form>
    </>
  );
}
