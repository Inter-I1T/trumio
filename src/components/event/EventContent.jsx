import React from "react";
import { MapPin, Calendar, ThumbsUp } from "lucide-react";
import HeadImg from "../../assets/event/forbes30.webp";
import Person from "../../assets/christina.png";
import Event1 from "../../assets/event/1131w-oUHWN0j47BU.webp";
import Forbes from "../../assets/event/forbes.jpg";
import Stem from "../../assets/event/stem.jpg";
import { Link } from "react-router-dom";
import Mumbai from "../../assets/event/mumbai.webp";

export default function EventContent() {
  return (
    <>
      <img
        src={HeadImg}
        alt=""
        className="w-full h-[55vh] object-cover mt-20"
      />
      <div className="max-w-5xl mx-auto p-4 font-sans mt-5">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Forbes 30 Under 30 Summit</h1>
          <p className="text-gray-600">
            Young Entrepreneurs | English | 16yrs+ | 1hr 30mins
          </p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>Fri 24 Oct, 2024</span>
            </div>
            <Link to={"/event/payment"}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
                Book
              </button>
            </Link>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 mt-2">
            <MapPin className="w-5 h-5" />
            <span>Backspace: Mumbai | ₹499 onwards</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2 bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Speaker</h3>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={Person}
                alt="Sangeet Hemant Kumar"
                width={80}
                height={100}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold">Sangeet Hemant Kumar</h4>
                <p className="text-sm text-gray-600">
                  Founder, BHK Global Ventures
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <ThumbsUp className="w-4 h-4 text-green-500" />
              <span className="text-green-500">60420</span>
              <button className="ml-auto border border-gray-300 text-blue-500 px-3 py-1 rounded text-sm hover:bg-gray-200">
                Interested?
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Click on Interested to stay updated about this event
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Mumbai</h3>
            <img
              src={Mumbai}
              alt="Mumbai Map"
              width={200}
              height={150}
              className="w-full rounded-lg"
            />
            <p className="text-xs text-gray-600 mt-2">
              292, Coro, Harbanstal Marg, Sion East, Mumbai, Maharashtra 400022,
              India
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2">Note</h3>
          <p className="text-sm text-gray-600">
            Seating is on a first come first serve basis in that respective
            section
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Why should you attend?</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
            <li>
              The ecosystem of Trumio includes two sets of connected personas at
              the University
            </li>
            <li>and the Industry/Client level. As a Software as a Service</li>
            <li>
              platform, Trumio's functionality covers the following key areas
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">You may also like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: "World Business Forum",
                location: "Backspace, Mumbai",
                date: "Fri, 24 Oct",
                link: Event1,
              },
              {
                title: "Forbes Power Women Summit",
                location: "JW Marriott, Mumbai",
                date: "Sat, 25 Oct",
                link: Forbes,
              },
              {
                title: "EY India Strategic Growth Forum",
                location: "The Westin, Goa",
                date: "Sun, 26 Oct",
                link: Stem,
              },
              {
                title: "Women Lead Festival",
                location: "Taj Lands End, Mumbai",
                date: "Mon, 27 Oct",
                link: Event1,
              },
            ].map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <img
                  src={event.link}
                  alt={event.title}
                  width={150}
                  height={100}
                  className="w-full"
                />
                <div className="p-2">
                  <h4 className="font-semibold text-sm mb-1">{event.title}</h4>
                  <p className="text-xs text-gray-600">{event.location}</p>
                  <p className="text-xs text-gray-600">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
