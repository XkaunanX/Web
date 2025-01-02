// transitions.js - Transiciones avanzadas con hover
document.getElementById('transitionBox').addEventListener('mouseenter', function() {
    this.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
    this.style.transform = 'scale(1.1)';
    this.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.2)';
});

document.getElementById('transitionBox').addEventListener('mouseleave', function() {
    this.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
});
