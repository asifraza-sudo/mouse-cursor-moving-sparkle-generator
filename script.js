let sparkleDensity = 10;
let sparkleSpeed = 1000;


const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];


function createSparkle(x, y) {
    let sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.width = `${Math.random() * 8 + 2}px`;
    sparkle.style.height = `${Math.random() * 8 + 2}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, sparkleSpeed);
}


document.addEventListener('mousemove', (e) => {
    for (let i = 0; i < sparkleDensity; i++) {
        let offsetX = Math.random() * 20 - 10;
        let offsetY = Math.random() * 20 - 10;
        createSparkle(e.clientX + offsetX, e.clientY + offsetY);
    }
});