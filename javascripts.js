/*=======================Accordions========================================*/

  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/*=======================Toggle Fonts========================================*/
document.addEventListener("DOMContentLoaded", function() {
  // Select the button element
  const toggleFontBtn = document.getElementById("toggleFontBtn");

  // Make an array of font family to toggle between
  const fontFamilies = ["Roboto, sans-serif", "Times New Roman, serif"];

  // Initialize the font index to 0 (Roboto)
  let fontIndex = 0;

  // Add click event listener to the button
  toggleFontBtn.addEventListener("click", function() {
    // Toggle between font family
    fontIndex = (fontIndex + 1) % fontFamilies.length;
    
    // Change [body style] of font family
    document.body.style.fontFamily = fontFamilies[fontIndex];
  });
});

