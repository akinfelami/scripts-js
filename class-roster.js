// https://classes.cornell.edu/browse/roster/SP24
var elements = document.querySelectorAll("li.class-numbers")

elements.forEach(function(element) {
  var buttonElement = document.createElement("button");
  const text = element.childNodes[3].innerText.split("\n")[0];
  buttonElement.setAttribute("type", "button")
  buttonElement.textContent = "copy"
  element.insertAdjacentElement("beforeend", buttonElement)
  buttonElement.addEventListener("click", function() {
    navigator.clipboard.writeText(text).then(function() {
      var tooltipElement = document.createElement("p");
      tooltipElement.textContent = "Copied";
      buttonElement.appendChild(tooltipElement);
      setTimeout(function() {
        tooltipElement.remove();
      }, 2000);
    }, function() {
      console.log("error");
    });
  });
});