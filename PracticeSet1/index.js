const rectangleBox = document.getElementById("rect");

// If we doing something related to mouse move Movement then do not take any argument inside the function
rectangleBox.addEventListener("mousemove", function (xAxisCoordinates) {
  let rectangleLocation = rectangleBox.getBoundingClientRect();
  let rectangleLength = xAxisCoordinates.clientX - rectangleLocation.left;
  if (rectangleLocation.width / 2 < rectangleLength) {
    let RightColor = gsap.utils.mapRange(
      rectangleLocation.width / 2,
      rectangleLocation.width,
      0,
      255,
      rectangleLength
    );
    gsap.to(rectangleBox, {
      backgroundColor: `rgb(0 , 0  , ${RightColor})`,
      ease: Power4,
    });
  } else {
    let leftColor = gsap.utils.mapRange(
      0,
      rectangleLocation.width / 2,
      255,
      0,
      rectangleLength
    );
    gsap.to(rectangleBox, {
      backgroundColor: `rgb(${leftColor} , 0 , 0)`,
      ease: Power4,
    });
    // console.log(leftColor);
    // console.log();
  }
});

rectangleBox.addEventListener("mouseleave", function () {
  gsap.to(rectangleBox, {
    backgroundColor: "white",
    ease: Power4,
  });
});
