function changePosition(element) {
  var yPosition = 0;

  while (element) {
    yPosition += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent;
  }
  if (element == background) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: yPosition - 100,
      behavior: "smooth",
    });
  }
  handleHeader();
}

function handleHeader() {
  var line = document.querySelector(".line1").classList.contains("first_line");
  var boolean = document
    .querySelector(".just_buttons_container")
    .classList.contains("active");
  if (boolean) {
    document
      .querySelector(".just_buttons_container")
      .classList.remove("active");
  } else {
    document.querySelector(".just_buttons_container").classList.add("active");
  }
  if (line) {
    document.querySelector(".line1").classList.remove("first_line");
    document.querySelector(".line2").classList.remove("second_line");
    document.querySelector(".line3").classList.remove("third_line");
  } else {
    document.querySelector(".line1").classList.add("first_line");
    document.querySelector(".line2").classList.add("second_line");
    document.querySelector(".line3").classList.add("third_line");
  }
}
