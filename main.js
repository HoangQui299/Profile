// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});
window.addEventListener('load', function() {
    document.querySelectorAll('.banner__img, .footer__img').forEach(img => {
        img.style.opacity = 1;
    });
});

const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'C++'],
        datasets: [{
            label: 'Skill Proficiency',
            data: [90, 85, 80, 75, 70], // Adjust these values to represent your skill level
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        }]
    },
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                max: 100,
                stepSize: 20,
                showLabelBackdrop: false,
                backdropColor: 'rgba(255,255,255,0)',
                fontColor: '#000'
            },
            angleLines: {
                color: 'rgba(0, 0, 0, 0.1)' // Lines radiating from the center
            },
            gridLines: {
                color: 'rgba(0, 0, 0, 0.1)' // Circular grid lines
            },
            pointLabels: {
                fontSize: 14,
                fontColor: '#000'
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');

    const checkVisibility = () => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Trigger once to check visibility on load
});