/* i-C-a */
var animalsoundbg = new Audio();
animalsoundbg.src = "audio/animals.mp3";
animalsoundbg.addEventListener('ended', function() { animalsoundbg.play(); });

var artmusicsoundbg = new Audio();
artmusicsoundbg.src = "audio/artmusic.mp3";
artmusicsoundbg.addEventListener('ended', function() { artmusicsoundbg.play(); });

var humanbodysoundbg = new Audio();
humanbodysoundbg.src = "audio/humanbody.mp3";
humanbodysoundbg.addEventListener('ended', function() { humanbodysoundbg.play(); });

var langcultsoundbg = new Audio();
langcultsoundbg.src = "audio/langcult.mp3";
langcultsoundbg.addEventListener('ended', function() { langcultsoundbg.play(); });

var modernsoundbg = new Audio();
modernsoundbg.src = "audio/modern.mp3";
modernsoundbg.addEventListener('ended', function() { modernsoundbg.play(); });

var naturalsoundbg = new Audio();
naturalsoundbg.src = "audio/natural.mp3";
naturalsoundbg.addEventListener('ended', function() { naturalsoundbg.play(); });

var peopleplacessoundbg = new Audio();
peopleplacessoundbg.src = "audio/peopleplaces.mp3";
peopleplacessoundbg.addEventListener('ended', function() { peopleplacessoundbg.play(); });

var sciencesoundbg = new Audio();
sciencesoundbg.src = "audio/science.mp3";
sciencesoundbg.addEventListener('ended', function() { sciencesoundbg.play(); });

var ancientsoundbg = new Audio();
ancientsoundbg.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/ancientcivbg.mp3";
ancientsoundbg.addEventListener('ended', function() { ancientsoundbg.play(); });

var agsoundbg = new Audio();
agsoundbg.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/agsoundbg.mp3";
agsoundbg.addEventListener('ended', function() { agsoundbg.play(); });

var spacesoundbg = new Audio();
spacesoundbg.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/PurpleSunset.mp3";
spacesoundbg.addEventListener('ended', function() { spacesoundbg.play(); });

var bgsoundbh = new Audio();
bgsoundbh.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/Soundsnap-heavengate.mp3";
bgsoundbh.addEventListener('ended', function() { bgsoundbh.play(); });

var mainaudiobg = new Audio();
mainaudiobg.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/mainbg.mp3";
mainaudiobg.addEventListener('ended', function() { mainaudiobg.play(); });

var iliadaudiobg = new Audio();
iliadaudiobg.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/Hector_vs_Achilles.mp3";

var theseusaudiobg = new Audio();
theseusaudiobg.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/Theseus_and_the_Minotaur.mp3";

var odysseyaudiobg = new Audio();
odysseyaudiobg.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/Odyssey.mp3";

var olympicsaudiobg = new Audio();
olympicsaudiobg.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/Olympics.mp3";

function pauseagbg() { agsoundbg.pause() }
function playagbg() { agsoundbg.play() }

function startolympicsaudiobg() {
  olympicsaudiobg.play();
  olympicsaudiobg.pause();
  setTimeout(function(){ olympicsaudiobg.play();}, 2000);
}

function startodysseyaudiobg() {
  odysseyaudiobg.play();
  odysseyaudiobg.pause();
  setTimeout(function(){ odysseyaudiobg.play();}, 2000);
}

function starttheseusaudiobg() {
  theseusaudiobg.play();
  theseusaudiobg.pause();
  setTimeout(function(){ theseusaudiobg.play();}, 2000);
}

function startiliadaudiobg() {
  iliadaudiobg.play();
  iliadaudiobg.pause();
  setTimeout(function(){ iliadaudiobg.play();}, 2000);
} 

var animateAGS = true;

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
      if(animateAGS) { ti = setTimeout(animateSprite, 160); }
   }
   
   animateSprite();  
}

$('#mov').live( 'pageshow',function(event, ui){ });

$('#gilgamesh').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#gilgamesh').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#gilgamesh2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#gilgamesh2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#babylonians').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#babylonians').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#babylonians2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#babylonians2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#phoenicians').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#phoenicians').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#phoenicians2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#phoenicians2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#egyptians').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#egyptians').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#egyptians2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#egyptians2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#xenophon').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#xenophon').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#xenophon2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#xenophon2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#persians').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#persians').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#persians2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#persians2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#romans').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#romans').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#romans2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#romans2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#legacyofgreece2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#legacyofgreece2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#legacyofgreece2-2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#legacyofgreece2-2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#tribesofgreece').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#tribesofgreece').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#tribesofgreece2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#tribesofgreece2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#odyssey').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#odyssey').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#odyssey2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#odyssey2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#templesofgreece').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#templesofgreece').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#templesofgreece2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#templesofgreece2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#spartans').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#spartans').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#spartans2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#spartans2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#storytelling').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#storytelling').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#storytelling2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#storytelling2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#legacyofgreece').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#legacyofgreece').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#legacyofgreece-2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#legacyofgreece-2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#agintro').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#agintro').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#agintro2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#agintro2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#ancientgreece').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#ancientgreece').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#ancientgreece2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#ancientgreece2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#agora').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#agora').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#agora2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#agora2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#agschool').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#agschool').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#agschool2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#agschool2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#aroundag').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#aroundag2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#aroundag2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#hittites').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#hittites').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#hittites2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#hittites2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#kinghatpray').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#kinghatpray').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#kinghatpray2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#kinghatpray2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#lifeinag').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#lifeinag').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#lifeinag2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#lifeinag2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#lydians').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#lydians').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#lydians2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#lydians2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#lydiansmoney').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#lydiansmoney').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#lydiansmoney2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#lydiansmoney2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#minoans').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#minoans').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#minoans2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#minoans2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#minoansend').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#minoansend').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#minoansend2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#minoansend2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#mycenaeans').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#mycenaeans').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#mycenaeans2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#mycenaeans2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#olympics').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#olympics').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#olympics2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#olympics2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#panathenai').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#panathenai').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#panathenai2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#panathenai2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#originsofgreece').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#originsofgreece').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#originsofgreece2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#originsofgreece2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#ancientgreece').live( 'pagehide',function(event, ui){
  animateAGS =  false;
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});


$('#blackholes').live( 'pageshow',function(event, ui){
    if(bgsoundbh.paused) {
      playBgMusic();
    }
});

function playBgMusic() {
  if(bgsoundbh.paused) {
      bgsoundbh.play();
      pbg = setTimeout(playBgMusic, 1000);
  }
}

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

$('#kid').live('pageshow',function(event, ui){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
});

