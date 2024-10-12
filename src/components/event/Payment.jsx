import React from "react";
import { useState } from "react";
import Forbes from "../../assets/event/forbes.jpg";

export default function Payment() {
  const [ticketCount, setTicketCount] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState('credit')

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans mt-20">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="md:w-2/3 space-y-6">
          {/* Event Card */}
          <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-4 border border-blue-100">
            <img
              src={Forbes}
              width={150}
              height={150}
              alt="Forbes 30 under 30"
              className="rounded-lg"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Forbes 30 under 30 Summit</h1>
              <p className="text-gray-600">Fri, 24 Oct, 2024 | 17:00</p>
              <div className="flex items-center gap-1 mt-2">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
                <span>Backspace: Mumbai</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
                <span>2 tickets</span>
                <span className="text-gray-600">Seat A1, A2 | Row 19</span>
              </div>
              <div className="mt-2 inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Mobile tickets
              </div>
            </div>
          </div>

          {/* Low Price */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="font-bold text-lg">Low Price</h2>
            <p className="text-gray-600">
              Prices for this event are currently are the lowest on average
              across the past 7 days on our site
            </p>
          </div>

          {/* Special Note */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="font-bold text-lg">Special Note</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                54 sections have no remaining tickets for this event on our site
              </li>
              <li>Cheapest tickets in section 23 on our site</li>
              <li>
                Less than 2% of total tickets in the venue currently available
                on our site
              </li>
              <li>64 people viewed this event in the past hour</li>
            </ul>
          </div>

          {/* Perks */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="font-bold text-lg">Perks</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Clear view</li>
              <li>You'll be seated together in row 19</li>
            </ul>
          </div>

          {/* Your Seats */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="font-bold text-lg">Your Seats</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>2 tickets | Seated together</li>
              <li>Section U23 | Row 19</li>
            </ul>
            <button className="mt-2 text-blue-600 flex items-center">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              View on Venue Map
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/3">
          <div className="bg-white p-4 rounded-lg shadow-md shadow-md">
            <div className="flex justify-between items-center mb-4">
              <div className="text-2xl font-bold">09:53</div>
              <div className="text-sm text-gray-600">
                left to complete purchase
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              your price is only guaranteed for this time!
            </p>
            <div className="mb-4">
              <label
                htmlFor="tickets"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Please confirm how many tickets you would like to purchase
              </label>
              <select
                id="tickets"
                value={ticketCount}
                onChange={(e) => setTicketCount(Number(e.target.value))}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-600 sm:text-sm rounded-md"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Select payment method
              </p>
              <div className="space-y-2">
                <label className="flex items-center p-3 border rounded-md bg-white">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit"
                    checked={paymentMethod === "credit"}
                    onChange={() => setPaymentMethod("credit")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 flex items-center">
                    <svg
                      className="h-6 w-6 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="5"
                        width="20"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M2 10H22"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    Credit/Debit Card
                  </span>
                </label>
                <label className="flex items-center p-3 border rounded-md bg-white">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 flex items-center">
                    <svg
                      className="h-6 w-6 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.4 5.72C20.4 8.42667 18.9067 10.7467 16.4133 11.84C15.7333 12.1333 14.9867 12.3333 14.1867 12.4267C13.8933 12.4667 13.5867 12.4933 13.2667 12.5067C13.0533 12.52 12.8267 12.52 12.6 12.52H9.14667L7.90667 20H4L7.04 4H16.2667C17.4667 4 18.5467 4.29333 19.4 4.8C20.0267 5.18667 20.4 5.72 20.4 5.72Z"
                        fill="#003087"
                      />
                      <path
                        d="M16.4133 11.84C15.7333 12.1333 14.9867 12.3333 14.1867 12.4267C13.8933 12.4667 13.5867 12.4933 13.2667 12.5067C13.0533 12.52 12.8267 12.52 12.6 12.52H9.14667L7.90667 20H4L5.70667 10.6667H9.85333C10.1733 10.6667 10.4933 10.6533 10.8 10.6267C11.3867 10.5867 11.9467 10.5067 12.4667 10.3867C13.5867 10.12 14.5333 9.65333 15.2667 8.97333C16.1333 8.18667 16.7067 7.14667 16.9333 5.90667C17.0667 5.18667 17.0667 4.54667 16.9467 4C17.5733 4.30667 18.1067 4.73333 18.5067 5.26667C19.2533 6.26667 19.5733 7.54667 19.3867 8.94667C19.0667 10.8133 17.9733 11.3067 16.4133 11.84Z"
                        fill="#001F6B"
                      />
                    </svg>
                    Paypal
                  </span>
                </label>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
