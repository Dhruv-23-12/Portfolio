// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent page reload

//     // Get form values
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;

//     // Telegram Bot API Details
//     const BOT_TOKEN = "7292477862:AAH1NkhklzhTti4LCiJZC4pGPaByd7LOat8";  // Replace with your bot token
//     const CHAT_ID = "7292477862";  // Replace with your chat ID
//     const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

//     // Message format
//     const text = `📩 New Contact Form Submission:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Message: ${message}`;

//     // Send data to Telegram
//     fetch(TELEGRAM_API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             chat_id: CHAT_ID,
//             text: text,
//             parse_mode: "HTML"
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.ok) {
//             alert("Message sent successfully!");
//         } else {
//             alert("Error sending message.");
//         }
//     })
//     .catch(error => console.error("Error:", error));
// });
