const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            opacity: Math.random(),
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 3 + 1,
            radius: Math.random() * 4 + 1,
        });
    }
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let flake of snowflakes) {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();
    }
}

function moveSnowflakes() {
    for (let flake of snowflakes) {
        flake.x += flake.speedX;
        flake.y += flake.speedY;

        if (flake.y > canvas.height) {
            flake.y = 0;
        }

        if (flake.x > canvas.width) {
            flake.x = 0;
        }
    }
}

function updateSnowfall() {
    drawSnowflakes();
    moveSnowflakes();
    requestAnimationFrame(updateSnowfall);
}

createSnowflakes();
updateSnowfall();
