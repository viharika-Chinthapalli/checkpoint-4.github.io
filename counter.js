function updateCounter() {
  const counter = document.getElementById("counter");
  let count = localStorage.getItem("visiterCount");
  if (count == null) {
    count = 1;
  } else {
    count++;
  }
  localStorage.setItem("visiterCount", count);
  counter.innerHTML = `Vistor Count: ${localStorage.getItem("visiterCount")}`;
  const locationn = document.getElementById("locationn");
  let location = localStorage.getItem("visiterLocation");
  if (location == null) {
    location = 1;
  } else {
    location++;
  }
  localStorage.setItem("visiterLocation", location);
  locationn.innerHTML = `Vistor Location: ${localStorage.getItem(
    "visiterLocation"
  )}`;
}
updateCounter();

const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  if (email.trim() === "") {
    alert("Please enter your email.");
    return;
  }

  if (name.trim().length < 3) {
    alert("Name should be at least 3 characters long.");
    return;
  }

  if (message.trim() === "") {
    alert("Please enter your message.");
    return;
  }

  if (message.trim().length < 10) {
    alert("Message should be at least 10 characters long.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email.");
    return;
  }
  alert("Thankyou form has been submitted successfully");
  document.getElementById("contact-form").reset();
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
