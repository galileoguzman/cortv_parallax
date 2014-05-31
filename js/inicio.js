$(document).on('ready', mi_funcion);

var ventana_largo = $(window).width();
var ventana_alto = $(window).height();

function mi_funcion()
{
	animar_fondo();
	//scroll_usuario();
	animar_titulo();
	$(window).scroll(function() {
    	posicionarMenu();
	});

	//Cerrar el contenido resaltado si se da click en el icono cerrar
	$('.close').on('click', function(event){
		event.preventDefault();
		$('#contenido-resaltado').toggle();
		console.log('acaba de cerrarse el contenido resaltado')
	});

	$('#play-television a').on('click', function(event){
		event.preventDefault();
		var $iframe = '<iframe width="560" height="370" src="//www.youtube.com/embed/aSaeahQ8gcc?rel=0&autohide=1&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>';
		//alert('hola');
		$('#programa-en-vivo').html($iframe);
	});

	$('.am').on('click', function(event){
		event.preventDefault();
		window.open('reproductor.html','new','width=600,height=300,menubar=0,scrollbars=0,toolbar=0,location=0,directories=0,resizable=0,top=100,left=300');
	});
}

function animar_fondo()
{
	//Asignamos alto y ancho de la seccion contenedora
	$('#parallax-index').css({
		'width' : ventana_largo,
		'height' : ventana_alto
	});

	//asignamos alto y ancho del div capa
	$('#parallax-index-imagen').css({
		'width' : ventana_largo,
		'height' : ventana_alto
	});

	//animamos el div capa con un background transparente
	$('#parallax-index-imagen').animate({
		opacity: "toggle"
	},2000, animar_logo());

	//animar imagen portada con un scale(1.3)
	$('.portada-imagen').transition({
		scale: 1.09
	},10000, function(){
		console.log("ya terminé");
		//$('.portada-imagen').attr('src', 'images/parallax-index-studio.jpg');
	});

}

function animar_logo()
{
	$('#logo-animado').css({
		'opacity' : 1,
		'height' : $('#logo-animado').width()
	}); 
	
	$('#logo-animado').animate({
		margin: 0
	},1000);
}

function animar_titulo()
{
	$('#cortv-titulo').animate({
		margin: 0
	},1000);
}

function mover_logo(direccion)
{

	var margen = 1;

	if(direccion == 'izquierda'){
		margen = margen + (margen * 100);

	}
	else{
		margen = margen + (margen * -100);
	}
	console.log(margen);
	$('#logo-animado').animate({
		marginRight: margen 
	},500);	
}

function scroll_usuario()
{
	var lastScrollTop = 0;
	$(window).scroll(function(event){
   		var st = $(this).scrollTop();
   		if (st > lastScrollTop){
       		// downscroll code
       		console.log('para arriba');
       		mover_logo('derecha');
   		} else {
      		// upscroll code
      		console.log('para abajo');
      		mover_logo('izquierda')
   		}
   		lastScrollTop = st;
	});
}

function posicionarMenu() {
    var altura_del_header = $('#parallax-index').outerHeight(true);
    var altura_del_menu = $('#menu-index').outerHeight(true);

    if ($(window).scrollTop() >= altura_del_header){
        $('#menu-index').addClass('fixed');
        $('#wrapper').css('margin-top', (altura_del_menu) + 'px');
    } else {
        $('#menu-index').removeClass('fixed');
        $('#wrapper').css('margin-top', '0');
    }
}