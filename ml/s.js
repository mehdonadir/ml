// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const changeColorButton = document.getElementById('change-color-btn');
    const showMessageButton = document.getElementById('show-message-btn');
    const message = document.getElementById('message');

    // Array of colors for background
    const colors = ['#f0f8ff', '#ffefd5', '#ffe4e1', '#d8bfd8', '#98fb98', '#ffb6c1'];

    // Change background color when the button is clicked
    changeColorButton.addEventListener('click', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });

    // Show or hide the message when the button is clicked
    showMessageButton.addEventListener('click', () => {
        if (message.classList.contains('hidden')) {
            message.classList.remove('hidden');
            message.textContent = 'Hello, this is your special message!';
        } else {
            message.classList.add('hidden');
        }
    });
});
