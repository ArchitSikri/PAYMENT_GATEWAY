
import { useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      if (typeof window.Razorpay !== "function") {
        throw new Error(
          "Razorpay checkout could not be loaded. Please refresh and try again."
        );
      }

      // Step 1: Backend se order create karwao
      const response = await fetch(
        "http://localhost:5000/api/payment/create-order",
        { method: "POST" }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Order creation failed");
      }

      // Step 2: Razorpay checkout ki settings
      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "My MERN Store",
        description: "Test product",
        order_id: data.orderId,

        handler: function (paymentResponse) {
          console.log("Payment response:", paymentResponse);
          alert("Payment response received. Verification pending.");
        },

        theme: {
          color: "#2563eb",
        },
      };

      // Step 3: Payment window open karo
      const checkout = new window.Razorpay(options);

      checkout.on("payment.failed", function (result) {
        console.error("Payment failed:", result.error.description);
        alert("Payment failed. Please try again.");
      });

      checkout.open();
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="storefront">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            N
          </span>
          <span>northstar</span>
        </div>
        <div className="secure-label">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 2.5 4 5v4.4c0 3.7 2.6 6.9 6 8.1 3.4-1.2 6-4.4 6-8.1V5l-6-2.5Zm-1 10.8L6.5 10.8 8 9.4l1 1 3-3 1.5 1.4-4.5 4.5Z" />
          </svg>
          <span>Secure checkout</span>
        </div>
      </header>

      <section className="checkout-layout" aria-labelledby="page-title">
        <div className="intro">
          <p className="eyebrow">A little something for you</p>
          <h1 id="page-title">
            Good things
            <br />
            are just a <span>click away.</span>
          </h1>
          <p className="intro-copy">
            Thoughtfully picked, ready to be yours. Complete your order in just
            a few simple steps.
          </p>

          <div className="trust-note">
            <span className="trust-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Zm-1 11-3-3 1.4-1.4L11 11.2l3.6-3.6L16 9l-5 5Z" />
              </svg>
            </span>
            <span>
              <strong>Your payment is protected</strong>
              <small>Encrypted and processed securely</small>
            </span>
          </div>
        </div>

        <section className="order-card" aria-labelledby="order-title">
          <div className="card-heading">
            <div>
              <p className="card-kicker">YOUR ORDER</p>
              <h2 id="order-title">Almost yours</h2>
            </div>
            <span className="item-count">1 item</span>
          </div>

          <div className="product">
            <div className="product-art" aria-hidden="true">
              <span className="art-orbit art-orbit-one" />
              <span className="art-orbit art-orbit-two" />
              <span className="product-cube">
                <span />
              </span>
              <span className="art-sparkle">✳</span>
            </div>
            <div className="product-info">
              <span className="product-category">THE EVERYDAY EDIT</span>
              <h3>Everyday Essential</h3>
              <p>A little upgrade to your day</p>
            </div>
            <strong className="product-price">₹499</strong>
          </div>

          <div className="price-breakdown">
            <div>
              <span>Subtotal</span>
              <span>₹499</span>
            </div>
            <div>
              <span>Delivery</span>
              <span className="free-delivery">Free</span>
            </div>
            <div className="total-row">
              <strong>Total to pay</strong>
              <strong>₹499</strong>
            </div>
          </div>

          <button
            className="pay-button"
            onClick={handlePayment}
            disabled={loading}
          >
            <span>{loading ? "Please wait..." : "Continue to payment"}</span>
            {!loading && (
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h11m-4-4 4 4-4 4" />
              </svg>
            )}
          </button>

          <p className="payment-caption">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M4 7V5a4 4 0 0 1 8 0v2m-9 0h10v7H3V7Zm5 3v1" />
            </svg>
            <span>Safe, secure &amp; hassle-free payment</span>
          </p>
        </section>
      </section>

      <footer className="page-footer">
        <span>Made for the little things that matter.</span>
        <span>© 2025 Northstar</span>
      </footer>
    </main>
  );
}

export default App;
