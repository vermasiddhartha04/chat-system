function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    
    if (message.trim() === "") {
        return;
    }
    
    var chatWindow = document.getElementById("chat-window");
    var messageElement = document.createElement("div");
    messageElement.className = "chat-message";
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    
    // Scroll chat window to bottom
    chatWindow.scrollTop = chatWindow.scrollHeight;
    
    // Clear input
    messageInput.value = "";
}
