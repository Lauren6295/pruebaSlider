let slideIndex = 1;
showSlides(slideIndex);

function arrowSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(x) {
  showSlides(slideIndex = x);
}

function showSlides(x) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let months = document.getElementsByClassName("demo");
  if (x > slides.length) {slideIndex = 1}
  if (x < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < months.length; i++) {
      months[i].className = months[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  months[slideIndex-1].className += " active";
}