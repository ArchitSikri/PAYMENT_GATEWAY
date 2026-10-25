# 💳 Razorpay Payment Gateway — MERN Stack

A basic payment gateway integration built using the MERN stack and Razorpay. This project demonstrates how to create a payment order on the backend, open Razorpay Checkout on the frontend, and handle payment responses.

## 🚀 Features

- Razorpay payment gateway integration
- Backend order creation using Node.js and Express
- Frontend payment checkout using React
- Secure API key configuration using environment variables
- Payment response handling
- REST API integration between frontend and backend

## 🛠️ Tech Stack

**Frontend**
- React.js
- Vite
- JavaScript
- Axios (if used)

**Backend**
- Node.js
- Express.js
- Razorpay Node.js SDK
- dotenv
- MongoDB (if configured)

## 📁 Project Structure

```text
RAZORPAY-PAYMENT-GATEWAY/
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── .env
│   └── package.json
│
└── README.md
```

*Adjust the structure above to match your actual project.*

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd RAZORPAY-PAYMENT-GATEWAY
```

### 2. Setup the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the server folder:

```env
PORT=5000
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Never upload your `.env` file or expose your Razorpay Key Secret.

### 3. Setup the Frontend

```bash
cd client
npm install
npm run dev
```

Make sure the backend is running and the frontend API URL matches your backend configuration.

### 4. Start the Backend

From the server directory, run:

```bash
npm run dev
```

Or, if you haven't configured a development script:

```bash
node server.js
```

## 🔑 Razorpay API Keys

1. Create an account on [Razorpay](https://razorpay.com/).
2. Open the Razorpay Dashboard.
3. Navigate to the API Keys section.
4. Generate **Test Mode** API keys.
5. Add the keys to your backend `.env` file.

Use Test Mode while developing and testing payments.

## 💰 Payment Flow

1. The user clicks the Pay Now button.
2. The frontend sends a request to the backend to create a Razorpay order.
3. The backend creates the order using the Razorpay SDK.
4. The backend returns the order details to the frontend.
5. Razorpay Checkout opens and the user completes the payment.
6. The frontend receives the payment response.
7. The backend should verify the payment signature before treating the payment as successful.

## 🔐 Security Considerations

- Keep the Razorpay Key Secret on the backend only.
- Never trust the amount supplied by the frontend; calculate it using trusted product or order data on the server.
- Verify Razorpay payment signatures on the backend.
- Use webhooks when reliable payment event processing is required.
- Store payment and order statuses in the database if persistence is implemented.
- Use HTTPS in production.

**Important:** A successful Checkout response alone is not sufficient proof of a verified payment. Implement backend signature verification before fulfilling an order.

## 🧪 Testing

Use Razorpay Test Mode to test the checkout flow without processing real payments. Follow Razorpay's official testing instructions for supported test payment methods.

## 📚 Learning Outcomes

Through this project, I learned:

- How payment gateways work
- How to integrate Razorpay with a Node.js backend
- How to create payment orders using an API
- How React communicates with an Express backend
- Why backend payment verification is important
- How environment variables protect API credentials

## 🔮 Future Improvements

- Implement backend payment signature verification
- Add Razorpay webhooks
- Save orders and payment status in MongoDB
- Add payment history to the user dashboard
- Implement authentication and order ownership checks
- Add robust error handling and idempotent payment processing

## 👨‍💻 Author

**Your Name**

Built as a learning project to understand payment gateway integration using Razorpay and the MERN stack.

---

⭐ If you find this project useful, consider giving the repository a star!
