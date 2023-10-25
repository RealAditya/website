let score = 0;

function moveTarget() {
  const target = document.querySelector(".target");
  const maxX = window.innerWidth - 60; // Subtract the target's width
  const maxY = window.innerHeight - 60; // Subtract the target's height

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

function scorePoint() {
  score++;
  document.getElementById("scoreValue").textContent = score;
  moveTarget();
}

document.querySelector(".target").addEventListener("click", scorePoint); // Add a click event listener

moveTarget(); // Initial target placement

function performAddition(eventType) {
  const message = document.getElementById("message");
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);

  if (!isNaN(number1) && !isNaN(number2)) {
    const result = number1 + number2;
    message.innerHTML = `Mouse ${eventType} event occurred. Addition result: ${result}`;
  } else {
    message.innerHTML = "Invalid input. Please enter valid numbers.";
  }
}

//this is for Electricity calculator



function calculateBill() {
  // Get the value of units from the input element
  const units = parseFloat(document.getElementById("unitsInput").value);

  if (!isNaN(units)) {
    let bill = 0;

    if (units <= 100) {
      bill = units * 10;
    } else if (units <= 200) {
      bill = 100 * 10 + (units - 100) * 15;
    } else if (units <= 300) {
      bill = 100 * 10 + 100 * 15 + (units - 200) * 20;
    } else if (units > 300) {
      bill = 100 * 10 + 100 * 15 + 100 * 20 + (units - 300) * 25;
    }

    // Update the bill result in the HTML
    document.getElementById("billResult").textContent = `Your electricity bill is: INR ${bill}`;
  } else {
    document.getElementById("billResult").textContent = "Invalid input. Please enter a valid number of units.";
  }
}

  
          // Function to calculate and display the bill
          document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("customer-form");
          
            form.addEventListener("submit", function (event) {
              event.preventDefault(); // Prevent the default form submission behavior
          
              // Get the form fields
              const firstName = document.getElementById("firstName").value;
              const middleName = document.getElementById("middleName").value;
              const lastName = document.getElementById("lastName").value;
              const options = document.getElementById("options").value;
              const address = document.getElementById("address").value;
              const aadhar = document.getElementById("aadhar").value;
              const phone = document.getElementById("phone").value;
          
              // Perform basic form validation (you can add more complex validation as needed)
              if (!firstName || !lastName || !options || !address || !aadhar || !phone) {
                alert("Please fill in all required fields.");
                return;
              }
          
              // Construct the data object or perform other processing as needed
              const formData = {
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                options: options,
                address: address,
                aadhar: aadhar,
                phone: phone,
              };
          
              // You can now use the formData object to send data to a server or perform further actions
          
              // For this example, we'll just show an alert
              alert("Form submitted successfully!");
          
              // Reset the form after submission
              form.reset();
          
              // Redirect to index.html
              window.location.href = "index.html";
            });
          });
          
// Function to generate a random CAPTCHA
// Generate a random captcha string
// Function to generate a random CAPTCHA

document.getElementById('customer-form').addEventListener('submit', function (event) {
  const honeypotField = document.getElementById('honeypot');

  if (honeypotField.value !== '') {
      // Honeypot field is not empty, likely a bot submission
      event.preventDefault(); // Prevent the form from being submitted
      alert('Bot submission detected. Please try again.');
  }
});


          
          