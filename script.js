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
}
