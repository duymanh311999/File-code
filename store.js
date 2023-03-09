


// store.html ====================================
$(document).ready(function () {
    $(".image-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: true,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: true,
          },
        },
      ],
      autoplay: true, 
      autoplaySpeed: 2000,
    });
  });

  $(document).ready(function () {
    $(".image-slider--1").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: true,
      prevArrow: `<button type='button' class='slick-prev--1 slick-arrow--1'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next--1 slick-arrow--1'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
      

      responsive: [
        {
          breakpoint: 1301,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: true,
          },
        },
      ],
      autoplay: true, 
      autoplaySpeed: 2000,
    });
  });


// top buttion ==================================

// Get the button
let mybutton = document.getElementById("goTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// email ===================================
  
  const email = document.getElementById('email1')
  const alert = document.querySelector('.alert1')
  const patternEmail = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/
  function checkText() {

    
      if (email.value.length ==0) {
        // chưa nhập email thì thông báo mất đi
        // set nội dung thông báo trống
        alert.style.padding = '0px'
        alert.textContent = 'Vui lòng điền thông tin'
        alert.style.color = '#f01448' 
        alert.style.fontSize = '15px'
        alert.style.marginTop = '0.5%'
        alert.style.fontWeight = '700'
      } else {
        if (email.value.match(patternEmail)) {
          // đúng định dạng
          alert.textContent = 'Đã nhận thông tin'
          alert.style.color = 'rgba(34, 189, 228, 0.637)'
          alert.style.marginTop = '0.5%'
          alert.style.fontWeight = '700'
        } else {
          // không đúng định dạng
          alert.style.padding = '0px'
          alert.textContent = 'Email không hợp lệ'
          alert.style.color = '#f01448' 
          alert.style.fontSize = '15px'
          alert.style.marginTop = '0.5%'
          alert.style.fontWeight = '700'
        }
      }
    
  } 
  

// Buy.html ==============================

// Số lượng sản phẩm

  $('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

// zoom 
    const images = document.querySelectorAll(".image img");
    images.forEach((item) => item.addEventListener("click", handleZoomImage));
    function handleZoomImage(event) {     
        console.log(event.target);
        const image = event.target.getAttribute("src");
        const template = `<div class="lightbox">
          <div class="lightbox-content">
          <i ><ion-icon class="fa fa-angle-left lightbox-prev" name="chevron-back-outline"></ion-icon></i>
            <img
                src="${image}" 
                alt="" 
                class="lightbox-image"
            />
            <i><ion-icon class="fa fa-angle-right lightbox-next" name="chevron-forward-outline"></ion-icon></i>
          </div>
          
        </div>`;
        
    document.body.insertAdjacentHTML("beforeend", template);
    
    }
    
    let index = 0;
    
    
    document.body.addEventListener("click", function(e) {
        const lightImage = document
          .querySelector(".lightbox-image")
        let lightSrc = "";
    
        if (e.target.matches(".lightbox")){
          e.target.parentNode.removeChild(e.target);
        }else if
          (e.target.matches(".lightbox-next")){
          lightSrc = lightImage.getAttribute("src");
          index = [...images].findIndex((item) => item.getAttribute("src") === lightSrc);
          index = index + 1;
    
        if (index > images.length -1 ){
          index = 0;
        }
          const newSrc = [...images][index].getAttribute("src");
          lightImage.setAttribute("src", newSrc)
        }
      
    
        else if
        (e.target.matches(".lightbox-prev")){
          lightSrc = lightImage.getAttribute("src");
          index = [...images].findIndex((item) => item.getAttribute("src") === lightSrc);
          index = index - 1;
    
        if (index < 0 ){
          index = images.length - 1 ;
        }
        const newSrc = [...images][index].getAttribute("src");
        lightImage.setAttribute("src", newSrc)
      }
      
        
    });
    

   // slide 
    $(document).ready(function () {
      $(".image-slider--2").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: true,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows: false,
              infinite: true,
            },
          },
        ],
        autoplay: false, 
        autoplaySpeed: 1000,
      });
    });

// Read more ===========================
    function readMore() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");
    
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more..."; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
      }
    }

 