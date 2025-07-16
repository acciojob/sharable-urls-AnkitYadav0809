// your code here
document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the input values
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    // Construct the new URL with query parameters
    const newUrl = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

    // Update the h3 element with the new URL
    document.getElementById('url').innerText = newUrl;
});