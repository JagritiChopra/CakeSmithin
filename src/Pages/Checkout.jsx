import React, { useEffect, useState, useRef } from "react";
import { useEmailForm } from "../hooks/useEmailForm";

const CheckOut = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [pickupTime, setPickupTime] = useState(
    "Earliest available (in 2 hours)"
  );

  const formRef = useRef();

  const { sendForm, loading } = useEmailForm({
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    const grandTotal = storedCart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
    setTotal(grandTotal);
  }, []);

  const handlePlaceOrder = async () => {
    if (cart.length === 0) return alert("Your cart is empty!");

    const userName = document.getElementById("user_name").value;
    const userEmail = document.getElementById("user_email").value;

    if (!userName || !userEmail)
      return alert("Please fill in your name and email!");

    const orderItems = cart
      .map(
        (item) =>
          `${item.title} (x${item.qty}) - $${item.price.toFixed(2)}`
      )
      .join("\n");

    const messageBody = `
    User : ${userName}
    User Email: ${userEmail}
Order Items:
${orderItems}

Total: $${total.toFixed(2)}
Pickup Time: ${pickupTime}
Payment Method: ${paymentMethod}
`;

    formRef.current.user_name.value = userName;
    formRef.current.user_email.value = userEmail;
    formRef.current.message.value = messageBody;
    formRef.current.form_type.value = "New Order";

    const result = await sendForm(formRef);

    if (result.success) {
      alert("Order placed successfully! 🧁");
      localStorage.removeItem("cart");
      formRef.current.reset();
    } else {
      alert("Failed to place order 😢");
    }
  };

  return (
    <main className="bg-[#121212] text-[#F5F5F0] min-h-screen">
      {/* Hero */}
      <div className="py-12 bg-[rgba(216,135,110,0.05)] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-black mb-2">Checkout</h1>
          <p className="text-white/60">Complete your artisanal pickup order</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <form ref={formRef} className="flex flex-col lg:flex-row gap-12">
          {/* Hidden EmailJS Fields */}
          <input type="hidden" name="user_name" />
          <input type="hidden" name="user_email" />
          <input type="hidden" name="message" />
          <input type="hidden" name="form_type" />

          {/* Left Side */}
          <div className="grow space-y-8">
            {/* Contact */}
            <section className="bg-[#1E1E1E] p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-black mb-6">1. Contact Info</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  id="user_name"
                  placeholder="Full Name"
                  className="bg-[#121212] p-3 rounded-xl border border-white/10"
                />
                <input
                  id="user_email"
                  placeholder="Email Address"
                  className="bg-[#121212] p-3 rounded-xl border border-white/10"
                />
              </div>
            </section>

            {/* Pickup */}
            <section className="bg-[#1E1E1E] p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-black mb-6">2. Pickup Time</h2>
              <select
                className="w-full bg-[#121212] p-3 rounded-xl border border-white/10"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
              >
                <option>Earliest available (in 2 hours)</option>
                <option>10:00 AM - 10:30 AM</option>
                <option>10:30 AM - 11:00 AM</option>
                <option>11:00 AM - 11:30 AM</option>
              </select>
            </section>

            {/* Payment */}
            <section className="bg-[#1E1E1E] p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-black mb-6">3. Payment</h2>
              <label className="flex gap-3 mb-3">
                <input
                  type="radio"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                />
                Cash on Pickup
              </label>
              <label className="flex gap-3">
                <input
                  type="radio"
                  checked={paymentMethod === "paynow"}
                  onChange={() => setPaymentMethod("paynow")}
                />
                Pay Now
              </label>

              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={loading}
                className="mt-8 w-full py-4 rounded-xl border-2 border-[#d8876e] font-bold hover:scale-[1.01] transition"
              >
                {loading ? "Sending..." : "Place Order"}
              </button>
            </section>
          </div>

          {/* Right Summary */}
          <aside className="w-full lg:w-96">
            <div className="sticky top-24 bg-[#1E1E1E] p-8 rounded-2xl border border-white/10">
              <h3 className="font-black mb-6">Order Summary</h3>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between mb-3 text-sm">
                  <span>{item.title} x{item.qty}</span>
                  <span>${(item.qty * item.price).toFixed(2)}</span>
                </div>
              ))}
              <hr className="my-4 border-white/10" />
              <p className="font-black text-lg">Total: ${total.toFixed(2)}</p>
            </div>
          </aside>
        </form>
      </div>
    </main>
  );
};

export default CheckOut;
