
// tạo class cho thanh head
$(document).ready(function(){
    $('.sub_menu').parent('li').addClass('has_child')
  })
//   làm nút backtop
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop()) {
          $('header').addClass('sticky');
      } else {
          $('header').removeClass('sticky');
      }
  })
})
$(document).ready(function(){
      $(window).scroll(function(){
          if($(this).scrollTop()) {
               $('#backtop').fadeIn();
          }else {
              $('#backtop').fadeOut();
          }
      });
     $('#backtop').click(function(){
          $('html, body').animate({scrollTop: 0}, 500);
      });
  });
//   Làm hình ảnh slide
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); 
}
// 
// tạo nút tăng giảm số lượng
let quantity = 1;
let quantityDisplay = document.getElementById('quantity');
let decreaseBtn = document.getElementById('decreaseBtn');
let increaseBtn = document.getElementById('increaseBtn');

decreaseBtn.addEventListener('click', function() {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

increaseBtn.addEventListener('click', function() {
  quantity++;
  quantityDisplay.textContent = quantity;
});
// Tạo nút chọn size quần áo
function changeColor(button) {
  var isClicked = button.classList.toggle('clicked');
  if (!isClicked) {
    button.classList.remove('clicked');
  }
}
// làm nút tăng giảm sl 
function changeQuantity(amount) {
  let quantityElement = document.getElementById('quantity');
  let currentQuantity = parseInt(quantityElement.textContent, 10);
  let newQuantity = Math.max(0, currentQuantity + amount);
  quantityElement.textContent = newQuantity;
}




  