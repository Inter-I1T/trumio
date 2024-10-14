import React, { useState } from 'react';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        attendance: '',
        question: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the data to your server
    };

    const handleClear = () => {
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            attendance: '',
            question: ''
        });
    };

    return (
        <div className="min-h-screen bg-white mt-16">
            <header className="bg-blue-500 text-white py-8 px-4 text-center">
                <h1 className="text-3xl font-bold mb-2">Join Our Online Alumni Event</h1>
                <p className="text-lg">Register below to reserve your spot and submit questions for the speaker.</p>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
                    <p className="mb-6">Fill out the form below to confirm your attendance.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            <p className="mt-1 text-xs text-gray-500">Please enter your full name as per records</p>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            <p className="mt-1 text-xs text-gray-500">Make sure to provide a valid email address</p>
                        </div>

                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            <p className="mt-1 text-xs text-gray-500">Provide a contact number for event updates</p>
                        </div>
                        <div>
                            <span className="block text-sm font-medium text-gray-700 mb-1">Confirmation of Attendance</span>
                            <div className="flex space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="attendance"
                                        value="yes"
                                        checked={formData.attendance === 'yes'}
                                        onChange={handleChange}
                                        className="form-radio text-blue-600"
                                    />
                                    <span className="ml-2">Yes, I will attend</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="attendance"
                                        value="no"
                                        checked={formData.attendance === 'no'}
                                        onChange={handleChange}
                                        className="form-radio text-blue-600"
                                    />
                                    <span className="ml-2">No, I can't make it</span>
                                </label>
                            </div>
                            <p className="mt-1 text-xs text-gray-500">Please select your attendance status</p>
                        </div>

                        <div>
                            <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">Submit Questions for the Speaker</label>
                            <textarea
                                id="question"
                                name="question"
                                value={formData.question}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                            <p className="mt-1 text-xs text-gray-500">You can submit questions for the speaker in advance</p>
                        </div>

                        <div className="flex space-x-4">
                            <button
                                type="button"
                                onClick={handleClear}
                                className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Clear Form
                            </button>
                            <button
                                type="submit"
                                className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <footer className="bg-blue-500 text-white py-8 px-4 mt-12">
                <div className="container mx-auto flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <span className="text-blue-500 text-xs font-bold">DAY 1</span>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Welcome to the Alumni Event</h2>
                        <p>Join us for an exciting discussion with our guest speaker.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}