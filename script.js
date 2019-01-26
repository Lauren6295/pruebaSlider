let slideIndex = 1;
showSlides(slideIndex);

function arrowSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let months = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < months.length; i++) {
      months[i].className = months[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  months[slideIndex-1].className += " active";
  captionText.innerHTML = months[slideIndex-1].alt;
}
