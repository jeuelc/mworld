/* i-C-a */

$(function(){

  var zoom1 = new ZoomView('.taskbarcontainer','.taskbarcontainer :first');

});





    /**

    * Inspired by Jesse Guardiani - May 1st, 2012

    */

	

	var zIndexBackup = 10;

	

    function DragView(target) {

      this.target = target[0];

      this.drag = [];

      this.lastDrag = {};



      

      this.WatchDrag = function()

      {

        if(!this.drag.length) {

          return;

        }



        for(var d = 0; d<this.drag.length; d++) {

          var left = $(this.drag[d].el).offset().left;

          //var top = $(this.drag[d].el).offset().top;



          var x_offset = -(this.lastDrag.pos.x - this.drag[d].pos.x);

          var y_offset = -(this.lastDrag.pos.y - this.drag[d].pos.y);



          left = left + x_offset;

          //top = top + y_offset;



          this.lastDrag = this.drag[d];



          this.drag[d].el.style.left = left +'px';

          //this.drag[d].el.style.top = top +'px';

        }

      }



      this.OnDragStart = function(event) {

        var touches = event.originalEvent.touches || [event.originalEvent];

        for(var t=0; t<touches.length; t++) {

          var el = touches[t].target.parentNode;

		  

		  if(el.className.search('polaroid') > -1){

			  	

				 el = touches[t].target.parentNode.parentNode;

		  }

			el.style.zIndex = zIndexBackup + 1;

			zIndexBackup = zIndexBackup +1;

			

          if(el && el == this.target) {

            this.lastDrag = {

              el: el,

              pos: event.touches[t]

            };

            return; 

          }

		  

        }

      }



      this.OnDrag = function(event) {

        this.drag = [];

        var touches = event.originalEvent.touches || [event.originalEvent];

        for(var t=0; t<touches.length; t++) {

          var el = touches[t].target.parentNode;



      		if(el.className.search('polaroid') > -1){

      				 el = touches[t].target.parentNode.parentNode;

      		  }

		  

          if(el && el == this.target) {

            this.drag.push({

              el: el,

              pos: event.touches[t]

            });

          }

          var counter = 0;

          var tbid = $(target).attr("id");

          var tbdivid = $("div#"+tbid);

          var position = tbdivid.position();

		  if(position.left == -101 && position.left <= -50){
		  $("#hercules").css('background','url(css/images/hercules/forward/pb1.png) no-repeat 0 0');
		  $("#hercules").css('margin-left','0px');
		  }
		  
          else if(position.left > -50 && position.left <= 0){
			$("#hercules").css('background','url(css/images/hercules/forward/pb2.png) no-repeat 0 0');
			$("#hercules").css('margin-left','0px');
		  }
		  
		  else if(position.left > 100 && position.left <= 150){
			$("#hercules").css('background','url(css/images/hercules/forward/pb4.png) no-repeat 0 0');
			$("#hercules").css('margin-left','50px');
			//$("#hercules").css('margin-left','-3px');
		  }
		  
		  else if(position.left > 150 && position.left <= 210){
			$("#hercules").css('background','url(css/images/hercules/forward/pb5.png) no-repeat 0 0');
			$("#hercules").css('margin-left','60px');
			//$("#hercules").css('margin-left','-3px');
		  }
		  
		  else if(position.left > 210 && position.left <= 269){
			$("#hercules").css('background','url(css/images/hercules/forward/pb6.png) no-repeat 0 0');
			$("#hercules").css('margin-left','80px');
			$("#hercules").css('margin-top','5px');
		  }

          else if(position.left >= 270) {

          //alert(position.left);
			$("#hercules").css('background','url(css/images/hercules/forward/pb7.png) no-repeat 0 0');
			$("#hercules").css('margin-left','70px');
			$("#hercules").css('margin-top','0px');
            $(tbdivid).css('left', 270);
			
          }

        }

      }



      this.OnDragEnd = function(event) {

		  	this.drag = [];

        var touches = event.originalEvent.touches || [event.originalEvent];

        for(var t=0; t<touches.length; t++) {

                  var el = touches[t].target.parentNode;

        

              if(el.className.search('polaroid') > -1){

                el = touches[t].target.parentNode.parentNode;

              }

        }

        var tbid = $(target).attr("id");

        var tbdivid = $("div#"+tbid);

        var position = tbdivid.position();

        

        if(position.left >= -200 && position.left<10) {

        /*alert(position.left);*/

          $(tbdivid).animate({left: "270px"}, 800);
			$("#hercules").css('background','url(css/images/hercules/forward/pb7.png) no-repeat 0 0');
			$("#hercules").css('margin-left','70px');
			$("#hercules").css('margin-top','0px');
        }

		 else {

          $(tbdivid).animate({left: "-101px"}, 800);
		  $("#hercules").css('background','url(css/images/hercules/forward/pb1.png) no-repeat 0 0');
		  $("#hercules").css('margin-left','0px');

        }

      }

    }





    function ZoomView(container, element) {

      container = $(container).hammer({

          prevent_default: true,

          scale_treshold: 0,

          drag_min_distance: 0

      });



      element = $(element);

      var displayWidth = container.width();

      var displayHeight = container.height();



      //These two constants specify the minimum and maximum zoom

      var MIN_ZOOM = 1;

      var MAX_ZOOM = 1;



      var scaleFactor = 1;

      var previousScaleFactor = 1;



      //These two variables keep track of the X and Y coordinate of the finger when it first

      //touches the screen

      var startX = 0;

      var startY = 0;



      //These two variables keep track of the amount we need to translate the canvas along the X

      //and the Y coordinate

      var translateX = 0;

      var translateY = 0;



      //These two variables keep track of the amount we translated the X and Y coordinates, the last time we

      //panned.

      var previousTranslateX = 0;

      var previousTranslateY = 0;



      //Translate Origin variables



      var tch1 = 0, 

          tch2 = 0, 

          tcX = 0, 

          tcY = 0,

          toX = 0,

          toY = 0,

          cssOrigin = "";



      container.bind("transformstart", function(event){

        //We save the initial midpoint of the first two touches to say where our transform origin is.

        e = event



        tch1 = [e.touches[0].x, e.touches[0].y],

        tch2 = [e.touches[1].x, e.touches[1].y]



        tcX = (tch1[0]+tch2[0])/2,

        tcY = (tch1[1]+tch2[1])/2



        toX = tcX

        toY = tcY



        var left = $(element).offset().left;

        

        cssOrigin = (-(left) + toX)/scaleFactor +"px ";

      });



      container.bind("transform", function(event) {

          scaleFactor = previousScaleFactor * event.scale;

    

          scaleFactor = Math.max(MIN_ZOOM, Math.min(scaleFactor, MAX_ZOOM));

          transform(event);

      });



      container.bind("transformend", function(event) {

          previousScaleFactor = scaleFactor;

      });





        /**

        * on drag

        */

      var dragview = new DragView($(container));

      container.bind("dragstart", $.proxy(dragview.OnDragStart, dragview));

      container.bind("drag", $.proxy(dragview.OnDrag, dragview));

      container.bind("dragend", $.proxy(dragview.OnDragEnd, dragview));



      setInterval($.proxy(dragview.WatchDrag, dragview), 10);







      

  }