// Simulate admin login credentials
const adminUsername = "admin";
const adminPassword = "password123";

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === adminUsername && password === adminPassword) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('queue-management-section').style.display = 'block';
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
});

// Simulate a queue for testing purposes
let queue = [
    { name: "John Doe", guests: 4, position: 1 },
    { name: "Jane Smith", guests: 2, position: 2 },
    { name: "Mark Johnson", guests: 3, position: 3 }
];

// Display queue in the UI
function displayQueue() {
    const queueList = document.getElementById('queueList');
    queueList.innerHTML = '';

    queue.forEach((customer) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${customer.name} - Party of ${customer.guests} - Position: ${customer.position}`;
        queueList.appendChild(listItem);
    });
}

// Mark the first customer as seated
document.getElementById('markSeatedBtn').addEventListener('click', function() {
    if (queue.length > 0) {
        queue.shift(); // Remove the first customer
        queue.forEach((customer, index) => {
            customer.position = index + 1; // Reassign positions
        });
        displayQueue();
    }
});

// Remove the first customer as a no-show
document.getElementById('removeNoShowBtn').addEventListener('click', function() {
    if (queue.length > 0) {
        queue.shift(); // Remove the first customer
        queue.forEach((customer, index) => {
            customer.position = index + 1; // Reassign positions
        });
        displayQueue();
    }
});

// Initial display of the queue
displayQueue();

