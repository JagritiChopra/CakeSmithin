import React, { useRef } from "react";
import { useEmailForm } from "../hooks/useEmailForm";

const JoinUs = () => {
  const formRef = useRef();

  const { sendForm, loading } = useEmailForm({
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_JOIN_TEMPLATE,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendForm(formRef);

    if (result.success) {
      alert("Application sent successfully! 🎉");
      formRef.current.reset();
    } else {
      alert("Something went wrong 😢 Please try again.");
    }
  };

  return (
    <main className="bg-[#121212] text-[#a0a0a0] min-h-screen overflow-x-hidden flex flex-col items-center">
      {/* HERO */}
      <section className="w-full h-[100vh] max-w-7xl mt-8 px-6">
        <div
          className="relative min-h-[80vh] flex flex-col items-center justify-center text-center p-8 rounded-xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(18,18,18,0.4), rgba(18,18,18,0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5PwF2fYr9wr0xDwSfPCA7sc62T8rt_Vtzz0c5Q-5PtnRt_rRbmXDJi_JDrdgx_xA1BWhhPleGvh-cjrM3nI6qAdwJjfSDGfNWr1bAD4CuKyOLSQxcCLJTvH5MXKaA3US4z4-fgYHXYcNU-fHOSNMlXP10jGLoYcofH-XLoeJ9nxiJWGnV_qIRUhjiKRcwQrh7hQylDfDp8fxVkNcMGkEoQnb0RnVAVziTF4wrVOiOERQNQGW6fQEkYwyOtyGEU9ZyXlL88o4zQ_Q")',
          }}
        >
          <div className="max-w-2xl flex flex-col gap-6">
            <h1 className="text-[#f5f5dc] text-4xl md:text-6xl font-bold">
              Join the Craft at <br />
              <span className="text-[#e2715a] italic">The CakeSmith</span>
            </h1>
            <p className="text-[#f5f5dc]/90 text-lg md:text-xl">
              We are a small team built on love for baking, learning, and sharing.
              If you care about clean, eggless treats, you’ll feel at home here.
            </p>
            <a
              href="#application-form"
              className="inline-flex items-center justify-center bg-[#e2715a] text-white h-14 px-8 rounded-lg font-bold hover:scale-105 transition-transform"
            >
              View Openings
            </a>
          </div>
        </div>
      </section>

      {/* PATHS */}
      <section className="w-full max-w-7xl py-20 px-6">
        <h2 className="text-[#f5f5dc] text-3xl font-bold mb-12 text-center">
          Find Your Place at The CakeSmith
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Experienced Bakers",
              desc:
                "For skilled cake and brownie bakers who want to grow and mentor others.",
              icon: "workspace_premium",
            },
            {
              title: "Baking Training Program",
              desc:
                "A guided program for beginners passionate about baking.",
              icon: "school",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 rounded-xl border border-[#372c2a] bg-[#1e1e1e] p-8 hover:border-[#e2715a]/50 transition"
            >
              <div className="w-14 h-14 rounded-full bg-[#e2715a]/10 flex items-center justify-center text-[#e2715a]">
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-[#f5f5dc] text-2xl font-bold">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section id="application-form" className="w-full max-w-3xl py-16 px-6 mb-20">
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#372c2a] p-8 md:p-12">
          <h2 className="text-[#f5f5dc] text-3xl font-bold text-center mb-4">
            Application Form
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8">
            <Input name="user_name" label="Full Name" placeholder="Your full name" />
            <Input type="email" name="user_email" label="Email" placeholder="Your email" />
            <Input type="tel" name="user_phone" label="Phone Number" placeholder="Your phone number" />
            <Input name="user_experience" label="Baking Experience" placeholder="Beginner / Intermediate / Pro" />
            <Textarea name="user_journey" label="Your Journey" placeholder="Tell us your story..." />

            <button
              type="submit"
              disabled={loading}
              className={`w-full h-14 rounded-xl font-bold text-lg
              ${loading ? "bg-gray-500" : "bg-[#e2715a] hover:bg-[#d1634d]"}`}
            >
              {loading ? "Sending..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

/* ---------- Reusable Inputs ---------- */

const Input = ({ label, ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[#f5f5dc] font-medium">{label} :</label>
    <input
      required
      className="bg-[#1e1e1e] border border-[#372c2a] text-[#f5f5dc] rounded-lg px-4 py-3 focus:outline-none focus:border-[#e2715a]"
      {...props}
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[#f5f5dc] font-medium">{label} :</label>
    <textarea
      rows={4}
      required
      className="bg-[#1e1e1e] border border-[#372c2a] text-[#f5f5dc] rounded-lg px-4 py-3 focus:outline-none focus:border-[#e2715a]"
      {...props}
    />
  </div>
);

export default JoinUs;
