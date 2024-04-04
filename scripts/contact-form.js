document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const country = document.getElementById("country");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const company = document.getElementById("company");
  const countryList = document.getElementById("countryList");
  const API_URL = "https://restcountries.com/v3.1/all";

  // Fetch and render country list
  const fetchCountryList = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      renderCountryList(result);
    } catch (error) {
      console.error("Error fetching country list:", error);
      // Handle error (e.g., show a fallback list)
    }
  };
  fetchCountryList(API_URL);

  const renderCountryList = (countries) => {
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    const countryItems = countries.map((countryItem) => {
      const li = document.createElement("li");
      li.innerText = countryItem.name.common;
      return li;
    });
    countryList.append(...countryItems);
  };

  // Show/hide country list
  country.addEventListener("focus", () => {
    countryList.style.display = "block";
  });
  countryList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      country.value = e.target.innerText;
      countryList.style.display = "none";
      validateField(country);
    }
  });

  document.addEventListener("click", (e) => {
    if (!country.contains(e.target)) {
      countryList.style.display = "none";
    }
  });

  // Validation
  const showError = (input, message) => {
    const errorElement = input.nextElementSibling;
    errorElement.innerHTML = `<img src="assets/media/icons/arrow-up.svg" alt="Arrow Up Icon"><span>${message}</span>`;
    errorElement.style.display = "inline-block";
    input.classList.add("invalid");
    input.previousElementSibling.classList.add("invalid-label");
    input.classList.add("invalid-field"); // Add class for red color
  };

  const clearError = (input) => {
    const errorElement = input.nextElementSibling;
    errorElement.innerHTML = "";
    errorElement.style.display = "none";
    input.classList.remove("invalid");
    input.previousElementSibling.classList.remove("invalid-label");
    input.classList.remove("invalid-field"); // Remove class for red color
  };

  const validateField = (input) => {
    if (input.value.trim() === "") {
      showError(
        input,
        `Please enter your ${input.previousElementSibling.innerText.toLowerCase()}`
      );
      return false;
    }
    clearError(input);
    return true;
  };

  const validateForm = () => {
    const fields = [firstName, lastName, email, company, country];
    let isValid = true;

    fields.forEach((field) => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    // Validate Select Country field
    if (
      country.value.trim() === "" ||
      country.value.trim() === "Select Country"
    ) {
      showError(country, "Please select a country");
      isValid = false;
    } else {
      clearError(country);
    }

    return isValid;
  };

  // Add focus and blur event listeners
  [firstName, lastName, email, company, country].forEach((input) => {
    input.addEventListener("focus", () => {
      input.previousElementSibling.classList.add("focused-label");
    });

    input.addEventListener("blur", () => {
      if (input.value.trim() === "") {
        input.previousElementSibling.classList.remove("focused-label");
      }
      validateField(input);
    });
  });

  // Form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validateForm()) {
      form.submit();
    } else {
      // If form is invalid, focus on the first invalid input
      const firstInvalidInput = form.querySelector(".invalid");
      if (firstInvalidInput) {
        firstInvalidInput.focus();
      }
    }
  });
});
