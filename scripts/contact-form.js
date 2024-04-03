const form = document.querySelector("form");
const countryListWrapper = document.querySelector("#countryList");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const company = document.getElementById("company");
let countryList = [];
const API_URL = "https://restcountries.com/v3.1/all";

// Fetching and Displaying List of countries
const fetchCountryList = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    countryList = result;
    renderCountryList();
  } catch (error) {
    console.error(error);
  }
};
fetchCountryList(API_URL);

function renderCountryList() {
  countryList.map((country) => {
    const option = document.createElement("option");
    option.value = country.name.common;
    option.innerText = country.name.common;
    option.style.backgroundColor = "rgba(91, 200, 175, 1)";
    option.style.color = "white";
    countryListWrapper.appendChild(option);
  });
}

// Validation Form
const showError = (input, message) => {
  const errorElement = input.nextElementSibling;
  const icon = document.createElement("img");
  icon.src = "assets/media/icons/arrow-up.svg";
  icon.alt = "Arrow Up Icon";
  const span = document.createElement("span");
  span.textContent = message;
  errorElement.append(icon, span);
  errorElement.style.display = "inline-block";
  input.classList.add("invalid");
  input.previousElementSibling.classList.add("invalid-label");
};

const clearError = (input) => {
  const errorElement = input.nextElementSibling;
  //   errorElement.style.display = "none";
  //   errorElement.textContent = "";
  //   input.classList.remove("invalid");
  //   input.previousElementSibling.classList.remove("invalid-label");
};

const validateForm = () => {
  let isValid = true;

  if (firstName.value.trim() === "") {
    showError(firstName, "Please enter your first name");
    isValid = false;
  } else {
    clearError(firstName);
  }

  if (lastName.value.trim() === "") {
    showError(lastName, "Please enter your last name");
    isValid = false;
  } else {
    clearError(lastName);
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    showError(email, "Please enter a valid email address");
    isValid = false;
  } else {
    clearError(email);
  }

  if (company.value.trim() === "") {
    showError(company, "Please enter your company name");
    isValid = false;
  } else {
    clearError(company);
  }

  if (countryListWrapper.value === "") {
    countryError.textContent = "Please select a country";
    countryListWrapper.classList.add("invalid");
    countryError.style.display = "inline-block";
    isValid = false;
  } else {
    countryError.textContent = "";
    countryListWrapper.classList.remove("invalid");
    // console.log(countryList.value);
  }

  return isValid;
};

// Add focus and blur event listeners to input fields
const addFocusBlurEvents = (input, label) => {
  input.addEventListener("focus", () => {
    const errorElement = document.querySelectorAll(".error-message");
    errorElement.forEach((elm) => {
      elm.innerHTML = "";
      elm.style.display = "none";
    });
    if (label) {
      label.classList.add("focused-label");
    }
    input.style.color = "white";
  });

  input.addEventListener("blur", () => {
    clearError(input);
  });
};

addFocusBlurEvents(firstName, firstName.previousElementSibling);
addFocusBlurEvents(lastName, lastName.previousElementSibling);
addFocusBlurEvents(email, email.previousElementSibling);
addFocusBlurEvents(company, company.previousElementSibling);
addFocusBlurEvents(
  countryListWrapper,
  countryListWrapper.previousElementSibling
);

countryListWrapper.addEventListener("change", () => {
  clearError(countryList);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validateForm()) {
    window.location.href = "thankYou.html";
  }
});
