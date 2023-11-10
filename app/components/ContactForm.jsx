"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    alert("Form Submitted Successfully");
    console.log(data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
            {...register("fullname", {
              required: "Full Name is required",
              minLength: {
                value: 3,
                message: "Full Name should be between 3 and 30 characters",
              },
              maxLength: {
                value: 30,
                message: "Full Name should be between 3 and 30 characters",
              },
            })}
            type="text"
            id="fullname"
            placeholder="Sadrealam"
            className={`shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.fullname ? "border-red-500" : ""
            }`}
          />
          {errors.fullname && (
            <p className="text-red-500 text-xs italic">
              {errors.fullname.message}
            </p>
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
            {...register("phonenumber", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid phone number",
              },
            })}
            type="tel"
            id="phonenumber"
            placeholder="1234567890"
            className={`shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.phonenumber ? "border-red-500" : ""
            }`}
          />
          {errors.phonenumber && (
            <p className="text-red-500 text-xs italic">
              {errors.phonenumber.message}
            </p>
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
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            type="email"
            id="email"
            placeholder="xyz@gmail.com"
            className={`shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
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
            {...register("message", {
              required: "Message is required",
              validate: (value) =>
                value.split(/\s+/).length <= 50 ||
                "Message should be under 50 words",
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none ${
              errors.message ? "border-red-500" : ""
            }`}
            id="message"
            placeholder="Type Your Message Here"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs italic">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="mb-2">
          <button
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Send"}
          </button>
        </div>
      </form>
    </>
  );
}
