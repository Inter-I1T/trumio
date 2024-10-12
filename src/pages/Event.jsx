import { ChevronDown } from "lucide-react";
import Header from "../components/event/Header";
import { Link } from "react-router-dom";
import Event1 from "../assets/event/1131w-oUHWN0j47BU.webp";
import Forbes from "../assets/event/forbes.jpg";
import Stem from "../assets/event/stem.jpg";
import Tech from '../assets/event/tech.webp'

const categories = [
  "Web Development",
  "Product Management",
  "Scraping and Analysis",
  "App Development",
  "AI/ML",
  "UI/UX",
  "Blockchain",
];

const events = [
  {
    title: "World Business Forum",
    location: "Backspace: Mumbai",
    description: "Business Strategy",
    price: "₹499 onwards",
    image: Event1,
  },
  {
    title: "Forbes Power of Women Summit",
    location: "Jio World Drive: Mumbai",
    description: "Women Leaders",
    price: "₹499 onwards",
    image: Forbes,
  },
  {
    title: "Forbes 30 Under 30 Summit",
    location: "Backspace: Mumbai",
    description: "Young Entrepreneurs",
    price: "₹499 onwards",
    image: Stem,
  },
  {
    title: "Ernst & Young's Strategic Growth Forum",
    location: "Jio World Drive: Mumbai",
    description: "Strategic Growth",
    price: "₹499 onwards",
    image: Tech
  },
  {
    title: "Women Lead Festival",
    location: "Backspace: Mumbai",
    description: "Women Advancement",
    price: "₹499 onwards",
    image: Stem
  },
];

export default function Event() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-20 py-8">
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <h1 className="text-2xl font-semibold mr-2">Events in</h1>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300">
                <option>Mumbai</option>
              </select>
              <ChevronDown
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <Link to="/event/description">
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                  <p className="text-gray-600 mb-2">{event.location}</p>
                  <p className="text-gray-700 mb-2">{event.description}</p>
                  <p className="text-blue-600 font-medium">{event.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
