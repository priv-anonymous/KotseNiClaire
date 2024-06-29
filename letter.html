document.addEventListener('DOMContentLoaded', function() {
    var backBtn = document.getElementById('backBtn');

    backBtn.addEventListener('click', function() {
       
        window.location.href = 'kotseniClaire.html'; 
    });



document.getElementById('keyBtn').addEventListener('click', function() {
    const keyElement = document.getElementById('key');
    const popSound = document.getElementById('popSound');
    const music = document.getElementById('music');
    
    keyElement.style.display = 'block';
    keyElement.classList.remove('hidden'); 
    keyElement.style.animation = 'floatUp 3s ease-in-out forwards';
    
    popSound.play(); 
    music.play(); 
    
    startConfetti();
});

const confettiColors = ['#FFC107', '#E91E63', '#9C27B0', '#2196F3', '#4CAF50'];
const confettiCanvas = document.getElementById('confettiCanvas');
const ctx = confettiCanvas.getContext('2d');

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettiElements = [];

function createConfetti() {
    const confetti = {
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * confettiCanvas.height - confettiCanvas.height,
        size: Math.random() * 10 + 5,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        speed: Math.random() * 3 + 2,
        angle: Math.random() * 360,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 10 - 5,
    };
    confettiElements.push(confetti);
}

function drawConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiElements.forEach((confetti, index) => {
        ctx.fillStyle = confetti.color;
        ctx.save();
        ctx.translate(confetti.x, confetti.y);
        ctx.rotate(confetti.angle * Math.PI / 180);
        ctx.fillRect(-confetti.size / 2, -confetti.size / 2, confetti.size, confetti.size);
        ctx.restore();

        confetti.y += confetti.speed;
        confetti.angle += confetti.rotationSpeed;

        if (confetti.y > confettiCanvas.height) {
            confettiElements.splice(index, 1);
        }
    });
    requestAnimationFrame(drawConfetti);
}

function startConfetti() {
    for (let i = 0; i < 200; i++) {
        createConfetti();
    }
    drawConfetti();
}

});
