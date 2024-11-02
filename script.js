// Handle form submission and redirect to hospital_list.html
document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // Validate form data here
    // ...

    // Redirect to hospital_list.html
    window.location.href = 'hospital_list.html';
});

// Dynamically add hospital names to the list
const hospitalList = document.getElementById('hospitalList');

// Replace this with your actual hospital data
const hospitals = ['Hospital A', 'Hospital B', 'Hospital C'];

hospitals.forEach(hospital => {
    const li = document.createElement('li');
    li.textContent = hospital;
    hospitalList.appendChild(li);
});
// Assuming successful registration
function redirectToHomepage() {
    const registrationForm = document.getElementById('registration-form');
    const homepage = document.getElementById('homepage');

    registrationForm.style.display = 'none';
    homepage.style.display = 'block';
}
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Assuming validation is successful
    alert("Registration successful!");

    // Redirect to the home page
    window.location.href = "index.html"; // Replace "index.html" with the actual path to your home page
});

