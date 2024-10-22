let username = '';
let messages = []; // Array to store messages

function joinChat() {
  const usernameInput = document.getElementById('username').value;
  if (usernameInput.trim() !== '') {
    username = usernameInput;
    document.getElementById('usernameSection').style.display = 'none';
    document.getElementById('chatbox').style.display = 'block';
    
    // Set Username in Chatbox
    document.getElementById('userNameDisplay').innerText = username;

    // Get the first letter of the username
    const initial = username.charAt(0).toUpperCase();

    // Generate avatar using UI Avatar API
    const avatarURL = `https://ui-avatars.com/api/?name=${initial}&background=random&color=fff`;
    document.getElementById('userAvatar').src = avatarURL;

    alert('Welcome ' + username + '!');
  } else {
    alert('Please enter a valid username');
  }
}

function sendMessage() {
  const messageInput = document.getElementById('messageInput').value;
  if (messageInput.trim() !== '') {
    // Push the new message into the messages array
    messages.push({ user: username, message: messageInput });

    // Clear input field
    document.getElementById('messageInput').value = '';

    // Update chat messages display
    updateChatMessages();
  } else {
    alert('Please enter a message');
  }
}

function updateChatMessages() {
  const chatMessages = document.getElementById('chatMessages');
  chatMessages.innerHTML = ''; // Clear previous messages

  // Loop through the messages array and display each one
  messages.forEach(msg => {
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<strong style="color: #00ffcc;">${msg.user}</strong>: ${msg.message}`;
    newMessage.style.color = 'white'; // Make message text white
    chatMessages.appendChild(newMessage);
  });

  // Auto scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function updateChatMessages() {
  const chatMessages = document.getElementById('chatMessages');
  chatMessages.innerHTML = ''; // Clear previous messages

  // Loop through the messages array and display each one
  messages.forEach(msg => {
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<strong class="rgb-username">${msg.user}</strong>: ${msg.message}`;
    newMessage.style.color = 'white'; // Ensure the message text is white
    chatMessages.appendChild(newMessage);
  });

  // Auto scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}