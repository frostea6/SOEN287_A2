
function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return `${year}-${formatTimeComponent(month)}-${formatTimeComponent(day)} ${formatTimeComponent(hours)}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)}`;
}
function formatTimeComponent(time) {
  return time < 10 ? `0${time}` : time;
}
function updateDateTime() {
  const dateTime = document.getElementById("datetime");
  if (dateTime) {
    dateTime.textContent = getCurrentDateTime();
  }
}
updateDateTime();
setInterval(updateDateTime, 1000);

/* NOTE TO TA: check if user clicks any of the compatibility only
since the rest of the preferences on form are already displayed*/
function validateForm() {
  var errorMessage = "";
  var compatibilityCheckboxes = document.querySelectorAll('input[name="compatibility"]:checked');
  if (compatibilityCheckboxes.length === 0) {
    errorMessage += "At least one compatibility option must be selected. ";
  }
  var errorDiv = document.getElementById("error-message");
  if (errorMessage !== "") {
    errorDiv.textContent = errorMessage;
    return false;
  } else {
    errorDiv.textContent = "";
    return true;
  }
}
function validateForm() {
  const petType = document.getElementById('petType');
  const breed = document.getElementById('breed');
  const age = document.getElementById('age');
  const gender = document.getElementById('gender');
  const ownerEmail = document.getElementById('ownerEmail');

  const errorMessages = document.querySelectorAll('.error');
  errorMessages.forEach(msg => msg.textContent = '');

  let hasErrors = false;

  if (petType.value === '' || breed.value === '' || age.value === '' || gender.value === '' || ownerEmail.value === '') {
    hasErrors = true;
    document.getElementById('errorMsg').textContent = 'Please fill in all fields.';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(ownerEmail.value)) {
    hasErrors = true;
    document.getElementById('emailErrorMsg').textContent = 'Invalid email format.';
  }
  if (hasErrors) {
    return false;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    var petType = document.getElementById("petType");
    var breed = document.getElementById("breed");
    var age = document.getElementById("age");
    var ownerFamilyName = document.getElementById("ownerFamilyName");
    var ownerGivenName = document.getElementById("ownerGivenName");
    var ownerEmail = document.getElementById("ownerEmail");

    if (
      petType.value === "" ||
      breed.value === "" ||
      age.value === "doesn't matter" ||
      ownerFamilyName.value === "" ||
      ownerGivenName.value === "" ||
      ownerEmail.value === ""
    ) {
      event.preventDefault();
      alert("Please fill in all required fields.");
    } else if (!isValidEmail(ownerEmail.value)) {
      event.preventDefault();
      alert("Please enter a valid email address.");
    }
  });
  function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});

