function ToggleMenu() {
    let menu = document.getElementById("MenuList");
    let menuIcon = document.getElementById("menuIcon");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "60px";
        menu.style.left = "0";
        menu.style.width = "100%";
        menu.style.backgroundColor = "rgb(18, 18, 68)";
        menu.style.padding = "10px 0";
        menu.style.textAlign = "center";
        menu.style.gap = "1rem";

        menuIcon.classList.remove("bx-menu");
        menuIcon.classList.add("bx-x"); // Change icon to 'X' when open
    }
}


document.addEventListener("DOMContentLoaded", function () {
    fetch("header_section.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch footer.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("footer_section.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch footer.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});




var typed = new Typed('#element', {
    strings: ['Web Development', '&amp; Flutter Developer.'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});


    document.querySelector(".contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        // Get form values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Validate form fields
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Telegram Bot API Details
        const BOT_TOKEN = "7623936660:AAF4bbthBSs4_nnKa3d6gncn0FZhH1RRSCQ";  // Replace with your bot token
        const CHAT_ID = "7623936660";  // Replace with your chat ID
        const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        // Message format
        const text = `📩 New Contact Form Submission:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Message: ${message}`;

        // Send data to Telegram
        fetch(TELEGRAM_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text,
                parse_mode: "HTML"
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Message sent successfully! ✅");
                document.querySelector(".contact-form").reset(); // Clear the form
            } else {
                alert("Error sending message. ❌");
                console.error("Telegram Error:", data);
            }
        })
        .catch(error => {
            alert("Something went wrong! Check the console.");
            console.error("Fetch Error:", error);
        });
    });




