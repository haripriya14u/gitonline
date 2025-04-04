<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = isset($_POST['fname']) ? htmlspecialchars($_POST['fname']) : '';
    $lastName = isset($_POST['lname']) ? htmlspecialchars($_POST['lname']) : '';
    
    echo "<h2>Form Data Received:</h2>";
    echo "<p><strong>First Name:</strong> " . $firstName . "</p>";
    echo "<p><strong>Last Name:</strong> " . $lastName . "</p>";
} else {
    echo "<h2>No data received</h2>";
}
?>
