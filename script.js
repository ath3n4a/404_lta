document.addEventListener('mousemove', function(event) {
    const flashlight = document.getElementById('flashlight');
    const x = event.clientX;
    const y = event.clientY;
    flashlight.style.left = `${x}px`;
    flashlight.style.top = `${y}px`;
});