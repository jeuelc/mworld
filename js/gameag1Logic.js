/* i-C-a */
$(function(){
  var zoom1 = new ZoomView('#jpiece1','#jpiece1 :first');
  var zoom2 = new ZoomView('#jpiece2','#jpiece2 :first');
  var zoom3 = new ZoomView('#jpiece3','#jpiece3 :first');
  var zoom4 = new ZoomView('#jpiece4','#jpiece4 :first');
  var zoom5 = new ZoomView('#jpiece5','#jpiece5 :first');
  var zoom6 = new ZoomView('#jpiece6','#jpiece6 :first');
  var zoom7 = new ZoomView('#jpiece7','#jpiece7 :first');
  var zoom8 = new ZoomView('#jpiece8','#jpiece8 :first');
  var zoom9 = new ZoomView('#jpiece9','#jpiece9 :first');
  var zoom10 = new ZoomView('#jpiece10','#jpiece10 :first');
  var zoom11 = new ZoomView('#jpiece11','#jpiece11 :first');
  var zoom12 = new ZoomView('#jpiece12','#jpiece12 :first');
  var zoom13 = new ZoomView('#jpiece13','#jpiece13 :first');
  var zoom14 = new ZoomView('#jpiece14','#jpiece14 :first');
  var zoom15 = new ZoomView('#jpiece15','#jpiece15 :first');
  var zoom16 = new ZoomView('#jpiece16','#jpiece16 :first');
  var zoom17 = new ZoomView('#jpiece17','#jpiece17 :first');
  var zoom18 = new ZoomView('#jpiece18','#jpiece18 :first');
  var zoom19 = new ZoomView('#jpiece19','#jpiece19 :first');
  var zoom20 = new ZoomView('#jpiece20','#jpiece20 :first');
  var zoom21 = new ZoomView('#jpiece21','#jpiece21 :first');
  var zoom22 = new ZoomView('#jpiece22','#jpiece22 :first');
  var zoom23 = new ZoomView('#jpiece23','#jpiece23 :first');
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
          var top = $(this.drag[d].el).offset().top;

          var x_offset = -(this.lastDrag.pos.x - this.drag[d].pos.x);
          var y_offset = -(this.lastDrag.pos.y - this.drag[d].pos.y);

          left = left + x_offset;
          top = top + y_offset;

          this.lastDrag = this.drag[d];

          this.drag[d].el.style.left = left +'px';
          this.drag[d].el.style.top = top +'px';
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
			//$(el).children().toggleClass('upSky');
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
					//$(el).children().toggleClass('upSky');
			
        }
        
        var jid = $(target).attr("id");
        var position = $(target).position();
      
        if(jid == "jpiece4" && position.left > 356 && position.left < 456 && position.top > 224 && position.top < 324) {
          $(target).css({'left':406, 'top':274});
        }
        if(jid == "jpiece5" && position.left > 410 && position.left < 510 && position.top > 225 && position.top < 325) {
          $(target).css({'left':460, 'top':275});
        }
        if(jid == "jpiece6" && position.left > 358 && position.left < 458 && position.top > 259 && position.top < 359) {
          $(target).css({'left':408, 'top':309});
        }
        if(jid == "jpiece7" && position.left > 423 && position.left < 523 && position.top > 260 && position.top < 360) {
          $(target).css({'left':473, 'top':310});
        }
        if(jid == "jpiece8" && position.left > 442 && position.left < 542 && position.top > 328 && position.top < 428) {
          $(target).css({'left':492, 'top':378});
        }
        if(jid == "jpiece9" && position.left > 515 && position.left < 615 && position.top > 344 && position.top < 444) {
          $(target).css({'left':565, 'top':394});
        }
        if(jid == "jpiece10" && position.left > 500 && position.left < 600 && position.top > 383 && position.top < 483) {
          $(target).css({'left':550, 'top':433});
        }
        if(jid == "jpiece11" && position.left > 514 && position.left < 614 && position.top > 383 && position.top < 483) {
          $(target).css({'left':564, 'top':433});
        }
        if(jid == "jpiece12" && position.left > 501 && position.left < 601 && position.top > 440 && position.top < 540) {
          $(target).css({'left':551, 'top':490});
        }
        if(jid == "jpiece13" && position.left > 536 && position.left < 636 && position.top > 422 && position.top < 522) {
          $(target).css({'left':586, 'top':472});
        }
        if(jid == "jpiece14" && position.left > 448 && position.left < 548 && position.top > 214 && position.top < 314) {
          $(target).css({'left':498, 'top':264});
        }
        if(jid == "jpiece15" && position.left > 554 && position.left < 654 && position.top > 214 && position.top < 314) {
          $(target).css({'left':604, 'top':264});
        }
        if(jid == "jpiece16" && position.left > 707 && position.left < 807 && position.top > 201 && position.top < 301) {
          $(target).css({'left':757, 'top':251});
        }
        if(jid == "jpiece17" && position.left > 832 && position.left < 932 && position.top > 199 && position.top < 299) {
          $(target).css({'left':882, 'top':249});
        }
        if(jid == "jpiece18" && position.left > 832 && position.left < 932 && position.top > 239 && position.top < 339) {
          $(target).css({'left':882, 'top':289});
        }
        if(jid == "jpiece19" && position.left > 677 && position.left < 777 && position.top > 265 && position.top < 365) {
          $(target).css({'left':727, 'top':315});
        }
        if(jid == "jpiece20" && position.left > 554 && position.left < 654 && position.top > 265 && position.top < 365) {
          $(target).css({'left':604, 'top':315});
        }
        if(jid == "jpiece21" && position.left > 492 && position.left < 592 && position.top > 239 && position.top < 339) {
          $(target).css({'left':542, 'top':289});
        }
        if(jid == "jpiece22" && position.left > 736 && position.left < 836 && position.top > 362 && position.top < 462) {
          $(target).css({'left':786, 'top':412});
        }
        if(jid == "jpiece23" && position.left > 860 && position.left < 960 && position.top > 361 && position.top < 461) {
          $(target).css({'left':910, 'top':411});
        }
        
        if(jid == "jpiece1" && position.left > 345 && position.left < 455 && position.top > 185 && position.top < 295) {
          $(target).animate({'left':410, 'top':240}, 500);
        }
        if(jid == "jpiece2" && position.left > 409 && position.left < 930 && position.top > 240 && position.top < 360) {
          $(target).animate({'left':840, 'top':305}, 500);
        }
        if(jid == "jpiece3" && position.left > 480 && position.left < 560 && position.top > 360 && position.top < 465) {
          $(target).animate({'left':515, 'top':425}, 500);
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
        var top = $(element).offset().top;

        cssOrigin = (-(left) + toX)/scaleFactor +"px "+ (-(top) + toY)/scaleFactor +"px";
      })

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

      function transform(e) {
          
          
          element.css({
              webkitTransform: cssScale,
              webkitTransformOrigin: cssOrigin,

              transform: cssScale,
              transformOrigin: cssOrigin,
          });
      }
  }