var indicador = 0;

$(document).on('ready', function(){
	$('#recomendacion-anterior').on('click', function(e){
		e.preventDefault();
		moveSlider('left');
	});
	$('#recomendacion-siguiente').on('click', function(e){
		e.preventDefault();
		moveSlider('right');
	});
	defineSizes();
});

function defineSizes()
{
	$('#recomendaciones .slide').each(function(i, el){
		$(el).css({
			'background-image': 'url(' + $(el).data('background') + ')',
			'height': 450 + 'px',
			'width': 300 + 'px'

		});
	});
}

function moveSlider(direccion)
{
	var limite = $('#recomendaciones .slide').length;

	console.log(limite);
	
	indicador = (direccion == 'right') ? indicador + 1 : indicador -1;
	indicador = (direccion >= limite) ? 0 : indicador;
	indicador = (indicador < 0) ? limite -1 : indicador;

	$('#recomendaciones #lista-eventos').animate({
		'margin-left' : -(indicador * $('#recomendaciones').width()) + 'px'
	});

}