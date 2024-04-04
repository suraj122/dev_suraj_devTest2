const form = document.querySelector("form");
const country = document.querySelector("#country");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const company = document.getElementById("company");
const countrList = document.getElementById("countryList");
let countryData = [];
const API_URL = "https://restcountries.com/v3.1/all";

// Fetching and Displaying List of countries
const fetchCountryList = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    countryData = result;
    renderCountryList();
  } catch (error) {
    console.error(error);
  }
};
fetchCountryList(API_URL);

function renderCountryList() {
  countryData.sort((a, b) => {
    let nameA = a.name.common;
    let nameB = b.name.common;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  countryData.map((countryItem) => {
    let countryValue = countryItem.name.common;
    const li = document.createElement("li");
    li.innerText = countryValue;
    li.addEventListener("click", () => {
      country.value = countryValue;
    });
    countrList.appendChild(li);
  });
}

// Show Countrylist and select
country.addEventListener("focus", () => {
  const label = document.querySelector(".country label");
  label.style.display = "inline-block";
  countrList.style.display = "inline-block";
});
document.addEventListener("click", (e) => {
  const nodeId = e.target.id;
  if (nodeId !== "country") countrList.style.display = "none";
});

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

  if (
    country.value.trim() === "" ||
    country.value.trim() === "Select Country"
  ) {
    showError(country, "Pease select a country");
    isValid = false;
  } else {
    clearError(country);
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
    if (input.value === "") {
      label.classList.remove("focused-label");
    }
    clearError(input);
  });
};

addFocusBlurEvents(firstName, firstName.previousElementSibling);
addFocusBlurEvents(lastName, lastName.previousElementSibling);
addFocusBlurEvents(email, email.previousElementSibling);
addFocusBlurEvents(company, company.previousElementSibling);
addFocusBlurEvents(country, country.previousElementSibling);

// Sumbmits the form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validateForm()) {
    window.location.href = "thankYou.html";
  }
});
