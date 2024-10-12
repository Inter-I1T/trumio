import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Card, CardContent, CardActions } from '@mui/material';


export default function alumniConnect() {
  return (
    <div className="bg-white">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg?height=40&width=120" alt="Trumio logo" width={120} height={40} />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Marketplace</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Project</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">My Team</a>
            <a href="#" className="text-blue-600 font-semibold">Events</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="m21 21-4.3-4.3" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="User avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </header>
      <nav className="flex space-x-4 p-4 border-b">
        <a href="#" className="text-gray-600 hover:text-gray-900">All Events</a>
        <a href="#" className="text-blue-600 font-semibold">Alumni Association</a>
      </nav>
      <main className="p-4">
        <div className="relative mb-8">
          <img
            src="/placeholder.svg?height=400&width=1200"
            alt="Women Lead Festival"
            width={1200}
            height={400}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 rounded-lg">
            <h2 className="text-white text-3xl font-bold mb-2">Women Lead Festival</h2>
            <p className="text-white mb-4">Women Lead: What's next for the C-suite</p>
            <p className="text-white mb-4">JUNE 13 - 14, 2024</p>
            <p className="text-white mb-4">BROOKLYN, NY</p>
            <Button className="bg-yellow-500 text-black hover:bg-yellow-600 w-32">REGISTER</Button>
          </div>
        </div>
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-gray-600 mb-4">Join us for upcoming activities both online and offline.</p>
            <Button className="bg-blue-500 hover:bg-blue-600">View All Events</Button>
          </div>
          <img
            src="/placeholder.svg?height=200&width=300"
            alt="EY Strategic Growth Forum"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-0">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Online Event"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-600 font-semibold">Online Event</span>
                  <span className="text-gray-500 text-sm">Virtual Event</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Join our online networking session on October 15th. Register now!</h3>
                <div className="flex space-x-2">
                  <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded">Webinar</span>
                  <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded">Networking</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Offline Event"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-600 font-semibold">Offline Event</span>
                  <span className="text-gray-500 text-sm">Social Gathering</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Don't miss our alumni picnic on November 7th. Reserve your spot!</h3>
                <div className="flex space-x-2">
                  <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded">In Person</span>
                  <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded">Picnic</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Featured Events</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="col-span-2">
              <CardContent className="p-0">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="World Business Forum"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">World Business Forum | NYC</h3>
                  <Button className="mt-4">Register Now</Button>
                </div>
              </CardContent>
            </Card>
            {["Annual Alumni Banquet", "Career Fair", "Masterclass Series"].map((event, index) => (
              <Card key={event}>
                <CardContent className="p-4 text-center">
                  <img
                    src={`/placeholder.svg?text=${index + 1}&width=64&height=64`}
                    alt={event}
                    width={64}
                    height={64}
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-semibold mb-2">{event}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {index === 0 ? "Formal Dinner" : index === 1 ? "Job Opportunities" : "Skill Development"}
                  </p>
                </CardContent>
                <CardActions  className="justify-center">
                  <Button variant="outline">View now</Button>
                </CardActions >
              </Card>
            ))}
          </div>
        </section>
        <section className="mt-12">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Event Recordings</h2>
              <p className="text-gray-600">Watch past event recordings and relive the memorable moments.</p>
              <Button className="mt-4">Explore Recordings</Button>
            </div>
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="Event Speaker"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Leadership Summit 2021", duration: "2 hours", img: "leadership-summit.jpg" },
              { title: "Career Workshop Series", duration: "1.5 hours", img: "career-workshop.jpg" },
            ].map((recording) => (
              <Card key={recording.title}>
                <CardContent className="p-0">
                  <img
                    src={`/placeholder.svg?text=${recording.title}&width=400&height=200`}
                    alt={recording.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{recording.title}</h3>
                    <p className="text-sm text-gray-500">Duration: {recording.duration}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}