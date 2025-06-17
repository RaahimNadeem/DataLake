import React, { useState } from 'react';
import HeaderAlt from '@/components/ui/HeaderAlt';
import Footer from '@/components/ui/footer';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    services: [
      'AI',
      'Cloud Services',
      'Business Automation',
      'Cyber',
      'Data',
      'Digital Business & Products',
      'Sustainability'
    ],
    getInTouch: {
      title: "Get in touch with us",
      description: "Would you like to discuss your next project with us? Do you have any questions or need support? Whatever the case, we look forward to hearing from you."
    },
    form: {
      title: "Contact us",
      name: "Name",
      email: "Email",
      function: "Function",
      phone: "Phone number",
      interests: "I am interested in...",
      message: "Message (optional)",
      consent: "I agree to receive communications from Datalake.",
      submit: "Send Message",
      thankYou: "Thank you!"
    }
  },
  ar: {
    services: [
      'الذكاء الاصطناعي',
      'خدمات السحابة',
      'أتمتة الأعمال',
      'الأمن السيبراني',
      'البيانات',
      'الأعمال الرقمية والمنتجات',
      'الاستدامة'
    ],
    getInTouch: {
      title: "تواصل معنا",
      description: "هل ترغب في مناقشة مشروعك القادم معنا؟ هل لديك أي أسئلة أو تحتاج إلى دعم؟ في كل الحالات، نتطلع إلى سماع منك."
    },
    form: {
      title: "اتصل بنا",
      name: "الاسم",
      email: "البريد الإلكتروني",
      function: "الوظيفة",
      phone: "رقم الهاتف",
      interests: "أنا مهتم بـ...",
      message: "الرسالة (اختياري)",
      consent: "أوافق على تلقي اتصالات من داتاليك.",
      submit: "إرسال الرسالة",
      thankYou: "شكراً لك!"
    }
  }
};

const Contact = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];
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
    <div className="min-h-screen flex pt-16 flex-col bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <HeaderAlt />
      <section className="w-full mx-auto flex flex-col items-stretch md:flex-row gap-8 sm:gap-12 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12">
        {/* Left: Semi-circle Card */}
        <div className="md:w-1/3 flex flex-col items-start justify-start">
          <div className="relative w-full sm:w-[90%] h-64 sm:h-72 md:h-[300px] flex items-center justify-center">
            {/* Semi-circle for desktop, regular card for mobile */}
            <div className="absolute inset-0 hidden md:block">
              <div className={`h-full w-[90%] bg-[#19232e] ${language === 'ar' ? 'rounded-l-3xl' : 'rounded-r-3xl'} shadow-lg`} />
            </div>
            <div className="relative z-10 flex flex-col items-start justify-center h-full w-full sm:w-2/3 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-0 text-white">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{currentLang.getInTouch.title}</h2>
              <p className="text-sm sm:text-base font-medium">
                {currentLang.getInTouch.description}
              </p>
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <div className="md:w-2/3 flex flex-col">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#19232e] mb-6 sm:mb-8 md:mb-10 leading-tight">{currentLang.form.title}</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 w-full max-w-2xl">
            <input
              type="text"
              name="name"
              placeholder={currentLang.form.name}
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border-0 border-b-2 border-gray-200 focus:border-[#4a6d8c] bg-transparent text-base sm:text-lg py-2 sm:py-3 px-0 outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder={currentLang.form.email}
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border-0 border-b-2 border-gray-200 focus:border-[#4a6d8c] bg-transparent text-base sm:text-lg py-2 sm:py-3 px-0 outline-none transition"
            />
            <input
              type="text"
              name="function"
              placeholder={currentLang.form.function}
              value={form.function}
              onChange={handleChange}
              className="w-full border-0 border-b-2 border-gray-200 focus:border-[#4a6d8c] bg-transparent text-base sm:text-lg py-2 sm:py-3 px-0 outline-none transition"
            />
            <input
              type="text"
              name="phone"
              placeholder={currentLang.form.phone}
              value={form.phone}
              onChange={handleChange}
              className="w-full border-0 border-b-2 border-gray-200 focus:border-[#4a6d8c] bg-transparent text-base sm:text-lg py-2 sm:py-3 px-0 outline-none transition"
            />
            <div>
              <div className="mb-2 font-medium text-[#19232e] text-sm sm:text-base">{currentLang.form.interests}</div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {currentLang.services.map((service) => (
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
              placeholder={currentLang.form.message}
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
                {currentLang.form.consent}
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 rounded-lg bg-[#19232e] text-white font-bold text-base sm:text-lg shadow hover:bg-[#28394b] transition-colors mt-2"
            >
              {submitted ? currentLang.form.thankYou : currentLang.form.submit}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact; 