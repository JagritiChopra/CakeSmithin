import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const NewsletterSignup = () => {
  const formRef = useRef();

  const colors = {
    primary: "#d8876e",
    backgroundDark: "#121212",
    cardDark: "#1E1E1E",
    offWhite: "#F5F5F5",
    softCream: "#ECE0D1",
    white: "#ffffff",
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3n6ffew",        // same as Contact.jsx
        "template_mxsdz0q",      // 🔁 reuse your Contact template ID
        formRef.current,
        "MswmxXMOhL_1Vjjxo"
      )
      .then(
        () => {
          alert("Subscribed successfully! 🎉");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong. Try again.");
        }
      );
  };

  return (
     <div className="bg-[#121212] text-white min-h-screen relative">
     <section
        className="relative py-32"
        style={{ backgroundColor: "rgba(216, 135, 110, 0.06)" }}
      >
      <div className="max-w-3xl mx-auto text-center space-y-8"
      style={{
            backgroundColor: "#121212",
            backgroundImage: `
              radial-gradient(rgba(216, 135, 110, 1) 0.5px, transparent 0.5px),
              radial-gradient(rgba(216, 135, 110, 1) 0.5px, #121212 0.5px)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
            opacity: 0.06,
          }}>
        <h2 className="text-4xl font-bold tracking-tight" style={{ color: colors.white }}>
          Join the Crust Club
        </h2>

        <p className="text-lg" style={{ color: `${colors.white}B3` }}>
          Subscribe to get weekly specials, fresh-out-of-the-oven alerts, and exclusive recipes.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          {/* Hidden field to identify form type */}
          <input type="hidden" name="form_type" value="Newsletter Signup" />

          <input
            type="email"
            name="user_email"
            placeholder="your@email.com"
            required
            className="flex-grow h-14 rounded-xl border-none px-6 focus:ring-2 shadow-sm"
            style={{ backgroundColor: "#fff", color: "#121212" }}
          />

          <button
            type="submit"
            className="font-bold h-14 px-8 rounded-xl shadow-lg active:scale-95 transition-all"
            style={{
              backgroundColor: colors.primary,
              color: "#ffffff",
              boxShadow: `0 10px 15px -3px ${colors.primary}4D`,
            }}
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs font-medium" style={{ color: `${colors.white}66` }}>
          No spam, just floury goodness once a week.
        </p>
      </div>
    </section>
    </div>
  );
};

export default NewsletterSignup;
