// Select all elements with the class 'circle'
const circles = document.querySelectorAll('.circle');

// Add a click event listener to each circle
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        // Toggle the 'red' class on click
        circle.classList.toggle('red');
    });
});
