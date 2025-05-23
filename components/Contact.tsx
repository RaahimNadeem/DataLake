import React, { useState } from 'react';
import HeaderAlt from './ui/HeaderAlt';
import Footer from './footer';

const servicesList = [
  'AI',
  'Cloud Services',
  'Business Automation',
  'Cyber',
  'Data',
  'Digital Business & Products',
  'Sustainability',
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    function: '',
    phone: '',
    message: '',
    services: [] as string[],
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleServiceToggle = (service: string) => {
    setForm((prev) => {
      const alreadySelected = prev.services.includes(service);
      return {
        ...prev,
        services: alreadySelected
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission (API call, etc.)
  };

  return (
    <div className="min-h-screen flex pt-16 flex-col bg-white">
      <HeaderAlt />
      <section className="w-full mx-auto flex flex-col items-stretch md:flex-row gap-8 sm:gap-12 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12">
        {/* Left: Semi-circle Card */}
        <div className="md:w-1/3 flex flex-col items-start justify-start">
          <div className="relative w-full sm:w-[90%] h-64 sm:h-72 md:h-[300px] flex items-center justify-center">
            {/* Semi-circle for desktop, regular card for mobile */}
            <div className="absolute inset-0 hidden md:block">
              <div className="h-full w-[90%] bg-[#19232e] rounded-r-3xl shadow-lg" />
            </div>
            <div className="relative z-10 flex flex-col items-start justify-center h-full w-full sm:w-2/3 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-0 text-white">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Get in touch with us</h2>
              <p className="text-sm sm:text-base font-medium">
                Would you like to discuss your next project with us? Do you have any questions or need support? Whatever the case, we look forward to hearing from you.
              </p>
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <div className="md:w-2/3 flex flex-col">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#19232e] mb-6 sm:mb-8 md:mb-10 leading-tight">Contact us</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 w-full max-w-2xl">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border-0 border-b-2 border-gray-200 focus:border-[#4a6d8c] bg-transparent text-base sm:text-lg py-2 sm:py-3 px-0 outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border-0 border-b-2 border-gray-200 focus:border-[#4a6d8c] bg-transparent text-base sm:text-lg py-2 sm:py-3 px-0 outline-none transition"
            />
            <input
              type="text"
              name="function"
              placeholder="Function"
              value={form.function}
              onChange={handleChange}
              className="w-full border-0 border-b-2 border-gray-200 focus:border-[#4a6d8c] bg-transparent text-base sm:text-lg py-2 sm:py-3 px-0 outline-none transition"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border-0 border-b-2 border-gray-200 focus:border-[#4a6d8c] bg-transparent text-base sm:text-lg py-2 sm:py-3 px-0 outline-none transition"
            />
            <div>
              <div className="mb-2 font-medium text-[#19232e] text-sm sm:text-base">I am interested in...</div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {servicesList.map((service) => (
                  <button
                    type="button"
                    key={service}
                    onClick={() => handleServiceToggle(service)}
                    className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg border text-sm sm:text-base font-semibold transition
                      ${form.services.includes(service)
                        ? 'bg-[#4a6d8c] text-white border-[#4a6d8c]'
                        : 'bg-gray-100 text-[#19232e] border-gray-200 hover:bg-[#eaf1f7]'}
                    `}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Message (optional)"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full border-0 border-b-2 border-gray-200 focus:border-[#4a6d8c] bg-transparent text-base sm:text-lg py-2 sm:py-3 px-0 outline-none transition resize-none"
            />
            <div className="flex items-start gap-2 mt-2">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                className="w-4 h-4 mt-1 accent-[#4a6d8c]"
                required
              />
              <label htmlFor="consent" className="text-xs sm:text-sm text-[#28394b]">
                I agree to receive communications from Datalake.
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 rounded-lg bg-[#19232e] text-white font-bold text-base sm:text-lg shadow hover:bg-[#28394b] transition-colors mt-2"
            >
              {submitted ? 'Thank you!' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact; 