document.addEventListener("DOMContentLoaded", () => { // Animate Skill Bars const skillBars = document.querySelectorAll(".skill-bar"); skillBars.forEach(bar => { const percentage = bar.getAttribute("data-skill"); bar.style.width = percentage + "%"; });

// Live Chat Widget
const chatToggle = document.getElementById("chat-toggle");
const chatContainer = document.getElementById("chat-container");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

chatToggle.addEventListener("click", () => {
    chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
});

chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && chatInput.value.trim() !== "") {
        const message = document.createElement("p");
        message.textContent = chatInput.value;
        chatMessages.appendChild(message);
        chatInput.value = "";
    }
});

});