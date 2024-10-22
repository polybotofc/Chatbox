let username = '';

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
    const chatMessages = document.getElementById('chatMessages');
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<strong>${username}</strong>: ${messageInput}`;
    chatMessages.appendChild(newMessage);
    document.getElementById('messageInput').value = ''; // Clear input
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto scroll to bottom
  } else {
    alert('Please enter a message');
  }
}