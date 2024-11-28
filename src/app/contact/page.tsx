import Image from "next/image";
import "./contact.css";

export default function Contact() {
  return (
    <main className="contact-container">
      {/* Contact Section */}
      <div className="contact-form-container">
        
        {/* Left Side: Contact Form */}
        <div className="form-left">
          <h2 className="title">CONTACT ME</h2>

          {/* Form */}
          <form className="flex flex-col gap-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-[#d789be]">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-2 border border-[#82cfde] rounded-md focus:border-[#cf6ba9] focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-[#d789be]">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-2 border border-[#82cfde] rounded-md focus:border-[#cf6ba9] focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Project Details Input */}
            <div>
              <label htmlFor="project" className="block text-lg font-medium text-[#d789be]">Project Details</label>
              <textarea
                id="project"
                name="project"
                className="w-full p-3 mt-2 border border-[#82cfde] rounded-md focus:border-[#cf6ba9] focus:outline-none"
                placeholder="Tell us about your project"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#d789be] text-white py-3 rounded-md mt-6 hover:bg-[#ba609d] transition mb-6 sm:mb-6"
            >
              Contact Us
            </button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="contact-image-container">
          <Image
            src="/2.avif" // Replace with the actual path to your image
            alt="Contact Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </main>
  );
}
