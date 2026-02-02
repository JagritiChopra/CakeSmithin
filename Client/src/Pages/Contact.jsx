import React, { useRef } from "react";
import { useEmailForm } from "../hooks/useEmailForm";

const Contact = () => {
  const formRef = useRef();

  const { sendForm, loading } = useEmailForm({
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendForm(formRef);

    if (result.success) {
      alert("Message sent successfully! ✅");
      formRef.current.reset();
    } else {
      alert("Something went wrong 😢 Please try again.");
    }
  };

  return (
    <main className="bg-[#121212] text-[#ECE0D1] min-h-screen antialiased">
      {/* HERO */}
      <section className="px-6 lg:px-20 pt-20 pb-12 max-w-7xl mx-auto text-center">

        <h1 className="text-5xl lg:text-7xl font-serif text-[#F5F5F5] mb-4">
          Contact Us
        </h1>
        <p className="text-[#ECE0D1]/60 max-w-2xl mx-auto text-lg italic">
          We'd love to hear from you. Whether it's wholesale, custom cakes, or
          just to say hello.
        </p>
      </section>

      {/* CONTENT */}
      <section className="px-6 lg:px-20 py-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT INFO */}
          <div className="lg:col-span-5 space-y-12">
            <InfoItem icon="location_on" title="Visit Our Bakery">
              Swastik Enclave<br />
              Ludhiana 141007, Punjab
            </InfoItem>

            <InfoItem icon="call" title="Call Us">
              <br />
              <span className="text-sm italic opacity-60">
                Mon–Fri · 10 a.m. – 7 p.m.
              </span>
            </InfoItem>

            <InfoItem icon="mail" title="Email Us">
              thecakesmith.ldh@gmail.com
            </InfoItem>

            <InfoItem icon="photo_camera" title="Instagram">
              <a
                href="https://www.instagram.com/cake.smithin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d8876e] underline underline-offset-4 transition"
              >
                @cake.smithin
              </a>
            </InfoItem>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
           <div
  className="bg-[#1E1E1E] p-8 lg:p-12 rounded-3xl
             border border-white/30
             transition-all
             shadow-sm"
  style={{
    boxShadow:
      "inset 0 0 0 1px rgba(216,135,110,0.4), 0 0 12px rgba(216,135,110,0.35)",
  }}
>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                 <input type="hidden" name="form_type" value="Contact Form" />
                <div className="grid md:grid-cols-2 gap-6">
                  <Input name="user_name" label="Full Name" placeholder="Your name" />
                  <Input
                    type="email"
                    name="user_email"
                    label="Email Address"
                    placeholder="Your email"
                  />
                </div>

                <Select
                  name="message_type"
                  label="Type of Message"
                  options={[
                    "General Inquiry",
                    "Wholesale Partnership",
                    "Event Catering",
                    "Career Opportunities",
                  ]}
                />

                <Textarea
                  name="message"
                  label="Message"
                  placeholder="Write your message here..."
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-16 rounded-xl font-bold text-lg flex items-center justify-center gap-3
                  ${
                    loading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-[#d8876e] hover:bg-[#c5775f]"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

/* ---------- Reusable Subcomponents ---------- */

const InfoItem = ({ icon, title, children }) => (
  <div className="flex gap-6">
    <div className="w-14 h-14 rounded-full bg-[#d8876e]/10 flex items-center justify-center text-[#d8876e]">
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <div>
      <h3 className="text-[#F5F5F5] font-bold text-xl mb-1">{title}</h3>
      <p className="text-[#ECE0D1]/70 font-serif text-lg">{children}</p>
    </div>
  </div>
);

const Input = ({ label, ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-md font-medium text-[#ECE0D1]/80">{label} :</label>
    <input
      required
      className="w-full bg-[#1E1E1E] border border-white/10 rounded-xl px-5 py-4 text-[#ECE0D1]"
      {...props}
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-md font-medium text-[#ECE0D1]/80">{label} :</label>
    <textarea
      rows="5"
      required
      className="w-full bg-[#1E1E1E] border border-white/10 rounded-xl px-5 py-4 text-[#ECE0D1]"
      {...props}
    />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-md font-medium text-[#ECE0D1]/80">{label} :</label>
    <select
      required
      className="w-full bg-[#1E1E1E] border border-white/10 rounded-xl px-5 py-4 text-[#ECE0D1]"
      {...props}
    >
      <option value="">Select one</option>
      {options.map((opt, i) => (
        <option key={i}>{opt}</option>
      ))}
    </select>
  </div>
);

export default Contact;
