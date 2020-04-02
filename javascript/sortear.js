function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function make(times) {
  var min = parseInt($min.value);
  var max = parseInt($max.value);
  document.getElementById('resultado').innerHTML = '';
  document.getElementById('resultado').innerHTML += aleatorio(min, max) + '<br />';
}

var $gerador = document.getElementById('gerador'),
$min = document.getElementById('min'),
$max = document.getElementById('max');

$gerador.addEventListener('click', function(){
  make(1);
});

$('.close-sorteador').click(function(){
  document.getElementById('min').value='';
  document.getElementById('max').value='';
  document.getElementById('resultado').innerHTML='';
});
