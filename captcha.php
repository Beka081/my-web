<?php
session_start();

// Retrieve form data
$name = $_POST['name'];
$phone = $_POST['phone'];
$age = $_POST['age'];
$sex = $_POST['sex'];
$captcha_input = $_POST['captcha-input']; // User input for captcha
$actual_captcha = $_POST['captcha-value']; // Actual captcha value

// Validate the captcha
if ($captcha_input !== $actual_captcha) {
    echo "Captcha validation failed. Please try again.";
    // Optionally, you can provide a link back to the registration page
    echo '<br><a href="register.html">Go back to registration</a>';
} else {
    // Here, you can continue with the registration process, like saving to a database
    // After successful registration, redirect to home page
    header("Location: index.html"); // Change 'index.html' to the actual filename of your home page
    exit(); // Make sure to call exit after header to stop further script execution
}

