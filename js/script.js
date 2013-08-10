var timeoutID;
var framesComing;
$(function(){
  	framesComing = [
        "sprites/ja1.png",
        "sprites/ja2.png",
        "sprites/ja3.png",
        "sprites/ja4.png",
        "sprites/ja5.png",
        "sprites/ja6.png",
        "sprites/ja7.png",
        "sprites/ja8.png",
        "sprites/ja9.png",
        "sprites/ja10.png",
        "sprites/ja11.png",
      	"sprites/jae1.png",
      	"sprites/jae2.png",
      	"sprites/jae3.png",
      	"sprites/jae4.png",
      	"sprites/jae5.png",
      	"sprites/jae6.png",
      	"sprites/jae7.png",
      	"sprites/jae8.png",
      	"sprites/jae9.png",
      	"sprites/jae10.png",
      	"sprites/jae11.png",
      	"sprites/jae12.png",
      	"sprites/jae13.png",
      	"sprites/jae14.png"
    ];
	timeoutID = window.setTimeout(startAnimation, 2000);
});
function startAnimation(){
	$(".spriteComing").fadeIn('slow', function(){
		$(".spriteComing").spritespin({
	        width     : 500,
	        height    : 700,
	        frames    : framesComing.length,
	        behavior  : "drag",
	        module    : "360",
	        sense     : -1,
	        source    : framesComing,
	        animate   : true,
	        loop      : false,
          loopFrame : 10,
	        frameWrap : true,
	        frameTime : 180,
	        enableCanvas : false
	    }).bind("onFrame", function(){
	  		var $this = $(this), data = $this.data("spritespin");
			if (data.frame == 1){
				$this.css({
					'left' : '-50px', 'top' : '-95px'
				});
			}
			if (data.frame == 2){
				$this.css({
					'left' : '-2px', 'top' : '-95px'
				});
			}
			if (data.frame == 3){
				$this.css({
					'left' : '-19px', 'top' : '-95px'
				});
			}
			if (data.frame == 4){
				$this.css({
					'left' : '0px', 'top' : '-95px'
				});
			}
			if (data.frame == 5){
				$this.css({
					'left' : '63px', 'top' : '-95px'
				});
			}
			if (data.frame == 6){
				$this.css({
					'left' : '57px', 'top' : '-95px'
				});
			}
			if (data.frame == 8){
				$this.css({
					'left' : '42px', 'top' : '-95px'
				});
			}
			if (data.frame == 9){
				$this.css({
					'left' : '51px', 'top' : '-95px'
				});
			}
			if (data.frame == 10){
				$this.css({
					'left' : '74px',
					'cursor' : 'pointer', 'top' : '-95px'
				});
        $(".talkbubble").css({"visibility":"visible","z-index":1});
				$this.on('click',function(){
					$(".spriteComing").spritespin("animateTo", 24);
          $(".talkbubble").css({"visibility":"hidden","z-index":0});
				});
			}
			if (data.frame == 12){
				$this.css({
					'left' : '51px',
					'cursor' : 'default', 'top' : '-95px'
				});
			}
			if (data.frame == 13){
				$this.css({
					'left' : '42px', 'top' : '-95px'
				});
			}
			if (data.frame == 14){
				$this.css({
					'left' : '57px', 'top' : '-95px'
				});
			}
			if (data.frame == 16){
				$this.css({
					'left' : '63px', 'top' : '-95px'
				});
			}
			if (data.frame == 17){
				$this.css({
					'left' : '60px', 'top' : '-95px'
				});
			}
			if (data.frame == 18){
				$this.css({
					'left' : '45px', 'top' : '-95px'
				});
			}
			if (data.frame == 19){
				$this.css({
					'left' : '30px', 'top' : '-95px'
				});
			}
			if (data.frame == 20){
				$this.css({
					'left' : '-12px', 'top' : '-95px'
				});
			}
			if (data.frame == 21){
				$this.css({
					'left' : '-23px', 'top' : '-95px'
				});
			}
			if (data.frame == 22){
				$this.css({
					'left' : '-20px', 'top' : '-95px'
				});
			}
			if (data.frame == 23){
				$this.css({
					'left' : '-4px', 'top' : '-95px'
				});
			}
			if(data.frame == 24){
				$this.css({
					'left' : '-61px', 'top' : '-95px'
				});
				$this.fadeOut('slow');
			}
		});
	});
}