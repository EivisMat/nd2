const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
const header = document.getElementById("header")

canvas.width = header.offsetWidth;
canvas.height = header.offsetHeight;

const dots = [];

class Dot {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.color = '#fff';
        this.velocity = {
            x: Math.random() * 2 - 1,
            y: Math.random() * 2 - 1
        };
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x > canvas.width || this.x < 0) {
            this.velocity.x = -this.velocity.x;
        }

        if (this.y > canvas.height || this.y < 0) {
            this.velocity.y = -this.velocity.y;
        }
    }
}

function createDots() {
    const amount = Math.round((canvas.width * canvas.height)/1700);
    for (let i = 0; i < amount; i++) {
        dots.push(new Dot());
    }
}

function connectDots() {
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            const dx = dots[i].x - dots[j].x;
            const dy = dots[i].y - dots[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                ctx.beginPath();
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 0.2;
                ctx.moveTo(dots[i].x, dots[i].y);
                ctx.lineTo(dots[j].x, dots[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const dot of dots) {
        dot.draw();
        dot.update();
    }

    connectDots();

    requestAnimationFrame(animate);
}

createDots();
animate();

window.addEventListener('resize', () => {
    canvas.width = header.offsetWidth;
    canvas.height = header.offsetHeight;
});