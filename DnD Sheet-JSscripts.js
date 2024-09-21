// Select all elements with the class 'circle'
const circles = document.querySelectorAll('.circle');

// Add a click event listener to each circle
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        // Toggle the 'red' class on click
        circle.classList.toggle('red');
    });
});


// adding a few die to work with and test logic: d20 and d6
document.getElementById("dice").addEventListener("click", function()
{
    let roll = Math.floor(Math.random() * 20) +1;
    document.getElementById("result").textContent = roll;
})