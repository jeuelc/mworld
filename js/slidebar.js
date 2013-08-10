/* i-C-a */
$('.menubtn').on('tap', function() {
  var housingpos = $('.menuhousing').position();
  if(housingpos.top == 267) {
    $('.menuhousing').animate({'top':'367px','opacity':0}, 500, "easeInBack", function() { $('.menuhousing').css({'top':'748px'}); });
    $('.homebtnholder').animate({'top':'465px','opacity':0}, 500, "easeInBack", function() { $('.homebtnholder').css({'top':'748px'}); });
    $('.cpbtnholder').animate({'top':'538px','opacity':0}, 500, "easeInBack", function() { $('.cpbtnholder').css({'top':'748px'}); });
    $('.buildbtnholder').animate({'top':'611px','opacity':0}, 500, "easeInBack", function() { $('.buildbtnholder').css({'top':'748px'}); });
    $('.mpbtnholder').animate({'top':'685px','opacity':0}, 500, "easeInBack", function() { $('.mpbtnholder').css({'top':'748px'}); });
    
  } else {
    $('.menuhousing').css({'opacity':1});
    $('.homebtnholder').css({'opacity':1});
    $('.cpbtnholder').css({'opacity':1});
    $('.buildbtnholder').css({'opacity':1});
    $('.mpbtnholder').css({'opacity':1});
    $('.menuhousing').animate({'top':'267px'}, 1000, "easeInOutBack");
    $('.homebtnholder').animate({'top':'365px'}, 1500, "easeInOutBack");
    $('.cpbtnholder').animate({'top':'438px'}, 1600, "easeInOutBack");
    $('.buildbtnholder').animate({'top':'511px'}, 1700, "easeInOutBack");
    $('.mpbtnholder').animate({'top':'585px'}, 1800, "easeInOutBack");
  }
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-ac-greece.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); agsoundbg.pause(); agsoundbg.currentTime = 0; 
});