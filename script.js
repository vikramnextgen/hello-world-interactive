// Interactive functionality for Hello World App
document.addEventListener('DOMContentLoaded', () => {
    const greetingBtn = document.querySelector('.greeting-btn');
    const title = document.querySelector('.title');
    const greetings = [
        'Hello, World!',
        'Bonjour, le Monde!',
        'Hola, Mundo!',
        '你好，世界！',
        'こんにちは世界！'
    ];
    let currentIndex = 0;

    greetingBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % greetings.length;
        title.style.animation = 'none';
        title.offsetHeight; // Trigger reflow
        title.style.animation = 'fadeIn 1s ease-in';
        title.textContent = greetings[currentIndex];
    });
});