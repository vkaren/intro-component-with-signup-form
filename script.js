document.getElementById("submit").addEventListener("click", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  document.querySelectorAll("input").forEach((input) => {
    if (input.type !== "submit") {
      if (!input.checkValidity()) {
        input.labels[0].style.visibility = "visible";
        input.classList.add("error");
      } else {
        input.labels[0].style.visibility = "hidden";
        input.classList.remove("error");
      }
    }
  });
}
