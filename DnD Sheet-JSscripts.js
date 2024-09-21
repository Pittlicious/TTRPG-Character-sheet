// Select all elements with the class 'circle'
const circles = document.querySelectorAll('.circle');

// Add a click event listener to each circle
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        // Toggle the 'red' class on click
        circle.classList.toggle('red');
    });
});


// d20
document.getElementById("d20").addEventListener("click", function()
{
    let roll = Math.floor(Math.random() * 20) +1;
    document.getElementById("result").textContent = roll;
})

// d6
document.getElementById("d6").addEventListener("click", function()
{
    let roll = Math.floor(Math.random() * 6) +1;
    document.getElementById("result").textContent = roll;
}
)