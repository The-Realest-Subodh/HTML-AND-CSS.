document
  .getElementById("cookieForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var inputKey = document.getElementById("key").value;
    var inputValue = document.getElementById("value").value;

    document.cookie = `${inputKey}=${inputValue}; path=/;`;

    document.getElementById("key").value = "";
    document.getElementById("value").value = "";
  });

document
  .getElementById("getCookiesButton")
  .addEventListener("click", function () {
    var cookies = document.cookie
      .split("; ")
      .map((cookie) => cookie.split("="));
    var displayArea = document.getElementById("displayCookies");

    displayArea.innerHTML = "";
    cookies.forEach((cookie) => {
      var p = document.createElement("p");
      p.textContent = `Key: ${cookie[0]}, Value: ${cookie[1]}`;
      displayArea.appendChild(p);
    });
  });
