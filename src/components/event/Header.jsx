import React from "react";
import HeadImg from "../../assets/event/istockphoto-1322205587-612x612.jpg";

export default function Header() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden mt-16">
      <img
        src={HeadImg}
        alt="Conference hall filled with attendees"
        width={1200}
        height={400}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/30 px-16">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Alumni Meetup 2021-24
          </h1>
          <p className="text-lg text-white mb-6 max-w-3xl">
            The ecosystem of Trumio includes two sets of connected personas at
            the University, and the Industry/Client level. As a Software as a
            Service platform, Trumio's functionality covers the following key
            areas.
          </p>
          <div className="flex flex-wrap items-center text-white gap-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              29th December, 2024
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Bangalore, India
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
