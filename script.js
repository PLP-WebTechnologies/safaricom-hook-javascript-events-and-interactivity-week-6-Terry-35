
// Toggle background color
let isDark = false;
function toggleBackgroundColor() {
  document.body.style.backgroundColor = isDark ? "#fff" : "#333";
  isDark = !isDark;
}

// Slider - Update text size
function updateTextSize() {
  const size = document.getElementById("sizeSlider").value;
  document.getElementById("text").style.fontSize = `${size}px`;
}

// Modal - Show and hide
function showModal() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalOverlay").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("modalOverlay").style.display = "none";
}

// Form Validation
function validateForm() {
  let valid = true;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Name validation
  const nameError = document.getElementById("nameError");
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email.match(emailRegex)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const passwordError = document.getElementById("passwordError");
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!password.match(passwordRegex)) {
    passwordError.textContent = "Password must be at least 8 characters, with 1 uppercase letter and 1 number.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  return valid;
}

// Dropdown - Display message
function showDropdownMessage() {
  const dropdown = document.querySelector("select");
  const message = document.getElementById("dropdownMessage");
  message.textContent = `You selected: ${dropdown.value}`;
}

