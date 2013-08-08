/* i-C-a */

var bgsoundbh = new Audio();
bgsoundbh.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/thegift_0.mp3";
bgsoundbh.addEventListener('ended', function() { bgsoundbh.play(); });

function jAnimate(divIdAnimate) {
  var frameWidth = 340;
  var frameHeight = 145;
  var spriteWidth = 4080;
  var spriteHeight = 145;
  var curxPx = 0;
  var ti;
  var animateObject = divIdAnimate;
  var spriteElement = document.getElementById(animateObject);
  
  function animateSprite() {
      spriteElement.style.backgroundPosition = '-' + curxPx + 'px 0px';
      curxPx = curxPx + frameWidth;
      if (curxPx >= spriteWidth) { curxPx = 0; }
      ti = setTimeout(animateSprite, 160);
   }
    animateSprite();  
}

$('#mov').live( 'pageshow',function(event, ui){
    var bhvid =document.getElementById("bhvideo"); 
    var width = $(window).width();
    var height = $(window).height();
    bhvideo.width=width;
    bhvideo.height=height;
    // setTimeout(function(){
        // bhvid.player().play();}, 2000);
    //bhvid.play();
});

$('#gilgamesh').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#babylonians').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#phoenicians').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#egyptians').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#xenophon').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#persians').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#romans').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#legacyofgreece2').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#tribesofgreece').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#iliad').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#odyssey').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#templesofgreece').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#spartans').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#storytelling').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#legacyofgreece').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#agintro').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#ancientgreece').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#agora').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#agschool').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#aroundag').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#hittites').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#kinghatpray').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#lifeinag').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#lydians').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#lydiansmoney').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#minoans').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#minoansend').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#mycenaeans').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#olympics').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#panathenai').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#theseus').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#originsofgreece').live( 'pageshow',function(event, ui){
    jAnimate("animatedsoldier");
});

$('#ancientgreece').live( 'pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#ancient').live('swiperight',function(event, ui){
  $.mobile.changePage("home.html");
});

$('#ancientgreece').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ancient.html");
});

$('#legacyofgreece').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece.html");
});

$('#legacyofgreece2').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-legacy.html");
});

$('#originsofgreece').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece.html");
});

$('#aroundag').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece.html");
});

$('#lydians').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-aroundag.html");
});

$('#romans').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-aroundag.html");
});

$('#gilgamesh').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-babylonians.html");
});

$('#babylonians').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-aroundag.html");
});

$('#phoenicians').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-aroundag.html");
});

$('#egyptians').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-aroundag.html");
});

$('#persians').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-aroundag.html");
});

$('#xenophon').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-persians.html");
});

$('#lydiansmoney').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-lydians.html");
});

$('#lifeinag').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece.html");
});

$('#hittites').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-origins.html");
});

$('#kinghatpray').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-hittites.html");
});

$('#mycenaeans').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-origins.html");
});

$('#minoans').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-origins.html");
});

$('#minoansend').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-minoans.html");
});

$('#tribesofgreece').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-origins.html");
});

$('#templesofgreece').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-tribes.html");
});

$('#spartans').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-tribes.html");
});

$('#theseus').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-minoans.html");
});

$('#olympics').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-lifeinag.html");
});

$('#storytelling').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-lifeinag.html");
});

$('#iliad').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-storytelling.html");
});

$('#odyssey').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-storytelling.html");
});

$('#panathenai').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-lifeinag.html");
});

$('#agschool').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-lifeinag.html");
});

$('#agora').live('swiperight',function(event, ui){
  $.mobile.changePage("sub-ac-greece-lifeinag.html");
});

$('#blackholes').live( 'pageshow',function(event, ui){
    if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#blackholes').live( 'pagehide',function(event, ui){
    $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#whatisbh').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#whatisbh').live( 'pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
});

$('#gravity').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#gravity').live( 'pagehide',function(event, ui){
    $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#bhcomefrom').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#bhcomefrom').live( 'pagehide',function(event, ui){
    $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#supergiant').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#supergiant').live('pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#supernova').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#supernova').live('pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#snexplosion').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#snexplosion').live('pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#formgold').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#formgold').live('pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#neutron').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#neutron').live('pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#blackhole').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#blackhole').live('pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#nscollide').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#nscollide').live('pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#lifeabh').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#lifeabh').live('pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#galaxies').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#galaxies').live('pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#bhingalaxy').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#bhingalaxy').live('pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#quasars').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#quasars').live('pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#binaries').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#binaries').live('pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

$('#bhgo').live('pageshow',function(event, ui){ 
  if(bgsoundbh.paused) {
      bgsoundbh.play();
    }
});

$('#bhgo').live('pagehide',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});