/*открывает подменю - каталог*/
function openMenuList(){
	var a = $(window).width();
	if(a>1200){
		$('.js-open-menu').mouseenter(function(){
			$('.dropmenutop').slideDown(200);
		});
		$('.dropsub').mouseenter(function(){
			$(this).find('ul').slideDown(200);
		});
		$('.dropsub').mouseleave(function(){
			$(this).find('ul').slideUp(0);
		});
		$(document).mousemove(function (e){ // событие клика по веб-документу
			var div = $(".js-open-menu"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
			    && div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.dropmenutop').slideUp(0); // скрываем его
			}
		});
	}else{
		$('.dropsub>a').click(function(e){
			e.preventDefault();
			$(this).closest('.dropsub').find('ul').slideToggle();
			$(this).toggleClass('open');
		});
	}
	return false;
}

/*Главный Слайдер*/
function mainSlider(){
	$('.bannerslide').slick({
		dots: true,
		arrows: false
	});
}

/*Магазин Слайдер*/
function shopSlider(){
	$('.singleshop-slider').slick({
		dots: false,
		arrows: true
	});
	$('.singleshop-slider-buttons button').click(function(){
		var a = $(this).attr('data-tabsl');
		$('.singleshop-slider-buttons button').removeClass('active');
		$(this).addClass('active');
		$('.shslwr').removeClass('active');
		$('.'+a).addClass('active');
	});
}

/*Новости*/
function newTabs(){
	$('.mobnew button').click(function(){
		var a = $(this).attr('data-tab');
		$('.newtab').removeClass('active');
		$('.newtab.'+a).addClass('active');
		$('.mobnew button').removeClass('active');
		$(this).addClass('active');
	});
}
/*Открытие мобильного меню*/
function openMobMenu(){
	$('.js-open-mobmenu').click(function(){
		var a = $(window).height();
		$('.header .topmenu').slideDown().css('height', a);
	});
	$('.mobclose').click(function(){
		$('.header .topmenu').slideUp();
	});
}
/*Моб. поиск открытие всех результатов*/
function searchMobResult(){
	$('.js-opensearchunit').click(function(){
		$('.searchmob-units').toggleClass('active');
	});
}

/*Открытие попапа категорий*/
function openCategoriesMenu(){
	$('.categories-icons__title').click(function(){
		$('.categories-icons__item').removeClass('active');
		$(this).closest('.categories-icons__item').addClass('active');
		

		$([document.documentElement, document.body]).animate({
        scrollTop: $(".categories").offset().top
    }, 500);
	});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".categories-icons"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.categories-icons__item').removeClass('active'); // скрываем его
		}
	});
}
// anothercardlittle

/*Слайдер сопутствующих товаров*/
function anotherClothSlider(){
	$('.anothercardlittle .anothunits').slick({
		dots: true,
		arrows: false,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
					dots: true,
					arrows: false,
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 648,
	      settings: {
					dots: true,
					arrows: false,
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
}

/*Слайдера товаров*/
function clothSlider(){
	$('.slider-cloth').slick({
		dots: false,
		arrows: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
					dots: true,
					arrows: false,
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 648,
	      settings: {
					dots: true,
					arrows: false,
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
}

/*Слайдер Партнеров*/
function brandsSlider(){
	$('.brands-slider').slick({
		dots: false,
		arrows: true,
	  slidesToShow: 7,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 7,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 6,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 650,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
}

/*Гамбургер, открывает меню в моб и планшетной в-ях*/
function barsBtn(){
	$('.menubars').click(function(){
		$('.header').addClass('active');
	});
}

/*Каталог*/
function nCatBannerBg(){
	var a = $('.ncatlistbanner').attr('data-bannerlist');
	$('.ncatlistbanner').css('background-image', 'url("'+a+'")');
}

function cNBef(){
	$('.anothuns p').click(function(){
		$(this).toggleClass('active');
	});
}
function categoriesInfo(){
	$('.ncatlist .fa-info-circle').mouseenter(function(){
		$(this).closest('p').find('.info-catstyle').addClass('open');
	});
	$('.ncatlist .fa-info-circle').mouseleave(function(){
		$(this).closest('p').find('.info-catstyle').removeClass('open');
	});
}
function nCatFiltOp(){
	$('.ncatfiltitopener').click(function(){
		$(this).closest('.ncatfilterun').find('.ncatfilcontainer').slideToggle();
		$(this).toggleClass('active');
	});
	$('.ncatfilcontainerout').click(function(){
		$(this).closest('.ncatfilcontainerinnwrap').find('.ncatfilcontainerinn').slideToggle();
		$(this).toggleClass('active');
	});
}
function nCatBanner(){
	var a = $('.ncatlist .ncatlistbanner').height();
	var b = $(window).width();
	var c = $('.ncatlist .ncatsearch').height();
	if(b<992){
		$('.ncatfilter').css('margin-top', +a+15);
		$('.ncatlist').css('padding-bottom', c+15);
	}
}
function mobFilterOpen(){
	$('.ncatfilter-mobop').click(function(){
		$(this).toggleClass('active');
		$(this).find('span').toggleClass('active');
		$('.ncatfilter form').slideToggle();
	});
}
/*открытие-закрытие фильтров в каталоге - моб. версия*/
function openFilterMobile(){
	$('.js-openfilter').click(function(){
		$('.ncatfilter form').addClass('active');
	});
	$('.js-close-filter').click(function(){
		$('.ncatfilter form').removeClass('active');
	});
}
/*Бренды в каталоге открыть все*/
function brandCatalogOpen(){
	$('.js-openmore-ncatlab').click(function(){
		$(this).closest('.ncat-labels').toggleClass('active');
		$(this).toggleClass('texter');
	});
}

/*Доставка*/

function nDelivTable(){
	$('.ndelivtablebodyitemopener span').click(function(){
		var a = $(this).attr('data-h');
		$(this).closest('.ndelivtablebodyitemopener').find('span').addClass('active');
		$(this).removeClass('active');
		if(a == 'b'){
			$(this).closest('.ndelivtable').find('.ndelivtablebodyitem:nth-child(n+7)').css('display', 'table');
			$(this).closest('.ndelivtable').find('.ndelivtablebody').addClass('bef');
		}else{
			$(this).closest('.ndelivtable').find('.ndelivtablebodyitem:nth-child(n+7)').css('display', 'none');
			$(this).closest('.ndelivtable').find('.ndelivtablebody').removeClass('bef');
		}
	});
}
function formJbman(){
	$('.formjbman').click(function(){
		$(this).addClass('no');
		$(this).closest('.delivrigion').addClass('active');
	});
	$(document).mouseup(function (e) {
    var container = $(".delivrigion");
    if (container.has(e.target).length === 0){
      $('.formjbman').removeClass('no');
			$(".delivrigion").removeClass('active');
    }
	});
}

/*Контакты*/
function nContMapOpen(){
	$('.mapcontacttab button').click(function(){
		var a = $(this).attr('data-map');
		$('.mapcontacttab button').removeClass('active');
		$(this).addClass('active');
		$('.ncontactmapt').slideUp();
		$('.ncontactmapt.ncontactmap'+a).slideDown();
	});
}
function conLinkOpen(){
	$('.ncontactslinkopen').click(function(){
		$(this).toggleClass('active');
		$('.mobcont .ncontactslink').slideToggle();
	});
}

/*Корзина*/
function cartFormTabs(){
	$('.buttons button').click(function(){
		$('.buttons button').removeClass('active');
		$(this).addClass('active');
		var a = $(this).attr('data-but');
		$('.tabcart').removeClass('active');
		$('.tabcart.'+a).addClass('active');
	});
}

function cartCalcCart(){
	$('.js-cartcalc .js-calc-minus').click(function(){
		var a = $(this).closest('.js-cartcalc').find('input').val();
		$(this).closest('.js-cartcalc').find('.js-cart-calc-info').slideUp();
		if(a>1){
			$(this).closest('.js-cartcalc').find('.js-calc-plus').removeClass('orange');
			var b = +a-1;
			$(this).closest('.js-cartcalc').find('input').val(b);
		}else{
			$(this).closest('.js-cartcalc').find('input').val(a);
		}
	});
	$('.js-cartcalc .js-calc-plus').click(function(){
		var max = $(this).closest('.cart-unit').attr('data-maxstore');
		var a = $(this).closest('.js-cartcalc').find('input').val();
		if(a<max){
			var b = +a+1;
			$(this).closest('.js-cartcalc').find('input').val(b);
		}else{
			$(this).closest('.js-cartcalc').find('.js-cart-calc-info').slideDown();
			$(this).closest('.js-cartcalc').find('.js-calc-plus').addClass('orange');
		}
	});
}

function resetCartUnit(){
	$('.js-reset-cart-unit').click(function(){
		$(this).closest('.cart-unit').remove();
	});
}

/*Переключение вида катра-список, в списке магазинов*/
function shoplistTab(){
	$('.shoplist-menu-button button').click(function(){
		var a = $(this).attr('data-tab');
		$('.shoplist-menu-button button').removeClass('active');
		$(this).addClass('active');
		$('.shoplist-tabs>div').removeClass('active');
		$('.shoplist-tabs>div.'+a).addClass('active');
	});
}
/*Карточка товаров*/

/*клик по вопросику в характеристиках*/
function popQuest(){
	$('.snpop').mouseup(function(){
		$(this).toggleClass('active');
	});
}
function cartCalc(){
	$('.cartcalc .ccalc-minus').click(function(){
		var a = $(this).closest('.cartcalc').find('input').val();
		if(a>1){
			var b = +a-1;
			$(this).closest('.cartcalc').find('input').val(b);
		}else{
			$(this).closest('.cartcalc').find('input').val(a);
		}
	});
	$('.cartcalc .ccalc-plus').click(function(){
		var a = $(this).closest('.cartcalc').find('input').val();
		var b = +a+1;
		$(this).closest('.cartcalc').find('input').val(b);
	});
}

function navCustMove(){
	$('.sncardtabstit span').click(function(){
		$('.sncardtabstit span').removeClass('active');
		$(this).addClass('active');
		var a = $(this).position();
		var b = $(this).width();
		var c = $(this).attr('data-sntab');
		$('.navcustbor').css('left', a.left).css('width', b);
		$('.sncardtabsval').slideUp();
		$('.sncardtabsval'+c).slideDown();
	});
}
function snPostOpener(){
	$('.sncardpostopen').click(function(){
		$('.sncardpostwr div:nth-child(n+3)').slideToggle();
	});
}
function snFaq(){
	$('.sncardfaq p').click(function(){
		$(this).toggleClass('active');
		$(this).find('span').slideToggle();
	});
}
function mobSnTabs(){
	$('.sncardtabsmob').click(function(){
		$(this).toggleClass('mobope');
		var a = $(this).attr('data-mobop');
		$('.sncardtabsval'+a).slideToggle();
	});
}
function doubleSideCard(){
	$(window).scroll(function(){
	var a = $('.footer').offset().top;
	var b = +a-650;
    if ($(this).scrollTop() > 590 && $(this).scrollTop() < b) {
      $('.sncarddesk').addClass('fix');
      $('.sncarddesk').removeClass('active');
    } else if ($(this).scrollTop() > b){
      $('.sncarddesk').addClass('active');
      $('.sncarddesk').removeClass('fix');
    }else{
      $('.sncarddesk').removeClass('active fix');
    }
  });
}
function scanTabBtn(){
	$('.sncardtabsval1btn span').click(function(){
		$('.sncardtabsval1btn span').toggleClass('active');
		$(this).closest('.sncardtabsval').toggleClass('mobopener');
	});
}
/*фиксированное верхнее меню при скролле*/
function fixHeader(){
	$(window).scroll(function(){
		if($(this).scrollTop()>150){
			$('body').addClass('fix');
		}else{
			$('body').removeClass('fix');
		}
	});
}

/*footer для моб*/
function mobFooterMenu(){
	var a = $(window).width();
	if(a<769){
		$('.fval .title').click(function(){
			$(this).closest('.fval').toggleClass('open');
			$(this).closest('.fval').find('.text').slideToggle();
		});
	}
}

/*Поиск*/
/*Данный скрипт можно допилить вставляя необходимое значение в ссылку кнопки например*/
function searchButtonPosition(){
	$('.menuform-search p').mouseenter(function(){
		var a = $(this).position();
		var b = $(this).height();
		$('.menuform-search-btn .btnto').css('top', a.top+(b/2));
	});
}


/*Личный кабинет*/
function lkAddress(){
	$('.btnaddr').click(function(e){
		e.preventDefault();
		var a = $('.js-addrwrap input').length;
		$('.js-addrwrap').append( '<input type="text" name="addr'+a+'" placeholder="Введите адрес доставки">');
	});
}

function lkTab(){
	$('.lk-buttab button').click(function(){
		var a = $(this).attr('data-tab');
		$('.lk-tabcontainer').slideUp();
		$('.lk-tabcontainer.'+a).slideDown();
		$('.lk-buttab button').removeClass('active');
		$(this).addClass('active');
		$(this).addClass('active');
		var a = $(this).position();
		var b = $(this).width();
		var c = $(this).attr('data-sntab');
		$('.lk-buttab-bef').css({'left': a.left, 'width': b});
	});
	$('.lktab1-button span').click(function(){
		var a = $(this).attr('data-tab');
		$('.lktab1-button span').removeClass('active');
		$(this).addClass('active');
		$('.lktab1-container').slideUp();
		$('.lktab1-container.'+a).slideDown();
	});
}

function lkBefore(){
	$('.sncardtabstit span').click(function(){
		$('.sncardtabstit span').removeClass('active');
		$(this).addClass('active');
		var a = $(this).position();
		var b = $(this).width();
		var c = $(this).attr('data-sntab');
		$('.lk-buttab-bef').css({'left': a.left, 'width': b});
		$('.sncardtabsval').slideUp();
		$('.sncardtabsval'+c).slideDown();
	});
}


$(document).ready(function() {

	/*Личный кабинет*/
	var lk = $('.lk-buttab').length;
	if(lk){
		var alk = $('.lk-buttab button.active').position();
		var blk = $('.lk-buttab button.active').width();
		$('.lk-buttab-bef').css({'left': alk.left, 'width': blk});
	};
	lkBefore()
	lkTab();
	lkAddress();
	/*End Личный кабинет*/
	searchButtonPosition();
	shoplistTab();
	searchMobResult();
	anotherClothSlider();
	newTabs();
	brandCatalogOpen();
	openFilterMobile();
	mobFooterMenu();
	openMobMenu();
	popQuest();
	fixHeader();
	categoriesInfo();
	snPostOpener();
	snFaq();
	mobSnTabs();
	doubleSideCard();
	cNBef();
	scanTabBtn();
	resetCartUnit();
	openMenuList();
	mainSlider();
	shopSlider();
	openCategoriesMenu();
	clothSlider();
	brandsSlider();
	barsBtn();
	nDelivTable();
	formJbman();
	/*Контакты*/
	nContMapOpen();
	conLinkOpen();
	/*утв*/
	nCatBannerBg();
	cNBef();
	nCatFiltOp();
	nCatBanner();
	mobFilterOpen();
	/*Корзина калькулятор*/
	cartCalcCart();
	/*карточка калькулятор*/
	cartCalc();

	$(window).resize(function(){
		nCatBannerBg();
	});
	$('.ncatlist select, .cartselect, .js-shoplist-sel').styler({
		selectSearch: true,
	});
	$('[data-toggle="popover"]').popover();
	cartFormTabs();
	/*Catalog Ползунки*/

	  $( function() {
	    $( "#slider-range" ).slider({
	      range: true,
	      min: 0,
	      max: 5000,
	      values: [ 500, 3000 ],
	      slide: function( event, ui ) {
	    		$(".slrmax").val(ui.values[1]);
	    		$(".slrmin").val(ui.values[0]);
	        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	      }
	    });
	    $(".slrmax").val($("#slider-range").slider("values", 1));
	    $(".slrmin").val($("#slider-range").slider("values", 0));
	  });

	  $( function() {
	    $( "#slider-range2" ).slider({
	      range: true,
	      min: 0,
	      max: 5000,
	      values: [ 500, 3000 ],
	      slide: function( event, ui ) {
	    		$(".slrmax2").val(ui.values[1]);
	    		$(".slrmin2").val(ui.values[0]);
	        $( "#amount2" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	      }
	    });
	    $(".slrmax2").val($("#slider-range2").slider("values", 1));
	    $(".slrmin2").val($("#slider-range2").slider("values", 0));
	  });

	$(".ncontactslink,.jq-selectbox__dropdown ul").mCustomScrollbar();
});