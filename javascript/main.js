$(document).keydown(function (e) {
  var pressedCtrl = false;
  var pressedAlt = false;
  var pressedShift = false;
	 $(document).keyup(function (e) {  //O evento Kyeup é acionado quando as teclas são soltas
	 	if(e.which == 17) {
      pressedCtrl=false;
    }
    if(e.which == 18) {
      pressedAlt=false;
    }
    if(e.which == 16) {
      pressedShift=false;
    }
	 })
	$(document).keydown(function (e) { //Quando uma tecla é pressionada
		if(e.which == 17) {
      pressedCtrl = true;
    }
    if(e.which == 18) {
      pressedAlt = true;
    }
    if(e.which == 16) {
      pressedShift = true;
    }
		if((e.which == 83|| e.keyCode == 83) && pressedCtrl == true && pressedAlt == true && pressedShift == true) {
			$('#snake').modal('show');
		}
	});
});

$('.carousel').carousel({
  interval: 2000
});
$('.rotate-btn').click(function(){
  var x = $(this).data('card');
  document.getElementById(x).style.transform = "rotateY(180deg)";
});
$('.rotate-btn2').click(function(){
  var x = $(this).data('card');
  document.getElementById(x).style.transform = "rotateY(0deg)";
});
$("#sorteio").animatedModal({
  animatedIn:'lightSpeedIn',
  animatedOut:'hinge',
  color:'#7764FC'
});
function topo(){
  $('html, body').animate({
    scrollTop: $("#topo").offset().top
  }, 700);
}

function sobre(){
  $('html, body').animate({
    scrollTop: $("#sobre").offset().top
  }, 700);
}

function equipe(){
  $('html, body').animate({
    scrollTop: $("#equipe").offset().top
  }, 700);
}

function eventos(){
  $('html, body').animate({
    scrollTop: $("#eventos").offset().top
  }, 700);
}
// $('#exampleModalCenter').modal();
