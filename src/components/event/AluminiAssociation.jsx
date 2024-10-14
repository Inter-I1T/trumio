// import Image from "next/image"
import React from "react"
import Img1 from '../../assets/event/forbes.jpg'
import { Link } from "react-router-dom"

export default function AlumniConnect() {
  return (
    <div className="container mx-auto px-20 mt-16 py-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1 md:col-span-4 bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={Img1}
              alt="World Business Forum"
              width={400}
              height={200}
              className="w-full h-[50vh] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-4">World Business Forum | NYC</h3>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Register Now
              </button>
            </div>
          </div>
          <div className=" mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-left mb-6">Upcoming Events</h2>
            <div className="flex gap-6">
              <Link to={'/event/alumniRegistration'}>
                <div className="bg-white shadow-md rounded-lg p-4 w-[20vw]">
                  <img src={Img1} alt="Event 1" className="w-full h-44 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold">Event 1</h3>
                  <p className="text-gray-600">Online Event</p>
                  <p className="mt-2">Join us for an exciting online event with industry experts.</p>
                  <p className="mt-2">
                    <span className="text-blue-600 font-semibold">Technology</span>
                  </p>
                  <p className="mt-2 text-gray-500">Speaker Name</p>
                </div>
              </Link>
              <div className="bg-white shadow-md rounded-lg p-4 w-[20vw]">
                <img src={Img1} alt="Event 2" className="w-full h-44 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold">Event 2</h3>
                <p className="text-gray-600">Offline Event</p>
                <p className="mt-2">A special offline event at our new branch location.</p>
                <p className="mt-2">
                  <span className="text-blue-600 font-semibold">Networking</span>
                </p>
                <p className="mt-2 text-gray-500">Speaker Name</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Event Recordings</h2>
            <p className="text-gray-600 mb-4">Watch past event recordings and relive the memorable moments.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Explore Recordings
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Leadership Summit 2021", duration: "2 hours", image: "leadership-summit.jpg" },
            { title: "Career Workshop Series", duration: "1.5 hours", image: "career-workshop.jpg" },
          ].map((recording, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={Img1}
                alt={recording.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{recording.title}</h3>
                <p className="text-sm text-gray-500">Duration: {recording.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}