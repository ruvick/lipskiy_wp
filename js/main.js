//@prepros-append jq-start.js
//@prepros-append forms.js
//@prepros-append script.js
//@prepros-append jq-end.js 
$(document).ready(function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
		var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie; 
	}
	if(isIE()){
		$('body').addClass('ie');
	}
	if(isMobile.any()){
		$('body').addClass('touch');
	}
//FORMS
function forms(){
	//SELECT
	if($('select').length>0){
		function selectscrolloptions(){
				var scs=100;
				var mss=50;
			if(isMobile.any()){
				scs=10;
				mss=1;
			}
			var opt={
				cursorcolor:"#9B4E7C",
				cursorwidth: "12px",
				background: "",
				autohidemode:false,
				bouncescroll:false,
				cursorborderradius: "10px",
				scrollspeed:scs,
				mousescrollstep:mss,
				directionlockdeadzone:0,
				cursorborder: "0px solid #fff",
			};
			return opt;
		}

		function select(){
			$.each($('select'), function(index, val) {
					var ind=index;
				$(this).hide();
				if($(this).parent('.select-block').length==0){
					$(this).wrap("<div class='select-block "+$(this).attr('class')+"-select-block'></div>");
				}else{
					$(this).parent('.select-block').find('.select').remove();
				}
					let cl='';
					var milti='';
					var check='';
					var sblock=$(this).parent('.select-block');
					var soptions="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";
				if($(this).attr('multiple')=='multiple'){
					milti='multiple';
					check='check';
				}
				$.each($(this).find('option'), function(index, val) {
					if($(this).attr('class')!='' && $(this).attr('class')!=null){
						let cl=$(this).attr('class');
					}
					if($(this).attr('value')!=''){
						if($(this).attr('data-icon')!='' && $(this).attr('data-icon')!=null){
							soptions=soptions+"<div data-value='"+$(this).attr('value')+"' class='select-options__value_"+ind+" select-options__value value_"+$(this).val()+" "+cl+" "+check+"'><div><img src="+$(this).attr('data-icon')+" alt=\"\"></div><div>"+$(this).html()+"</div></div>";
						}else{
							soptions=soptions+"<div data-value='"+$(this).attr('value')+"' class='select-options__value_"+ind+" select-options__value value_"+$(this).val()+" "+cl+" "+check+"'>"+$(this).html()+"</div>";
						}
					}else if($(this).parent().attr('data-label')=='on'){
						if(sblock.find('.select__label').length==0){
							sblock.prepend('<div class="select__label">'+$(this).html()+'</div>');
						}
					}
				});
					soptions=soptions+"</div></div></div>";
				if($(this).attr('data-type')=='search'){
						sblock.append("<div data-type='search' class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
												"<div class='select-title'>"+
													"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
													"<input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"' />"+
												"</div>"+
												soptions+
											"</div>");
						$('.select_'+ind).find('input.select-title__value').jcOnPageFilter({
							parentSectionClass:'select-options_'+ind,
							parentLookupClass:'select-options__value_'+ind,
							childBlockClass:'select-options__value_'+ind
						});
				}else if($(this).attr('data-icon')=='true'){
					sblock.append("<div class='select_"+ind+" select"+" "+$(this).attr('class')+"__select icon "+milti+"'>"+
											"<div class='select-title'>"+
												"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
												"<div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'><div><img src="+$(this).find('option[selected="selected"]').attr('data-icon')+" alt=\"\"></div><div>"+$(this).find('option[selected="selected"]').html()+"</div></div>"+
											"</div>"+
											soptions+
										"</div>");
				}else{
					sblock.append("<div class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
											"<div class='select-title'>"+
												"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
												"<div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'>"+$(this).find('option[selected="selected"]').html()+"</div>"+
											"</div>"+
											soptions+
										"</div>");
				}
				if($(this).find('option[selected="selected"]').val()!=''){
					sblock.find('.select').addClass('focus');
				}

				if(sblock.find('.select-options__value').length==1){
					sblock.find('.select').addClass('one');
				}

				if($(this).attr('data-req')=='on'){
					$(this).addClass('req');
				}
				$(".select_"+ind+" .select-options-scroll").niceScroll('.select-options-list',selectscrolloptions());
			});
		}
			select();

		$('body').on('keyup','input.select-title__value',function() {
			$('.select').not($(this).parents('.select')).removeClass('active').find('.select-options').slideUp(50);
			$(this).parents('.select').addClass('active');
			$(this).parents('.select').find('.select-options').slideDown(50,function() {
				$(this).find(".select-options-scroll").getNiceScroll().resize();
			});
			$(this).parents('.select-block').find('select').val('');
		});
		$('body').on('click','.select',function(){
			if(!$(this).hasClass('disabled') && !$(this).hasClass('one')){
				$('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
				$(this).toggleClass('active');
				$(this).find('.select-options').slideToggle(50,function() {
					$(this).find(".select-options-scroll").getNiceScroll().resize();
				});

				//	var input=$(this).parent().find('select');
				//removeError(input);

				if($(this).attr('data-type')=='search'){
					if(!$(this).hasClass('active')){
						searchselectreset();
					}
					$(this).find('.select-options__value').show();
				}


				var cl=$.trim($(this).find('.select-title__value').attr('class').replace('select-title__value',''));
					$(this).find('.select-options__value').show().removeClass('hide').removeClass('last');
				if(cl!=''){
					$(this).find('.select-options__value.'+cl).hide().addClass('hide');
				}
				if($(this).find('.select-options__value').last().hasClass('hide')){
					$(this).find('.select-options__value').last().prev().addClass('last');
				}
			}
		});
		$('body').on('click','.select-options__value',function() {
			if($(this).parents('.select').hasClass('multiple')){
				if($(this).hasClass('active')){
					if($(this).parents('.select').find('.select-title__value span').length>0){
						$(this).parents('.select').find('.select-title__value').append('<span data-value="'+$(this).data('value')+'">, '+$(this).html()+'</span>');
					}else{
						$(this).parents('.select').find('.select-title__value').data('label',$(this).parents('.select').find('.select-title__value').html());
						$(this).parents('.select').find('.select-title__value').html('<span data-value="'+$(this).data('value')+'">'+$(this).html()+'</span>');
					}
					$(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', true);
					$(this).parents('.select').addClass('focus');
				}else{
					$(this).parents('.select').find('.select-title__value').find('span[data-value="'+$(this).data('value')+'"]').remove();
					if($(this).parents('.select').find('.select-title__value span').length==0){
						$(this).parents('.select').find('.select-title__value').html($(this).parents('.select').find('.select-title__value').data('label'));
						$(this).parents('.select').removeClass('focus');
					}
					$(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', false);
				}
				return false;
			}


			if($(this).parents('.select').attr('data-type')=='search'){
				$(this).parents('.select').find('.select-title__value').val($(this).html());
				$(this).parents('.select').find('.select-title__value').attr('data-value',$(this).html());
			}else{
				$(this).parents('.select').find('.select-title__value').attr('class','select-title__value value_'+$(this).data('value'));
				$(this).parents('.select').find('.select-title__value').html($(this).html());

			}

				$(this).parents('.select-block').find('select').find('option').removeAttr("selected");
			if($.trim($(this).data('value'))!=''){
				$(this).parents('.select-block').find('select').val($(this).data('value'));
				$(this).parents('.select-block').find('select').find('option[value="'+$(this).data('value')+'"]').attr('selected','selected');
			}else{
				$(this).parents('.select-block').find('select').val($(this).html());
				$(this).parents('.select-block').find('select').find('option[value="'+$(this).html()+'"]').attr('selected','selected');
			}


			if($(this).parents('.select-block').find('select').val()!=''){
				$(this).parents('.select-block').find('.select').addClass('focus');
			}else{
				$(this).parents('.select-block').find('.select').removeClass('focus');

				$(this).parents('.select-block').find('.select').removeClass('err');
				$(this).parents('.select-block').parent().removeClass('err');
				$(this).parents('.select-block').removeClass('err').find('.form__error').remove();
			}
			if(!$(this).parents('.select').data('tags')!=""){
				if($(this).parents('.form-tags').find('.form-tags__item[data-value="'+$(this).data('value')+'"]').length==0){
					$(this).parents('.form-tags').find('.form-tags-items').append('<a data-value="'+$(this).data('value')+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>');
				}
			}
			$(this).parents('.select-block').find('select').change();

			if($(this).parents('.select-block').find('select').data('update')=='on'){
				select();
			}
		});
		$(document).on('click touchstart',function(e) {
			if (!$(e.target).is(".select *") && !$(e.target).is(".select")) {
				$('.select').removeClass('active');
				$('.select-options').slideUp(50,function() {});
				searchselectreset();
			};
		});
		$(document).on('keydown',function(e) {
			if(e.which==27){
				$('.select').removeClass('active');
				$('.select-options').slideUp(50,function() {});
				searchselectreset();
			}
		});
	}
	//FIELDS
	$('input,textarea').focus(function(){
		if($(this).val() == $(this).attr('data-value')){
				$(this).addClass('focus');
				$(this).parent().addClass('focus');
			if($(this).attr('data-type')=='pass'){
				$(this).attr('type','password');
			};
			$(this).val('');
		};
		removeError($(this));
	});
	$('input[data-value], textarea[data-value]').each(function() {
		if (this.value == '' || this.value == $(this).attr('data-value')) {
			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
			}else{
				this.value = $(this).attr('data-value');
			}
		}
		if(this.value!=$(this).attr('data-value') && this.value!=''){
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
			}
		}

		$(this).click(function() {
			if (this.value == $(this).attr('data-value')) {
				if($(this).attr('data-type')=='pass'){
					$(this).attr('type','password');
				};
				this.value = '';
			};
		});
		$(this).blur(function() {
			if (this.value == '') {
				if(!$(this).hasClass('l')){
					this.value = $(this).attr('data-value');
				}
					$(this).removeClass('focus');
					$(this).parent().removeClass('focus');
				if($(this).attr('data-type')=='pass'){
					$(this).attr('type','text');
				};
			};
			if($(this).hasClass('vn')){
				formValidate($(this));
			}
		});
	});
	$('.form-input__viewpass').click(function(event) {
		if($(this).hasClass('active')){
			$(this).parent().find('input').attr('type','password');
		}else{
			$(this).parent().find('input').attr('type','text');
		}
		$(this).toggleClass('active');
	});

	//$('textarea').autogrow({vertical: true, horizontal: false});
	

	//MASKS//
	//'+7(999) 999 9999'
	//'+38(999) 999 9999'
	//'+375(99)999-99-99'
	//'a{3,1000}' только буквы минимум 3
	//'9{3,1000}' только цифры минимум 3
	$.each($('input.phone'), function(index, val) {
		$(this).attr('type','tel');
		$(this).focus(function(){
			$(this).inputmask('+7(999) 999 9999',{clearIncomplete: true,clearMaskOnLostFocus: true,
				"onincomplete": function(){maskclear($(this));}
			});
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
	});
	$('input.phone').focusout(function(event) {
		maskclear($(this));
	});
	$.each($('input.num'), function(index, val) {
		$(this).focus(function(){
			$(this).inputmask('9{1,1000}',{clearIncomplete: true,placeholder:"",clearMaskOnLostFocus: true,"onincomplete": function(){maskclear($(this));}});
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
	});
	$('input.num').focusout(function(event) {
		maskclear($(this));
	});
	/*
	$.each($('input.date'), function(index, val) {
		$(this).focus(function(){
			$(this).inputmask('dd.mm.yyyy',{
				clearIncomplete: true,
				placeholder:"_",
				//yearrange:{'minyear':n-40,'maxyear':n},
				clearMaskOnLostFocus: true,
				"onincomplete": function(){maskclear($(this));},
				"oncomplete": function(){
					$(this).datepicker("setDate",$(this).val());
				}
			});
			$(this).addClass('focus');
			$(this).parents('.form-column').addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
		$(this).focusout(function(event) {
			maskclear($(this));
		});
		$(this).datepicker({
			dateFormat : "dd.mm.yy",
			//yearRange: "1915:2015",
			//defaultDate: '-18Y', 
			//inDate: '-85Y', 
			//maxDate: "0Y",
			beforeShow :function(event){
				$('.ui-datepicker').show();
			},
			onSelect:function(event){
				if($(this).val()!=$(this).attr('data-value') && $(this).val()!=''){
					$(this).addClass('focus');
					$(this).parent().addClass('focus');
					if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
						$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
					}
				}
			}
		});
	});
	*/

	//CHECK
	$.each($('.check'), function(index, val) {
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$('body').off('click','.check',function(event){});
	$('body').on('click','.check',function(event){
		if(!$(this).hasClass('disable')){
				var target = $(event.target);
			if (!target.is("a")){
					$(this).toggleClass('active');
				if($(this).hasClass('active')){
					$(this).find('input').prop('checked', true);
				}else{
					$(this).find('input').prop('checked', false);
				}
			}
		}
	});

	//OPTION
	$.each($('.option.active'), function(index, val) {
		$(this).find('input').prop('checked', true);
	});
	$('.option').click(function(event) {
		if(!$(this).hasClass('disable')){
				var target = $(event.target);
			if (!target.is("a")){
				if($(this).hasClass('active') && $(this).hasClass('order') ){
					$(this).toggleClass('orderactive');
				}
					$(this).parents('.options').find('.option').removeClass('active');
					$(this).toggleClass('active');
					$(this).children('input').prop('checked', true);
			}
		}
	});
	//RATING
	$('.rating.edit .star').hover(function() {
			var block=$(this).parents('.rating');
		block.find('.rating__activeline').css({width:'0%'});
			var ind=$(this).index()+1;
			var linew=ind/block.find('.star').length*100;
		setrating(block,linew);
	},function() {
			var block=$(this).parents('.rating');
		block.find('.star').removeClass('active');
			var ind=block.find('input').val();
			var linew=ind/block.find('.star').length*100;
		setrating(block,linew);
	});
	$('.rating.edit .star').click(function(event) {
			var block=$(this).parents('.rating');
			var re=$(this).index()+1;
			block.find('input').val(re);
			var linew=re/block.find('.star').length*100;
		setrating(block,linew);
	});
	$.each($('.rating'), function(index, val) {
			var ind=$(this).find('input').val();
			var linew=ind/$(this).parent().find('.star').length*100;
		setrating($(this),linew);
	});
	function setrating(th,val) {
		th.find('.rating__activeline').css({width:val+'%'});
	}
	//QUANTITY
	$('.quantity__btn').click(function(event) {
			var n=parseInt($(this).parent().find('.quantity__input').val());
		if($(this).hasClass('dwn')){
			n=n-1;
			if(n<1){n=1;}
		}else{
			n=n+1;
		}
			$(this).parent().find('.quantity__input').val(n);
		return false;
	});
	//RANGE
	if($("#range" ).length>0){
		$("#range" ).slider({
			range: true,
			min: 0,
			max: 5000,
			values: [0, 5000],
			slide: function( event, ui ){
				$('#rangefrom').val(ui.values[0]);
				$('#rangeto').val(ui.values[1]);
				$(this).find('.ui-slider-handle').eq(0).html('<span>'+ui.values[0]+'</span>');
				$(this).find('.ui-slider-handle').eq(1).html('<span>'+ui.values[1]+'</span>');
			},
			change: function( event, ui ){
				if(ui.values[0]!=$( "#range" ).slider( "option","min") || ui.values[1]!=$( "#range" ).slider( "option","max")){
					$('#range').addClass('act');
				}else{
					$('#range').removeClass('act');
				}
			}
		});
		$('#rangefrom').val($( "#range" ).slider( "values", 0 ));
		$('#rangeto').val($( "#range" ).slider( "values", 1 ));

		$("#range" ).find('.ui-slider-handle').eq(0).html('<span>'+$( "#range" ).slider( "option","min")+'</span>');
		$("#range" ).find('.ui-slider-handle').eq(1).html('<span>'+$( "#range" ).slider( "option","max")+'</span>');
		
		$( "#rangefrom" ).bind("change", function(){
			if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
				$(this).val($( "#range" ).slider( "option","max"));
			}
			if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
				$(this).val($( "#range" ).slider( "option","min"));
			}
			$("#range" ).slider( "values",0,$(this).val());
		});
		$( "#rangeto" ).bind("change", function(){
			if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
				$(this).val($( "#range" ).slider( "option","max"));
			}
			if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
				$(this).val($( "#range" ).slider( "option","min"));
			}
			$("#range" ).slider( "values",1,$(this).val());
		});
		$("#range" ).find('.ui-slider-handle').eq(0).addClass('left');
		$("#range" ).find('.ui-slider-handle').eq(1).addClass('right');
	}
	//ADDFILES
	$('.form-addfile__input').change(function(e){
		if($(this).val()!=''){
					var ts=$(this);
				ts.parents('.form-addfile').find('ul.form-addfile-list').html('');
			$.each(e.target.files, function(index, val) {
				if(ts.parents('.form-addfile').find('ul.form-addfile-list>li:contains("'+e.target.files[index].name+'")').length==0){
					ts.parents('.form-addfile').find('ul.form-addfile-list').append('<li>'+e.target.files[index].name+'</li>');
				}
			});
		}
	});
}
forms();

function digi(str){
	var r=str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	return r;
}

//VALIDATE FORMS
$('form button[type=submit]').click(function(){
		var er=0;
		var form=$(this).parents('form');
		var ms=form.data('ms');
	$.each(form.find('.req'), function(index, val) {
		er+=formValidate($(this));
	});
	if(er==0){
		removeFormError(form);
		/*
			var messagehtml='';
		if(form.hasClass('editprofile')){
			var messagehtml='';
		}
		formLoad();
		*/

		//ОПТРАВКА ФОРМЫ
		/*
		function showResponse(html){
			if(!form.hasClass('nomessage')){
				showMessage(messagehtml);
			}
			if(!form.hasClass('noclear')){
				clearForm(form);
			}
		}
		var options={
			success:showResponse
		};
			form.ajaxForm(options);
		

		setTimeout(function(){
			if(!form.hasClass('nomessage')){
				//showMessage(messagehtml);
				showMessageByClass(ms);
			}
			if(!form.hasClass('noclear')){
				clearForm(form);
			}
		},0);

		return false;
		*/
		if(ms!=null && ms!=''){
			showMessageByClass(ms);
			return false;
		}
	}else{
		return false;
	}
});
function formValidate(input){
		var er=0;
		var form=input.parents('form');
	if(input.attr('name')=='email' || input.hasClass('email')){
		if(input.val()!=input.attr('data-value')){
			var em=input.val().replace(" ","");
			input.val(em);
		}
		if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.val())) || input.val()==input.attr('data-value')){
				er++;
			addError(input);
		}else{
			removeError(input);
		}
	}else{
		if(input.val()=='' || input.val()==input.attr('data-value')){
			er++;
			addError(input);
		}else{
			removeError(input);
		}
	}
	if(input.attr('type')=='checkbox'){
		if(input.prop('checked') == true){
			input.removeClass('err').parent().removeClass('err');
		}else{
			er++;
			input.addClass('err').parent().addClass('err');
		}
	}
	if(input.hasClass('name')){
		if(!(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(input.val()))){
				er++;
			addError(input);
		}
	}
	if(input.hasClass('pass-2')){
		if(form.find('.pass-1').val()!=form.find('.pass-2').val()){
			addError(input);
		}else{
			removeError(input);
		}
	}
		return er;
}
function formLoad(){
	$('.popup').hide();
	$('.popup-message-body').hide();
	$('.popup-message .popup-body').append('<div class="popup-loading"><div class="popup-loading__title">Идет загрузка...</div><div class="popup-loading__icon"></div></div>');
	$('.popup-message').addClass('active').fadeIn(300);
}
function showMessageByClass(ms){
	$('.popup').hide();
	popupOpen('message.'+ms,'');
}
function showMessage(html){
	$('.popup-loading').remove();
	$('.popup-message-body').show().html(html);
}
function clearForm(form){
	$.each(form.find('.input'), function(index, val) {
			$(this).removeClass('focus').val($(this).data('value'));
			$(this).parent().removeClass('focus');
		if($(this).hasClass('phone')){
			maskclear($(this));
		}
	});
}
function addError(input){
		input.addClass('err');
		input.parent().addClass('err');
		input.parent().find('.form__error').remove();
	if(input.hasClass('email')){
			var error='';
		if(input.val()=='' || input.val()==input.attr('data-value')){
			error=input.data('error');
		}else{
			error=input.data('error');
		}
		if(error!=null){
			input.parent().append('<div class="form__error">'+error+'</div>');
		}
	}else{
		if(input.data('error')!=null && input.parent().find('.form__error').length==0){
			input.parent().append('<div class="form__error">'+input.data('error')+'</div>');
		}
	}
	if(input.parents('.select-block').length>0){
		input.parents('.select-block').parent().addClass('err');
		input.parents('.select-block').find('.select').addClass('err');
	}
}
function addErrorByName(form,input__name,error_text){
		var input=form.find('[name="'+input__name+'"]');
	input.attr('data-error',error_text);
	addError(input);
}
function addFormError(form, error_text){
	form.find('.form__generalerror').show().html(error_text);
}
function removeFormError(form){
	form.find('.form__generalerror').hide().html('');
}
function removeError(input){
	input.removeClass('err');
	input.parent().removeClass('err');
	input.parent().find('.form__error').remove();

	if(input.parents('.select-block').length>0){
		input.parents('.select-block').parent().removeClass('err');
		input.parents('.select-block').find('.select').removeClass('err').removeClass('active');
		//input.parents('.select-block').find('.select-options').hide();
	}
}
function removeFormErrors(form){
	form.find('.err').removeClass('err');
	form.find('.form__error').remove();
}
function maskclear(n){
	if(n.val()==""){
		n.inputmask('remove');
		if(!n.hasClass('l')){
			n.val(n.attr('data-value'));
		}
		n.removeClass('focus');
		n.parent().removeClass('focus');
	}
}
function searchselectreset() {
	$.each($('.select[data-type="search"]'), function(index, val){
			var block=$(this).parent();
			var select=$(this).parent().find('select');
		if($(this).find('.select-options__value:visible').length==1){
			$(this).addClass('focus');
			$(this).parents('.select-block').find('select').val($('.select-options__value:visible').data('value'));
			$(this).find('.select-title__value').val($('.select-options__value:visible').html());
			$(this).find('.select-title__value').attr('data-value',$('.select-options__value:visible').html());
		}else if(select.val()==''){
			$(this).removeClass('focus');
			block.find('input.select-title__value').val(select.find('option[selected="selected"]').html());
			block.find('input.select-title__value').attr('data-value',select.find('option[selected="selected"]').html());
		}
	});
}
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
if (isMobile.any()) { }

if (location.hash) {
	var hsh = location.hash.replace('#', '');
	if ($('.popup-' + hsh).length > 0) {
		popupOpen(hsh);
	} else if ($('div.' + hsh).length > 0) {
		$('body,html').animate({ scrollTop: $('div.' + hsh).offset().top, }, 500, function () { });
	}
}
$('.wrapper').addClass('loaded');

var act = "click";
if (isMobile.iOS()) {
	var act = "touchstart";
}

//BURGER
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".mob-menu");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}

//ZOOM
if ($('.gallery').length > 0) {
	baguetteBox.run('.gallery', {
		// Custom options
	});
}
/*
CLOUD-ZOOM
<a rel="position:'right',adjustX:25,adjustY:0,Width: 432" href="img/product/zoom.jpg" class="cloud-zoom product-main-mainimage__item">
	<img class="cloudzoom-gallery" src="img/product/zoom.jpg" alt="" />
</a>
*/


//POPUP
$('.pl').click(function (event) {
	var pl = $(this).attr('href').replace('#', '');
	var v = $(this).data('vid');
	popupOpen(pl, v);
	return false;
});
function popupOpen(pl, v) {
	$('.popup').removeClass('active').hide();
	if (!$('.menu__body').hasClass('active')) {
		//$('body').data('scroll',$(window).scrollTop());
	}
	if (!isMobile.any()) {
		$('body').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() }).addClass('lock');
		$('.pdb').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() });
	} else {
		setTimeout(function () {
			$('body').addClass('lock');
		}, 300);
	}
	history.pushState('', '', '#' + pl);
	if (v != '' && v != null) {
		$('.popup-' + pl + ' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/' + v + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
	}
	$('.popup-' + pl).fadeIn(300).delay(300).addClass('active');

	if ($('.popup-' + pl).find('.slick-slider').length > 0) {
		$('.popup-' + pl).find('.slick-slider').slick('setPosition');
	}
}
function openPopupById(popup_id) {
	$('#' + popup_id).fadeIn(300).delay(300).addClass('active');
}
function popupClose() {
	$('.popup').removeClass('active').fadeOut(300);
	if (!$('.menu__body').hasClass('active')) {
		if (!isMobile.any()) {
			setTimeout(function () {
				$('body').css({ paddingRight: 0 });
				$('.pdb').css({ paddingRight: 0 });
			}, 200);
			setTimeout(function () {
				$('body').removeClass('lock');
				//$('body,html').scrollTop(parseInt($('body').data('scroll')));
			}, 200);
		} else {
			$('body').removeClass('lock');
			//$('body,html').scrollTop(parseInt($('body').data('scroll')));
		}
	}
	$('.popup-video__value').html('');

	history.pushState('', '', window.location.href.split('#')[0]);
}
$('.popup-close,.popup__close').click(function (event) {
	popupClose();
	return false;
});
$('.popup').click(function (e) {
	if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
		popupClose();
		return false;
	}
});
$(document).on('keydown', function (e) {
	if (e.which == 27) {
		popupClose();
	}
});

$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');
	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.menu__body').hasClass('active')) {
		$('.menu__body,.icon-menu').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});


function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();


//Клик вне области
$(document).on('click touchstart', function (e) {
	if (!$(e.target).is(".select *")) {
		$('.select').removeClass('active');
	};
});

//UP
$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 50) {
		$('#up').fadeIn(300);
	} else {
		$('#up').fadeOut(300);
	}
});
$('#up').click(function (event) {
	$('body,html').animate({ scrollTop: 0 }, 300);
});

$('body').on('click', '.tab__navitem', function (event) {
	var eq = $(this).index();
	if ($(this).hasClass('parent')) {
		var eq = $(this).parent().index();
	}
	if (!$(this).hasClass('active')) {
		$(this).closest('.tabs').find('.tab__navitem').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
		if ($(this).closest('.tabs').find('.slick-slider').length > 0) {
			$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
		}
	}
});
$.each($('.spoller.active'), function (index, val) {
	$(this).next().show();
});
$('body').on('click', '.spoller', function (event) {
	if ($(this).hasClass('mob') && !isMobile.any()) {
		return false;
	}

	if ($(this).parents('.one').length > 0) {
		$(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
		$(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
	}

	if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
		$.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
			$(this).removeClass('active');
			$(this).next().slideUp(300);
		});
	}
	$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
		if ($(this).parent().find('.slick-slider').length > 0) {
			$(this).parent().find('.slick-slider').slick('setPosition');
		}
	});
	return false;
});



function scrolloptions() {
	var scs = 100;
	var mss = 50;
	var bns = false;
	if (isMobile.any()) {
		scs = 10;
		mss = 1;
		bns = true;
	}
	var opt = {
		cursorcolor: "#fff",
		cursorwidth: "4px",
		background: "",
		autohidemode: true,
		cursoropacitymax: 0.4,
		bouncescroll: bns,
		cursorborderradius: "0px",
		scrollspeed: scs,
		mousescrollstep: mss,
		directionlockdeadzone: 0,
		cursorborder: "0px solid #fff",
	};
	return opt;
}
function scroll() {
	$('.scroll-body').niceScroll('.scroll-list', scrolloptions());
}
if (navigator.appVersion.indexOf("Mac") != -1) {
} else {
	if ($('.scroll-body').length > 0) { scroll(); }
}

/*
function scrollwhouse(){
		var scs=100;
		var mss=50;
		var bns=false;
	if(isMobile.any()){
		scs=10;
		mss=1;
		bns=true;
	}
	var opt={
		cursorcolor:"#afafaf",
		cursorwidth: "5px",
		background: "",
		autohidemode:false,
		railalign: 'left',
		cursoropacitymax: 1,
		bouncescroll:bns,
		cursorborderradius: "0px",
		scrollspeed:scs,
		mousescrollstep:mss,
		directionlockdeadzone:0,
		cursorborder: "0px solid #fff",
	};
	return opt;
}
$('.whouse-content-body').niceScroll('.whouse-content-scroll',scrollwhouse());
$('.whouse-content-body').scroll(function(event) {
		var s=$(this).scrollTop();
		var r=Math.abs($(this).outerHeight()-$('.whouse-content-scroll').outerHeight());
		var p=s/r*100;
	$('.whouse-content__shadow').css({opacity:1-1/100*p});
});
*/


if ($('.t,.tip').length > 0) {
	tip();
}
function tip() {
	$('.t,.tip').webuiPopover({
		placement: 'top',
		trigger: 'hover',
		backdrop: false,
		//selector:true,
		animation: 'fade',
		dismissible: true,
		padding: false,
		//hideEmpty: true
		onShow: function ($element) { },
		onHide: function ($element) { },
	}).on('show.webui.popover hide.webui.popover', function (e) {
		$(this).toggleClass('active');
	});
}

//scrollToFixed Фиксовая шапка
//   $(".header").scrollToFixed({
//     marginTop: -1
//   });

// Маска телефона
!function(f){function e(n,m){return this instanceof e?(f.isPlainObject(n)?m=n:(m=m||{},m.alias=n),this.el=void 0,this.opts=f.extend(!0,{},this.defaults,m),this.noMasksCache=m&&void 0!==m.definitions,this.userOptions=m||{},this.events={},void h(this.opts.alias,m,this.opts)):new e(n,m)}function k(m){var p=document.createElement("input"),o="on"+m,n=o in p;return n||(p.setAttribute(o,"return;"),n="function"==typeof p[o]),p=null,n}function i(n,q){var m=n.getAttribute("type"),o="INPUT"===n.tagName&&-1!==f.inArray(m,q.supportsInputType)||n.isContentEditable||"TEXTAREA"===n.tagName;if(!o){var p=document.createElement("input");p.setAttribute("type",m),o="text"===p.type,p=null}return o}function h(n,o,p){var m=p.aliases[n];return m?(m.alias&&h(m.alias,void 0,p),f.extend(!0,p,m),f.extend(!0,p,o),!0):(null===p.mask&&(p.mask=n),!1)}function l(v,m,t){function q(p,w){w=void 0!==w?w:v.getAttribute("data-inputmask-"+p),null!==w&&("string"==typeof w&&(0===p.indexOf("on")?w=window[w]:"false"===w?w=!1:"true"===w&&(w=!0)),t[p]=w)}var s,o,r,n,u=v.getAttribute("data-inputmask");if(u&&""!==u&&(u=u.replace(new RegExp("'","g"),'"'),o=JSON.parse("{"+u+"}")),o){r=void 0;for(n in o){if("alias"===n.toLowerCase()){r=o[n];break}}}q("alias",r),t.alias&&h(t.alias,t,m);for(s in m){if(o){r=void 0;for(n in o){if(n.toLowerCase()===s.toLowerCase()){r=o[n];break}}}q(s,r)}return f.extend(!0,m,t),m}function d(s,p){function r(M){function A(V,T,U,S){this.matches=[],this.isGroup=V||!1,this.isOptional=T||!1,this.isQuantifier=U||!1,this.isAlternator=S||!1,this.quantifier={min:1,max:1}}function t(aa,V,X){var T=s.definitions[V];X=void 0!==X?X:aa.matches.length;var U=aa.matches[X-1];if(T&&!B){T.placeholder=f.isFunction(T.placeholder)?T.placeholder(s):T.placeholder;for(var Z=T.prevalidator,ac=Z?Z.length:0,W=1;W<T.cardinality;W++){var ab=ac>=W?Z[W-1]:[],S=ab.validator,Y=ab.cardinality;aa.matches.splice(X++,0,{fn:S?"string"==typeof S?new RegExp(S):new function(){this.test=S}():new RegExp("."),cardinality:Y?Y:1,optionality:aa.isOptional,newBlockMarker:void 0===U||U.def!==(T.definitionSymbol||V),casing:T.casing,def:T.definitionSymbol||V,placeholder:T.placeholder,mask:V}),U=aa.matches[X-1]}aa.matches.splice(X++,0,{fn:T.validator?"string"==typeof T.validator?new RegExp(T.validator):new function(){this.test=T.validator}():new RegExp("."),cardinality:T.cardinality,optionality:aa.isOptional,newBlockMarker:void 0===U||U.def!==(T.definitionSymbol||V),casing:T.casing,def:T.definitionSymbol||V,placeholder:T.placeholder,mask:V})}else{aa.matches.splice(X++,0,{fn:null,cardinality:0,optionality:aa.isOptional,newBlockMarker:void 0===U||U.def!==V,casing:null,def:s.staticDefinitionSymbol||V,placeholder:void 0!==s.staticDefinitionSymbol?V:void 0,mask:V}),B=!1}}function C(T,S){T.isGroup&&(T.isGroup=!1,t(T,s.groupmarker.start,0),S!==!0&&t(T,s.groupmarker.end))}function R(S,U,V,T){U.matches.length>0&&(void 0===T||T)&&(V=U.matches[U.matches.length-1],C(V)),t(U,S)}function E(){if(Q.length>0){if(N=Q[Q.length-1],R(I,N,O,!N.isAlternator),N.isAlternator){P=Q.pop();for(var S=0;S<P.matches.length;S++){P.matches[S].isGroup=!1}Q.length>0?(N=Q[Q.length-1],N.matches.push(P)):v.matches.push(P)}}else{R(I,v,O)}}function y(U){function V(X){return X===s.optionalmarker.start?X=s.optionalmarker.end:X===s.optionalmarker.end?X=s.optionalmarker.start:X===s.groupmarker.start?X=s.groupmarker.end:X===s.groupmarker.end&&(X=s.groupmarker.start),X}U.matches=U.matches.reverse();for(var T in U.matches){var S=parseInt(T);if(U.matches[T].isQuantifier&&U.matches[S+1]&&U.matches[S+1].isGroup){var W=U.matches[T];U.matches.splice(T,1),U.matches.splice(S+1,0,W)}void 0!==U.matches[T].matches?U.matches[T]=y(U.matches[T]):U.matches[T]=V(U.matches[T])}return U}for(var D,I,z,N,P,O,w,G=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,B=!1,v=new A(),Q=[],x=[];D=G.exec(M);){if(I=D[0],B){E()}else{switch(I.charAt(0)){case s.escapeChar:B=!0;break;case s.optionalmarker.end:case s.groupmarker.end:if(z=Q.pop(),void 0!==z){if(Q.length>0){if(N=Q[Q.length-1],N.matches.push(z),N.isAlternator){P=Q.pop();for(var F=0;F<P.matches.length;F++){P.matches[F].isGroup=!1}Q.length>0?(N=Q[Q.length-1],N.matches.push(P)):v.matches.push(P)}}else{v.matches.push(z)}}else{E()}break;case s.optionalmarker.start:Q.push(new A(!1,!0));break;case s.groupmarker.start:Q.push(new A(!0));break;case s.quantifiermarker.start:var H=new A(!1,!1,!0);I=I.replace(/[{}]/g,"");var J=I.split(","),L=isNaN(J[0])?J[0]:parseInt(J[0]),K=1===J.length?L:isNaN(J[1])?J[1]:parseInt(J[1]);if(("*"===K||"+"===K)&&(L="*"===K?0:1),H.quantifier={min:L,max:K},Q.length>0){var u=Q[Q.length-1].matches;D=u.pop(),D.isGroup||(w=new A(!0),w.matches.push(D),D=w),u.push(D),u.push(H)}else{D=v.matches.pop(),D.isGroup||(w=new A(!0),w.matches.push(D),D=w),v.matches.push(D),v.matches.push(H)}break;case s.alternatormarker:Q.length>0?(N=Q[Q.length-1],O=N.matches.pop()):O=v.matches.pop(),O.isAlternator?Q.push(O):(P=new A(!1,!1,!1,!0),P.matches.push(O),Q.push(P));break;default:E()}}}for(;Q.length>0;){z=Q.pop(),C(z,!0),v.matches.push(z)}return v.matches.length>0&&(O=v.matches[v.matches.length-1],C(O),x.push(v)),s.numericInput&&y(x[0]),x}function q(t,u){if(null===t||""===t){return void 0}if(1===t.length&&s.greedy===!1&&0!==s.repeat&&(s.placeholder=""),s.repeat>0||"*"===s.repeat||"+"===s.repeat){var v="*"===s.repeat?0:"+"===s.repeat?1:s.repeat;t=s.groupmarker.start+t+s.groupmarker.end+s.quantifiermarker.start+v+","+s.repeat+s.quantifiermarker.end}var w;return void 0===e.prototype.masksCache[t]||p===!0?(w={mask:t,maskToken:r(t),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:u},p!==!0&&(e.prototype.masksCache[s.numericInput?t.split("").reverse().join(""):t]=w,w=f.extend(!0,{},e.prototype.masksCache[s.numericInput?t.split("").reverse().join(""):t]))):w=f.extend(!0,{},e.prototype.masksCache[s.numericInput?t.split("").reverse().join(""):t]),w}function n(t){return t=t.toString()}var m;if(f.isFunction(s.mask)&&(s.mask=s.mask(s)),f.isArray(s.mask)){if(s.mask.length>1){s.keepStatic=null===s.keepStatic?!0:s.keepStatic;var o="(";return f.each(s.numericInput?s.mask.reverse():s.mask,function(t,u){o.length>1&&(o+=")|("),o+=n(void 0===u.mask||f.isFunction(u.mask)?u:u.mask)}),o+=")",q(o,s.mask)}s.mask=s.mask.pop()}return s.mask&&(m=void 0===s.mask.mask||f.isFunction(s.mask.mask)?q(n(s.mask),s.mask):q(n(s.mask.mask),s.mask)),m}function g(H,A,aH){function aG(aS,aR,aK){aR=aR||0;var aM,aP,aN,aL=[],aQ=0,aO=Q();do{if(aS===!0&&aD().validPositions[aQ]){var aJ=aD().validPositions[aQ];aP=aJ.match,aM=aJ.locator.slice(),aL.push(aK===!0?aJ.input:ah(aQ,aP))}else{aN=M(aQ,aM,aQ-1),aP=aN.match,aM=aN.locator.slice(),(aH.jitMasking===!1||aO>aQ||isFinite(aH.jitMasking)&&aH.jitMasking>aQ)&&aL.push(ah(aQ,aP))}aQ++}while((void 0===s||s>aQ-1)&&null!==aP.fn||null===aP.fn&&""!==aP.def||aR>=aQ);return""===aL[aL.length-1]&&aL.pop(),aL}function aD(){return A}function F(aJ){var aK=aD();aK.buffer=void 0,aJ!==!0&&(aK.tests={},aK._buffer=void 0,aK.validPositions={},aK.p=0)}function Q(aK,aL){var aO=-1,aP=-1,aM=aD().validPositions;void 0===aK&&(aK=-1);for(var aJ in aM){var aN=parseInt(aJ);aM[aN]&&(aL||null!==aM[aN].match.fn)&&(aK>=aN&&(aO=aN),aN>=aK&&(aP=aN))}return -1!==aO&&aK-aO>1||aK>aP?aO:aP}function X(aR,aS,aN){if(aH.insertMode&&void 0!==aD().validPositions[aR]&&void 0===aN){var aM,aT=f.extend(!0,{},aD().validPositions),aO=Q();for(aM=aR;aO>=aM;aM++){delete aD().validPositions[aM]}aD().validPositions[aR]=aS;var aL,aJ=!0,aQ=aD().validPositions;for(aM=aL=aR;aO>=aM;aM++){var aU=aT[aM];if(void 0!==aU){for(var aP=aL,aK=-1;aP<P()&&(null==aU.match.fn&&aQ[aM]&&(aQ[aM].match.optionalQuantifier===!0||aQ[aM].match.optionality===!0)||null!=aU.match.fn);){if(null===aU.match.fn||!aH.keepStatic&&aQ[aM]&&(void 0!==aQ[aM+1]&&aI(aM+1,aQ[aM].locator.slice(),aM).length>1||void 0!==aQ[aM].alternation)?aP++:aP=o(aL),C(aP,aU.match.def)){var aV=ae(aP,aU.input,!0,!0);aJ=aV!==!1,aL=aV.caret||aV.insert?Q():aP;break}if(aJ=null==aU.match.fn,aK===aP){break}aK=aP}}if(!aJ){break}}if(!aJ){return aD().validPositions=f.extend(!0,{},aT),F(!0),!1}}else{aD().validPositions[aR]=aS}return F(!0),!0}function t(aJ,aK,aP,aQ){var aM,aO=aJ;for(aD().p=aJ,aM=aO;aK>aM;aM++){void 0!==aD().validPositions[aM]&&(aP===!0||aH.canClearPosition(aD(),aM,Q(),aQ,aH)!==!1)&&delete aD().validPositions[aM]}for(aM=aO+1;aM<=Q();){for(;void 0!==aD().validPositions[aO];){aO++}var aS=aD().validPositions[aO];if(aO>aM&&(aM=aO+1),void 0===aD().validPositions[aM]&&O(aM)||void 0!==aS){aM++}else{var aR=M(aM);C(aO,aR.match.def)?ae(aO,aR.input||ah(aM),!0)!==!1&&(delete aD().validPositions[aM],aM++):O(aM)||(aM++,aO--),aO++}}var aN=Q(),aL=P();for(aQ!==!0&&aP!==!0&&void 0!==aD().validPositions[aN]&&aD().validPositions[aN].input===aH.radixPoint&&delete aD().validPositions[aN],aM=aN+1;aL>=aM;aM++){aD().validPositions[aM]&&delete aD().validPositions[aM]}F(!0)}function M(aP,aM,aL){var aN=aD().validPositions[aP];if(void 0===aN){for(var aK=aI(aP,aM,aL),aO=Q(),aQ=aD().validPositions[aO]||aI(0)[0],aJ=void 0!==aQ.alternation?aQ.locator[aQ.alternation].toString().split(","):[],aR=0;aR<aK.length&&(aN=aK[aR],!(aN.match&&(aH.greedy&&aN.match.optionalQuantifier!==!0||(aN.match.optionality===!1||aN.match.newBlockMarker===!1)&&aN.match.optionalQuantifier!==!0)&&(void 0===aQ.alternation||aQ.alternation!==aN.alternation||void 0!==aN.locator[aQ.alternation]&&L(aN.locator[aQ.alternation].toString().split(","),aJ))));aR++){}}return aN}function I(aJ){return aD().validPositions[aJ]?aD().validPositions[aJ].match:aI(aJ)[0].match}function C(aN,aM){for(var aL=!1,aJ=aI(aN),aK=0;aK<aJ.length;aK++){if(aJ[aK].match&&aJ[aK].match.def===aM){aL=!0;break}}return aL}function U(aM,aK){var aJ,aL;return(aD().tests[aM]||aD().validPositions[aM])&&f.each(aD().tests[aM]||[aD().validPositions[aM]],function(aN,aO){var aP=aO.alternation?aO.locator[aO.alternation].toString().indexOf(aK):-1;(void 0===aL||aL>aP)&&-1!==aP&&(aJ=aO,aL=aP)}),aJ}function aI(aU,aN,aM){function aJ(a4,a1,a3,aZ){function a5(bi,bt,bs){function bp(bx,by){var bw=0===f.inArray(bx,by.matches);return bw||f.each(by.matches,function(bz,bA){return bA.isQuantifier===!0&&(bw=bp(bx,by.matches[bz-1]))?!1:void 0}),bw}function be(by,bx){var bw=U(by,bx);return bw?bw.locator.slice(bw.alternation+1):[]}if(aQ>10000){throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+aD().mask}if(aQ===aU&&void 0===bi.matches){return aP.push({match:bi,locator:bt.reverse(),cd:aW}),!0}if(void 0!==bi.matches){if(bi.isGroup&&bs!==bi){if(bi=a5(a4.matches[f.inArray(bi,a4.matches)+1],bt)){return !0}}else{if(bi.isOptional){var bl=bi;if(bi=aJ(bi,a1,bt,bs)){if(aX=aP[aP.length-1].match,!bp(aX,bl)){return !0}aV=!0,aQ=aU}}else{if(bi.isAlternator){var a8,a9=bi,a6=[],ba=aP.slice(),bc=bt.length,bd=a1.length>0?a1.shift():-1;if(-1===bd||"string"==typeof bd){var bk,bu=aQ,bj=a1.slice(),br=[];if("string"==typeof bd){br=bd.split(",")}else{for(bk=0;bk<a9.matches.length;bk++){br.push(bk)}}for(var bf=0;bf<br.length;bf++){if(bk=parseInt(br[bf]),aP=[],a1=be(aQ,bk),bi=a5(a9.matches[bk]||a4.matches[bk],[bk].concat(bt),bs)||bi,bi!==!0&&void 0!==bi&&br[br.length-1]<a9.matches.length){var bn=f.inArray(bi,a4.matches)+1;a4.matches.length>bn&&(bi=a5(a4.matches[bn],[bn].concat(bt.slice(1,bt.length)),bs),bi&&(br.push(bn.toString()),f.each(aP,function(bw,bx){bx.alternation=bt.length-1})))}a8=aP.slice(),aQ=bu,aP=[];for(var bq=0;bq<bj.length;bq++){a1[bq]=bj[bq]}for(var bo=0;bo<a8.length;bo++){var bh=a8[bo];bh.alternation=bh.alternation||bc;for(var bm=0;bm<a6.length;bm++){var a7=a6[bm];if(bh.match.def===a7.match.def&&("string"!=typeof bd||-1!==f.inArray(bh.locator[bh.alternation].toString(),br))){bh.match.mask===a7.match.mask&&(a8.splice(bo,1),bo--),-1===a7.locator[bh.alternation].toString().indexOf(bh.locator[bh.alternation])&&(a7.locator[bh.alternation]=a7.locator[bh.alternation]+","+bh.locator[bh.alternation],a7.alternation=bh.alternation);break}}}a6=a6.concat(a8)}"string"==typeof bd&&(a6=f.map(a6,function(by,bw){if(isFinite(bw)){var bB,bx=by.alternation,bz=by.locator[bx].toString().split(",");by.locator[bx]=void 0,by.alternation=void 0;for(var bA=0;bA<bz.length;bA++){bB=-1!==f.inArray(bz[bA],br),bB&&(void 0!==by.locator[bx]?(by.locator[bx]+=",",by.locator[bx]+=bz[bA]):by.locator[bx]=parseInt(bz[bA]),by.alternation=bx)}if(void 0!==by.locator[bx]){return by}}})),aP=ba.concat(a6),aQ=aU,aV=aP.length>0}else{bi=a5(a9.matches[bd]||a4.matches[bd],[bd].concat(bt),bs)}if(bi){return !0}}else{if(bi.isQuantifier&&bs!==a4.matches[f.inArray(bi,a4.matches)-1]){for(var bv=bi,bb=a1.length>0?a1.shift():0;bb<(isNaN(bv.quantifier.max)?bb+1:bv.quantifier.max)&&aU>=aQ;bb++){var bg=a4.matches[f.inArray(bv,a4.matches)-1];if(bi=a5(bg,[bb].concat(bt),bg)){if(aX=aP[aP.length-1].match,aX.optionalQuantifier=bb>bv.quantifier.min-1,bp(aX,bg)){if(bb>bv.quantifier.min-1){aV=!0,aQ=aU;break}return !0}return !0}}}else{if(bi=aJ(bi,a1,bt,bs)){return !0}}}}}}else{aQ++}}for(var a2=a1.length>0?a1.shift():0;a2<a4.matches.length;a2++){if(a4.matches[a2].isQuantifier!==!0){var a0=a5(a4.matches[a2],[a2].concat(a3),aZ);if(a0&&aQ===aU){return a0}if(aQ>aU){break}}}}function aR(aZ){var a0=aZ[0]||aZ;return a0.locator.slice()}var aX,aK=aD().maskToken,aQ=aN?aM:0,aY=aN||[0],aP=[],aV=!1,aW=aN?aN.join(""):"";if(aU>-1){if(void 0===aN){for(var aT,aS=aU-1;void 0===(aT=aD().validPositions[aS]||aD().tests[aS])&&aS>-1;){aS--}void 0!==aT&&aS>-1&&(aY=aR(aT),aW=aY.join(""),aT=aT[0]||aT,aQ=aS)}if(aD().tests[aU]&&aD().tests[aU][0].cd===aW){return aD().tests[aU]}for(var aL=aY.shift();aL<aK.length;aL++){var aO=aJ(aK[aL],aY,[aL]);if(aO&&aQ===aU||aQ>aU){break}}}return(0===aP.length||aV)&&aP.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]}),aD().tests[aU]=f.extend(!0,[],aP),aD().tests[aU]}function v(){return void 0===aD()._buffer&&(aD()._buffer=aG(!1,1)),aD()._buffer}function N(aJ){if(void 0===aD().buffer||aJ===!0){if(aJ===!0){for(var aK in aD().tests){void 0===aD().validPositions[aK]&&delete aD().tests[aK]}}aD().buffer=aG(!0,Q(),!0)}return aD().buffer}function y(aM,aK,aJ){var aL;if(aJ=aJ,aM===!0){F(),aM=0,aK=aJ.length}else{for(aL=aM;aK>aL;aL++){delete aD().validPositions[aL],delete aD().tests[aL]}}for(aL=aM;aK>aL;aL++){F(!0),aJ[aL]!==aH.skipOptionalPartCharacter&&ae(aL,aJ[aL],!0,!0)}}function S(aJ,aK){switch(aK.casing){case"upper":aJ=aJ.toUpperCase();break;case"lower":aJ=aJ.toLowerCase()}return aJ}function L(aL,aK){for(var aN=aH.greedy?aK:aK.slice(0,1),aJ=!1,aM=0;aM<aL.length;aM++){if(-1!==f.inArray(aL[aM],aN)){aJ=!0;break}}return aJ}function ae(aN,aX,a0,aU){function aR(a2,a5,a4,a1){var a3=!1;return f.each(aI(a2),function(bf,a8){for(var bd=a8.match,a9=a5?1:0,a7="",bb=bd.cardinality;bb>a9;bb--){a7+=al(a2-(bb-1))}if(a5&&(a7+=a5),N(!0),a3=null!=bd.fn?bd.fn.test(a7,aD(),a2,a4,aH):a5!==bd.def&&a5!==aH.skipOptionalPartCharacter||""===bd.def?!1:{c:bd.placeholder||bd.def,pos:a2},a3!==!1){var ba=void 0!==a3.c?a3.c:a5;ba=ba===aH.skipOptionalPartCharacter&&null===bd.fn?bd.placeholder||bd.def:ba;var a6=a2,be=N();if(void 0!==a3.remove&&(f.isArray(a3.remove)||(a3.remove=[a3.remove]),f.each(a3.remove.sort(function(bh,bg){return bg-bh}),function(bg,bh){t(bh,bh+1,!0)})),void 0!==a3.insert&&(f.isArray(a3.insert)||(a3.insert=[a3.insert]),f.each(a3.insert.sort(function(bh,bg){return bh-bg}),function(bg,bh){ae(bh.pos,bh.c,!1,a1)})),a3.refreshFromBuffer){var bc=a3.refreshFromBuffer;if(a4=!0,y(bc===!0?bc:bc.start,bc.end,be),void 0===a3.pos&&void 0===a3.c){return a3.pos=Q(),!1}if(a6=void 0!==a3.pos?a3.pos:a2,a6!==a2){return a3=f.extend(a3,ae(a6,ba,!0,a1)),!1}}else{if(a3!==!0&&void 0!==a3.pos&&a3.pos!==a2&&(a6=a3.pos,y(a2,a6,N().slice()),a6!==a2)){return a3=f.extend(a3,ae(a6,ba,!0)),!1}}return a3!==!0&&void 0===a3.pos&&void 0===a3.c?!1:(bf>0&&F(!0),X(a6,f.extend({},a8,{input:S(ba,bd)}),a1)||(a3=!1),!1)}}),a3}function aS(a7,bm,bq,bk){for(var ba,bo,a6,a8,bl,a3,a2=f.extend(!0,{},aD().validPositions),a4=f.extend(!0,{},aD().tests),a9=Q();a9>=0&&(a8=aD().validPositions[a9],!a8||void 0===a8.alternation||(ba=a9,bo=aD().validPositions[ba].alternation,M(ba).locator[a8.alternation]===a8.locator[a8.alternation]));a9--){}if(void 0!==bo){ba=parseInt(ba);for(var be in aD().validPositions){if(be=parseInt(be),a8=aD().validPositions[be],be>=ba&&void 0!==a8.alternation){var bn;0===ba?(bn=[],f.each(aD().tests[ba],function(br,bs){void 0!==bs.locator[bo]&&(bn=bn.concat(bs.locator[bo].toString().split(",")))})):bn=aD().validPositions[ba].locator[bo].toString().split(",");var bg=void 0!==a8.locator[bo]?a8.locator[bo]:bn[0];bg.length>0&&(bg=bg.split(",")[0]);for(var bd=0;bd<bn.length;bd++){var bj=[],bi=0,bh=0;if(bg<bn[bd]){for(var a5,bp,bf=be;bf>=0;bf--){if(a5=aD().validPositions[bf],void 0!==a5){var a1=U(bf,bn[bd]);aD().validPositions[bf].match.def!==a1.match.def&&(bj.push(aD().validPositions[bf].input),aD().validPositions[bf]=a1,aD().validPositions[bf].input=ah(bf),null===aD().validPositions[bf].match.fn&&bh++,a5=a1),bp=a5.locator[bo],a5.locator[bo]=parseInt(bn[bd]);break}}if(bg!==a5.locator[bo]){for(bl=be+1;bl<Q(void 0,!0)+1;bl++){a3=aD().validPositions[bl],a3&&null!=a3.match.fn?bj.push(a3.input):a7>bl&&bi++,delete aD().validPositions[bl],delete aD().tests[bl]}for(F(!0),aH.keepStatic=!aH.keepStatic,a6=!0;bj.length>0;){var bc=bj.shift();if(bc!==aH.skipOptionalPartCharacter&&!(a6=ae(Q(void 0,!0)+1,bc,!1,bk))){break}}if(a5.alternation=bo,a5.locator[bo]=bp,a6){var bb=Q(a7)+1;for(bl=be+1;bl<Q()+1;bl++){a3=aD().validPositions[bl],(void 0===a3||null==a3.match.fn)&&a7>bl&&bh++}a7+=bh-bi,a6=ae(a7>bb?bb:a7,bm,bq,bk)}if(aH.keepStatic=!aH.keepStatic,a6){return a6}F(),aD().validPositions=f.extend(!0,{},a2),aD().tests=f.extend(!0,{},a4)}}}break}}}return !1}function aK(a5,a7){for(var a2=aD().validPositions[a7],a6=a2.locator,a9=a6.length,a1=a5;a7>a1;a1++){if(void 0===aD().validPositions[a1]&&!O(a1,!0)){var a3=aI(a1),a4=a3[0],a8=-1;f.each(a3,function(bb,ba){for(var bc=0;a9>bc&&(void 0!==ba.locator[bc]&&L(ba.locator[bc].toString().split(","),a6[bc].toString().split(",")));bc++){bc>a8&&(a8=bc,a4=ba)}}),X(a1,f.extend({},a4,{input:a4.match.placeholder||a4.match.def}),!0)}}}a0=a0===!0;for(var aT=N(),aJ=aN-1;aJ>-1&&!aD().validPositions[aJ];aJ--){}for(aJ++;aN>aJ;aJ++){void 0===aD().validPositions[aJ]&&((!O(aJ)||aT[aJ]!==ah(aJ))&&aI(aJ).length>1||aT[aJ]===aH.radixPoint||"0"===aT[aJ]&&f.inArray(aH.radixPoint,aT)<aJ)&&aR(aJ,aT[aJ],!0,aU)}var aV=aN,aQ=!1,aP=f.extend(!0,{},aD().validPositions);if(aV<P()&&(aQ=aR(aV,aX,a0,aU),(!a0||aU===!0)&&aQ===!1)){var aW=aD().validPositions[aV];if(!aW||null!==aW.match.fn||aW.match.def!==aX&&aX!==aH.skipOptionalPartCharacter){if((aH.insertMode||void 0===aD().validPositions[o(aV)])&&!O(aV,!0)){var aO=M(aV).match,aO=aO.placeholder||aO.def;aR(aV,aO,a0,aU);for(var aZ=aV+1,aY=o(aV);aY>=aZ;aZ++){if(aQ=aR(aZ,aX,a0,aU),aQ!==!1){aK(aV,aZ),aV=aZ;break}}}}else{aQ={caret:o(aV)}}}if(aQ===!1&&aH.keepStatic&&(aQ=aS(aN,aX,a0,aU)),aQ===!0&&(aQ={pos:aV}),f.isFunction(aH.postValidation)&&aQ!==!1&&!a0&&aU!==!0){var aM=aH.postValidation(N(!0),aQ,aH);if(aM){if(aM.refreshFromBuffer){var aL=aM.refreshFromBuffer;y(aL===!0?aL:aL.start,aL.end,aM.buffer),F(!0),aQ=aM}}else{F(!0),aD().validPositions=f.extend(!0,{},aP),aQ=!1}}return aQ}function O(aM,aJ){var aL;if(aJ?(aL=M(aM).match,""==aL.def&&(aL=I(aM))):aL=I(aM),null!=aL.fn){return aL.fn}if(aJ!==!0&&aM>-1&&!aH.keepStatic&&void 0===aD().validPositions[aM]){var aK=aI(aM);return aK.length>2}return !1}function P(){var aO;s=void 0!==q?q.maxLength:void 0,-1===s&&(s=void 0);var aN,aM=Q(),aJ=aD().validPositions[aM],aL=void 0!==aJ?aJ.locator.slice():void 0;for(aN=aM+1;void 0===aJ||null!==aJ.match.fn||null===aJ.match.fn&&""!==aJ.match.def;aN++){aJ=M(aN,aL,aN-1),aL=aJ.locator.slice()}var aK=I(aN-1);return aO=""!==aK.def?aN:aN-1,void 0===s||s>aO?aO:s}function o(aM,aL){var aK=P();if(aM>=aK){return aK}for(var aJ=aM;++aJ<aK&&(aL===!0&&(I(aJ).newBlockMarker!==!0||!O(aJ))||aL!==!0&&!O(aJ)&&(aH.nojumps!==!0||aH.nojumpsThreshold>aJ));){}return aJ}function x(aL,aK){var aJ=aL;if(0>=aJ){return 0}for(;--aJ>0&&(aK===!0&&I(aJ).newBlockMarker!==!0||aK!==!0&&!O(aJ));){}return aJ}function al(aJ){return void 0===aD().validPositions[aJ]?ah(aJ):aD().validPositions[aJ].input}function K(aL,aK,aM,aP,aO){if(aP&&f.isFunction(aH.onBeforeWrite)){var aJ=aH.onBeforeWrite(aP,aK,aM,aH);if(aJ){if(aJ.refreshFromBuffer){var aN=aJ.refreshFromBuffer;y(aN===!0?aN:aN.start,aN.end,aJ.buffer||aK),aK=N(!0)}void 0!==aM&&(aM=void 0!==aJ.caret?aJ.caret:aM)}}aL.inputmask._valueSet(aK.join("")),void 0===aM||void 0!==aP&&"blur"===aP.type||E(aL,aM),aO===!0&&(J=!0,f(aL).trigger("input"))}function ah(aO,aN){if(aN=aN||I(aO),void 0!==aN.placeholder){return aN.placeholder}if(null===aN.fn){if(aO>-1&&!aH.keepStatic&&void 0===aD().validPositions[aO]){var aL,aK=aI(aO),aM=0;if(aK.length>2){for(var aJ=0;aJ<aK.length;aJ++){if(aK[aJ].match.optionality!==!0&&aK[aJ].match.optionalQuantifier!==!0&&(null===aK[aJ].match.fn||void 0===aL||aK[aJ].match.fn.test(aL.match.def,aD(),aO,!0,aH)!==!1)&&(aM++,null===aK[aJ].match.fn&&(aL=aK[aJ]),aM>1)){return aH.placeholder.charAt(aO%aH.placeholder.length)}}}}return aN.def}return aH.placeholder.charAt(aO%aH.placeholder.length)}function Y(aQ,aP,aR,aO){function aS(){var aV=!1,aW=v().slice(aK,o(aK)).join("").indexOf(aM);if(-1!==aW&&!O(aK)){aV=!0;for(var aU=v().slice(aK,aK+aW),aT=0;aT<aU.length;aT++){if(" "!==aU[aT]){aV=!1;break}}}return aV}var aJ=aO.slice(),aM="",aK=0;if(F(),aD().p=o(-1),!aR){if(aH.autoUnmask!==!0){var aN=v().slice(0,o(-1)).join(""),aL=aJ.join("").match(new RegExp("^"+e.escapeRegex(aN),"g"));aL&&aL.length>0&&(aJ.splice(0,aL.length*aN.length),aK=o(aK))}else{aK=o(aK)}}f.each(aJ,function(aV,aT){if(void 0!==aT){var aU=new f.Event("keypress");aU.which=aT.charCodeAt(0),aM+=aT;var aZ=Q(void 0,!0),aX=aD().validPositions[aZ],aW=M(aZ+1,aX?aX.locator.slice():void 0,aZ);if(!aS()||aR||aH.autoUnmask){var aY=aR?aV:null==aW.match.fn&&aW.match.optionality&&aZ+1<aD().p?aZ+1:aD().p;ar.call(aQ,aU,!0,!1,aR,aY),aK=aY+1,aM=""}else{ar.call(aQ,aU,!0,!1,!0,aZ+1)}}}),aP&&K(aQ,N(),document.activeElement===aQ?o(Q(0)):void 0,new f.Event("checkval"))}function az(aJ){if(aJ&&void 0===aJ.inputmask){return aJ.value}var aM=[],aO=aD().validPositions;for(var aN in aO){aO[aN].match&&null!=aO[aN].match.fn&&aM.push(aO[aN].input)}var aK=0===aM.length?null:(ac?aM.reverse():aM).join("");if(null!==aK){var aL=(ac?N().slice().reverse():N()).join("");f.isFunction(aH.onUnMask)&&(aK=aH.onUnMask(aL,aK,aH)||aK)}return aK}function E(aR,aL,aN,aJ){function aO(aT){if(aJ!==!0&&ac&&"number"==typeof aT&&(!aH.greedy||""!==aH.placeholder)){var aS=N().join("").length;aT=aS-aT}return aT}var aQ;if("number"!=typeof aL){return aR.setSelectionRange?(aL=aR.selectionStart,aN=aR.selectionEnd):window.getSelection?(aQ=window.getSelection().getRangeAt(0),(aQ.commonAncestorContainer.parentNode===aR||aQ.commonAncestorContainer===aR)&&(aL=aQ.startOffset,aN=aQ.endOffset)):document.selection&&document.selection.createRange&&(aQ=document.selection.createRange(),aL=0-aQ.duplicate().moveStart("character",-100000),aN=aL+aQ.text.length),{begin:aO(aL),end:aO(aN)}}aL=aO(aL),aN=aO(aN),aN="number"==typeof aN?aN:aL;var aP=parseInt(((aR.ownerDocument.defaultView||window).getComputedStyle?(aR.ownerDocument.defaultView||window).getComputedStyle(aR,null):aR.currentStyle).fontSize)*aN;if(aR.scrollLeft=aP>aR.scrollWidth?aP:0,b||aH.insertMode!==!1||aL!==aN||aN++,aR.setSelectionRange){aR.selectionStart=aL,aR.selectionEnd=aN}else{if(window.getSelection){if(aQ=document.createRange(),void 0===aR.firstChild||null===aR.firstChild){var aM=document.createTextNode("");aR.appendChild(aM)}aQ.setStart(aR.firstChild,aL<aR.inputmask._valueGet().length?aL:aR.inputmask._valueGet().length),aQ.setEnd(aR.firstChild,aN<aR.inputmask._valueGet().length?aN:aR.inputmask._valueGet().length),aQ.collapse(!0);var aK=window.getSelection();aK.removeAllRanges(),aK.addRange(aQ)}else{aR.createTextRange&&(aQ=aR.createTextRange(),aQ.collapse(!0),aQ.moveEnd("character",aN),aQ.moveStart("character",aL),aQ.select())}}}function ab(aN){var aR,aP,aL=N(),aK=aL.length,aQ=Q(),aO={},aS=aD().validPositions[aQ],aM=void 0!==aS?aS.locator.slice():void 0;for(aR=aQ+1;aR<aL.length;aR++){aP=M(aR,aM,aR-1),aM=aP.locator.slice(),aO[aR]=f.extend(!0,{},aP)}var aJ=aS&&void 0!==aS.alternation?aS.locator[aS.alternation]:void 0;for(aR=aK-1;aR>aQ&&(aP=aO[aR],(aP.match.optionality||aP.match.optionalQuantifier||aJ&&(aJ!==aO[aR].locator[aS.alternation]&&null!=aP.match.fn||null===aP.match.fn&&aP.locator[aS.alternation]&&L(aP.locator[aS.alternation].toString().split(","),aJ.toString().split(","))&&""!==aI(aR)[0].def))&&aL[aR]===ah(aR,aP.match));aR--){aK--}return aN?{l:aK,def:aO[aK]?aO[aK].match:void 0}:aK}function D(aK){for(var aL=ab(),aJ=aK.length-1;aJ>aL&&!O(aJ);aJ--){}return aK.splice(aL,aJ+1-aL),aK}function r(aK){if(f.isFunction(aH.isComplete)){return aH.isComplete(aK,aH)}if("*"===aH.repeat){return void 0}var aJ=!1,aL=ab(!0),aN=x(aL.l);if(void 0===aL.def||aL.def.newBlockMarker||aL.def.optionality||aL.def.optionalQuantifier){aJ=!0;for(var aM=0;aN>=aM;aM++){var aO=M(aM).match;if(null!==aO.fn&&void 0===aD().validPositions[aM]&&aO.optionality!==!0&&aO.optionalQuantifier!==!0||null===aO.fn&&aK[aM]!==ah(aM,aO)){aJ=!1;break}}}return aJ}function G(aK,aJ){return ac?aK-aJ>1||aK-aJ===1&&aH.insertMode:aJ-aK>1||aJ-aK===1&&aH.insertMode}function B(aO){function aL(aR){if(f.valHooks&&(void 0===f.valHooks[aR]||f.valHooks[aR].inputmaskpatch!==!0)){var aQ=f.valHooks[aR]&&f.valHooks[aR].get?f.valHooks[aR].get:function(aT){return aT.value},aS=f.valHooks[aR]&&f.valHooks[aR].set?f.valHooks[aR].set:function(aT,aU){return aT.value=aU,aT};f.valHooks[aR]={get:function(aV){if(aV.inputmask){if(aV.inputmask.opts.autoUnmask){return aV.inputmask.unmaskedvalue()}var aT=aQ(aV),aW=aV.inputmask.maskset,aU=aW._buffer;return aU=aU?aU.join(""):"",aT!==aU?aT:""}return aQ(aV)},set:function(aV,aW){var aT,aU=f(aV);return aT=aS(aV,aW),aV.inputmask&&aU.trigger("setvalue"),aT},inputmaskpatch:!0}}}function aJ(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():aN.call(this)!==v().join("")?document.activeElement===this&&aH.clearMaskOnLostFocus?(ac?D(N().slice()).reverse():D(N().slice())).join(""):aN.call(this):"":aN.call(this)}function aP(aQ){aK.call(this,aQ),this.inputmask&&f(this).trigger("setvalue")}function aM(aQ){aa.on(aQ,"mouseenter",function(aS){var aU=f(this),aR=this,aT=aR.inputmask._valueGet();aT!==N().join("")&&Q()>0&&aU.trigger("setvalue")})}var aN,aK;aO.inputmask.__valueGet||(Object.getOwnPropertyDescriptor&&void 0===aO.value?(aN=function(){return this.textContent},aK=function(aQ){this.textContent=aQ},Object.defineProperty(aO,"value",{get:aJ,set:aP})):document.__lookupGetter__&&aO.__lookupGetter__("value")?(aN=aO.__lookupGetter__("value"),aK=aO.__lookupSetter__("value"),aO.__defineGetter__("value",aJ),aO.__defineSetter__("value",aP)):(aN=function(){return aO.value},aK=function(aQ){aO.value=aQ},aL(aO.type),aM(aO)),aO.inputmask.__valueGet=aN,aO.inputmask._valueGet=function(aQ){return ac&&aQ!==!0?aN.call(this.el).split("").reverse().join(""):aN.call(this.el)},aO.inputmask.__valueSet=aK,aO.inputmask._valueSet=function(aQ,aR){aK.call(this.el,null===aQ||void 0===aQ?"":aR!==!0&&ac?aQ.split("").reverse().join(""):aQ)})}function p(aL,aK,aP,aJ){function aN(){if(aH.keepStatic){F(!0);var aS,aR=[],aT=f.extend(!0,{},aD().validPositions);for(aS=Q();aS>=0;aS--){var aU=aD().validPositions[aS];if(aU&&(null!=aU.match.fn&&aR.push(aU.input),delete aD().validPositions[aS],void 0!==aU.alternation&&aU.locator[aU.alternation]===M(aS).locator[aU.alternation])){break}}if(aS>-1){for(;aR.length>0;){aD().p=o(Q());var aQ=new f.Event("keypress");aQ.which=aR.pop().charCodeAt(0),ar.call(aL,aQ,!0,!1,!1,aD().p)}}else{aD().validPositions=f.extend(!0,{},aT)}}}if((aH.numericInput||ac)&&(aK===e.keyCode.BACKSPACE?aK=e.keyCode.DELETE:aK===e.keyCode.DELETE&&(aK=e.keyCode.BACKSPACE),ac)){var aM=aP.end;aP.end=aP.begin,aP.begin=aM}aK===e.keyCode.BACKSPACE&&(aP.end-aP.begin<1||aH.insertMode===!1)?(aP.begin=x(aP.begin),void 0===aD().validPositions[aP.begin]||aD().validPositions[aP.begin].input!==aH.groupSeparator&&aD().validPositions[aP.begin].input!==aH.radixPoint||aP.begin--):aK===e.keyCode.DELETE&&aP.begin===aP.end&&(aP.end=O(aP.end)?aP.end+1:o(aP.end)+1,void 0===aD().validPositions[aP.begin]||aD().validPositions[aP.begin].input!==aH.groupSeparator&&aD().validPositions[aP.begin].input!==aH.radixPoint||aP.end++),t(aP.begin,aP.end,!1,aJ),aJ!==!0&&aN();var aO=Q(aP.begin);aO<aP.begin?(-1===aO&&F(),aD().p=o(aO)):aJ!==!0&&(aD().p=aP.begin)}function T(aM){var aK=this,aO=f(aK),aJ=aM.keyCode,aN=E(aK);if(aJ===e.keyCode.BACKSPACE||aJ===e.keyCode.DELETE||j&&127===aJ||aM.ctrlKey&&88===aJ&&!k("cut")){aM.preventDefault(),88===aJ&&(u=N().join("")),p(aK,aJ,aN),K(aK,N(),aD().p,aM,u!==N().join("")),aK.inputmask._valueGet()===v().join("")?aO.trigger("cleared"):r(N())===!0&&aO.trigger("complete"),aH.showTooltip&&(aK.title=aH.tooltip||aD().mask)}else{if(aJ===e.keyCode.END||aJ===e.keyCode.PAGE_DOWN){aM.preventDefault();var aL=o(Q());aH.insertMode||aL!==P()||aM.shiftKey||aL--,E(aK,aM.shiftKey?aN.begin:aL,aL,!0)}else{aJ===e.keyCode.HOME&&!aM.shiftKey||aJ===e.keyCode.PAGE_UP?(aM.preventDefault(),E(aK,0,aM.shiftKey?aN.begin:0,!0)):(aH.undoOnEscape&&aJ===e.keyCode.ESCAPE||90===aJ&&aM.ctrlKey)&&aM.altKey!==!0?(Y(aK,!0,!1,u.split("")),aO.trigger("click")):aJ!==e.keyCode.INSERT||aM.shiftKey||aM.ctrlKey?aH.tabThrough===!0&&aJ===e.keyCode.TAB?(aM.shiftKey===!0?(null===I(aN.begin).fn&&(aN.begin=o(aN.begin)),aN.end=x(aN.begin,!0),aN.begin=x(aN.end,!0)):(aN.begin=o(aN.begin,!0),aN.end=o(aN.begin,!0),aN.end<P()&&aN.end--),aN.begin<P()&&(aM.preventDefault(),E(aK,aN.begin,aN.end))):aH.insertMode!==!1||aM.shiftKey||(aJ===e.keyCode.RIGHT?setTimeout(function(){var aP=E(aK);E(aK,aP.begin)},0):aJ===e.keyCode.LEFT&&setTimeout(function(){var aP=E(aK);E(aK,ac?aP.begin+1:aP.begin-1)},0)):(aH.insertMode=!aH.insertMode,E(aK,aH.insertMode||aN.begin!==P()?aN.begin:aN.begin-1))}}aH.onKeyDown.call(this,aM,N(),E(aK).begin,aH),ax=-1!==f.inArray(aJ,aH.ignorables)}function ar(aY,aN,aJ,a1,aR){var aT=this,aK=f(aT),aX=aY.which||aY.charCode||aY.keyCode;if(!(aN===!0||aY.ctrlKey&&aY.altKey)&&(aY.ctrlKey||aY.metaKey||ax)){return aX===e.keyCode.ENTER&&u!==N().join("")&&(u=N().join(""),setTimeout(function(){aK.trigger("change")},0)),!0}if(aX){46===aX&&aY.shiftKey===!1&&","===aH.radixPoint&&(aX=44);var aP,aQ=aN?{begin:aR,end:aR}:E(aT),aZ=String.fromCharCode(aX),aL=G(aQ.begin,aQ.end);aL&&(aD().undoPositions=f.extend(!0,{},aD().validPositions),p(aT,e.keyCode.DELETE,aQ,!0),aQ.begin=aD().p,aH.insertMode||(aH.insertMode=!aH.insertMode,X(aQ.begin,a1),aH.insertMode=!aH.insertMode),aL=!aH.multi),aD().writeOutBuffer=!0;var aV=ac&&!aL?aQ.end:aQ.begin,aM=ae(aV,aZ,a1);if(aM!==!1){if(aM!==!0&&(aV=void 0!==aM.pos?aM.pos:aV,aZ=void 0!==aM.c?aM.c:aZ),F(!0),void 0!==aM.caret){aP=aM.caret}else{var a0=aD().validPositions;aP=!aH.keepStatic&&(void 0!==a0[aV+1]&&aI(aV+1,a0[aV].locator.slice(),aV).length>1||void 0!==a0[aV].alternation)?aV+1:o(aV)}aD().p=aP}if(aJ!==!1){var aU=this;if(setTimeout(function(){aH.onKeyValidation.call(aU,aX,aM,aH)},0),aD().writeOutBuffer&&aM!==!1){var aW=N();K(aT,aW,aH.numericInput&&void 0===aM.caret?x(aP):aP,aY,aN!==!0),aN!==!0&&setTimeout(function(){r(aW)===!0&&aK.trigger("complete")},0)}else{aL&&(aD().buffer=void 0,aD().validPositions=aD().undoPositions)}}else{aL&&(aD().buffer=void 0,aD().validPositions=aD().undoPositions)}if(aH.showTooltip&&(aT.title=aH.tooltip||aD().mask),aN&&f.isFunction(aH.onBeforeWrite)){var aS=aH.onBeforeWrite(aY,N(),aP,aH);if(aS&&aS.refreshFromBuffer){var aO=aS.refreshFromBuffer;y(aO===!0?aO:aO.start,aO.end,aS.buffer),F(!0),aS.caret&&(aD().p=aS.caret)}}if(aY.preventDefault(),aN){return aM}}}function aC(aN){var aR=this,aP=aN.originalEvent||aN,aO=f(aR),aJ=aR.inputmask._valueGet(!0),aM=E(aR),aL=aJ.substr(0,aM.begin),aK=aJ.substr(aM.end,aJ.length);aL===v().slice(0,aM.begin).join("")&&(aL=""),aK===v().slice(aM.end).join("")&&(aK=""),window.clipboardData&&window.clipboardData.getData?aJ=aL+window.clipboardData.getData("Text")+aK:aP.clipboardData&&aP.clipboardData.getData&&(aJ=aL+aP.clipboardData.getData("text/plain")+aK);var aQ=aJ;if(f.isFunction(aH.onBeforePaste)){if(aQ=aH.onBeforePaste(aJ,aH),aQ===!1){return aN.preventDefault(),!1}aQ||(aQ=aJ)}return Y(aR,!1,!1,ac?aQ.split("").reverse():aQ.toString().split("")),K(aR,N(),void 0,aN,!0),aO.trigger("click"),r(N())===!0&&aO.trigger("complete"),!1}function n(aP){var aL=this,aJ=aL.inputmask._valueGet();if(N().join("")!==aJ){var aN=E(aL);if(aJ=aJ.replace(new RegExp("("+e.escapeRegex(v().join(""))+")*"),""),a){var aO=aJ.replace(N().join(""),"");if(1===aO.length){var aK=new f.Event("keypress");return aK.which=aO.charCodeAt(0),ar.call(aL,aK,!0,!0,!1,aD().validPositions[aN.begin-1]?aN.begin:aN.begin-1),!1}}if(aN.begin>aJ.length&&(E(aL,aJ.length),aN=E(aL)),N().length-aJ.length!==1||aJ.charAt(aN.begin)===N()[aN.begin]||aJ.charAt(aN.begin+1)===N()[aN.begin]||O(aN.begin)){for(var aQ=Q()+1,aM=N().slice(aQ).join("");null===aJ.match(e.escapeRegex(aM)+"$");){aM=aM.slice(1)}aJ=aJ.replace(aM,""),aJ=aJ.split(""),Y(aL,!0,!1,aJ),r(N())===!0&&f(aL).trigger("complete")}else{aP.keyCode=e.keyCode.BACKSPACE,T.call(aL,aP)}aP.preventDefault()}}function V(aK){var aJ=aK.originalEvent||aK;u=N().join(""),""===m||0!==aJ.data.indexOf(m)}function at(aP){var aK=this,aN=aP.originalEvent||aP,aO=N().join("");0===aN.data.indexOf(m)&&(F(),aD().p=o(-1));for(var aM=aN.data,aL=0;aL<aM.length;aL++){var aJ=new f.Event("keypress");aJ.which=aM.charCodeAt(aL),am=!1,ax=!1,ar.call(aK,aJ,!0,!1,!1,aD().p)}aO!==N().join("")&&setTimeout(function(){var aQ=aD().p;K(aK,N(),aH.numericInput?x(aQ):aQ)},0),m=aN.data}function W(aJ){}function z(aL){var aJ=this,aK=aJ.inputmask._valueGet();Y(aJ,!0,!1,(f.isFunction(aH.onBeforeMask)?aH.onBeforeMask(aK,aH)||aK:aK).split("")),u=N().join(""),(aH.clearMaskOnLostFocus||aH.clearIncomplete)&&aJ.inputmask._valueGet()===v().join("")&&aJ.inputmask._valueSet("")}function ai(aK){var aJ=this,aL=aJ.inputmask._valueGet();aH.showMaskOnFocus&&(!aH.showMaskOnHover||aH.showMaskOnHover&&""===aL)?aJ.inputmask._valueGet()!==N().join("")&&K(aJ,N(),o(Q())):an===!1&&E(aJ,o(Q())),aH.positionCaretOnTab===!0&&setTimeout(function(){E(aJ,o(Q()))},0),u=N().join("")}function aj(aL){var aK=this;if(an=!1,aH.clearMaskOnLostFocus&&document.activeElement!==aK){var aJ=N().slice(),aM=aK.inputmask._valueGet();aM!==aK.getAttribute("placeholder")&&""!==aM&&(-1===Q()&&aM===v().join("")?aJ=[]:D(aJ),K(aK,aJ))}}function R(aP){function aO(aS){if(aH.radixFocus&&""!==aH.radixPoint){var aT=aD().validPositions;if(void 0===aT[aS]||aT[aS].input===ah(aS)){if(aS<o(-1)){return !0}var aQ=f.inArray(aH.radixPoint,N());if(-1!==aQ){for(var aR in aT){if(aR>aQ&&aT[aR].input!==ah(aR)){return !1}}return !0}}}return !1}var aL=this;if(document.activeElement===aL){var aN=E(aL);if(aN.begin===aN.end){if(aO(aN.begin)){E(aL,aH.numericInput?o(f.inArray(aH.radixPoint,N())):f.inArray(aH.radixPoint,N()))}else{var aM=aN.begin,aK=Q(aM),aJ=o(aK);aJ>aM?E(aL,O(aM)||O(aM-1)?aM:o(aM)):((N()[aJ]!==ah(aJ)||!O(aJ,!0)&&I(aJ).def===ah(aJ))&&(aJ=o(aJ)),E(aL,aJ))}}}}function aB(aK){var aJ=this;setTimeout(function(){E(aJ,0,o(Q()))},0)}function av(aM){var aJ=this,aP=f(aJ),aO=E(aJ),aL=aM.originalEvent||aM,aN=window.clipboardData||aL.clipboardData,aK=ac?N().slice(aO.end,aO.begin):N().slice(aO.begin,aO.end);aN.setData("text",ac?aK.reverse().join(""):aK.join("")),document.execCommand&&document.execCommand("copy"),p(aJ,e.keyCode.DELETE,aO),K(aJ,N(),aD().p,aM,u!==N().join("")),aJ.inputmask._valueGet()===v().join("")&&aP.trigger("cleared"),aH.showTooltip&&(aJ.title=aH.tooltip||aD().mask)}function af(aL){var aN=f(this),aK=this;if(aK.inputmask){var aM=aK.inputmask._valueGet(),aJ=N().slice();u!==aJ.join("")&&setTimeout(function(){aN.trigger("change"),u=aJ.join("")},0),""!==aM&&(aH.clearMaskOnLostFocus&&(-1===Q()&&aM===v().join("")?aJ=[]:D(aJ)),r(aJ)===!1&&(setTimeout(function(){aN.trigger("incomplete")},0),aH.clearIncomplete&&(F(),aJ=aH.clearMaskOnLostFocus?[]:v().slice())),K(aK,aJ,void 0,aL))}}function w(aK){var aJ=this;an=!0,document.activeElement!==aJ&&aH.showMaskOnHover&&aJ.inputmask._valueGet()!==N().join("")&&K(aJ,N())}function au(aJ){u!==N().join("")&&aE.trigger("change"),aH.clearMaskOnLostFocus&&-1===Q()&&q.inputmask._valueGet&&q.inputmask._valueGet()===v().join("")&&q.inputmask._valueSet(""),aH.removeMaskOnSubmit&&(q.inputmask._valueSet(q.inputmask.unmaskedvalue(),!0),setTimeout(function(){K(q,N())},0))}function aq(aJ){setTimeout(function(){aE.trigger("setvalue")},0)}function Z(aL){if(q=aL,aE=f(q),aH.showTooltip&&(q.title=aH.tooltip||aD().mask),("rtl"===q.dir||aH.rightAlign)&&(q.style.textAlign="right"),("rtl"===q.dir||aH.numericInput)&&(q.dir="ltr",q.removeAttribute("dir"),q.inputmask.isRTL=!0,ac=!0),aa.off(q),B(q),i(q,aH)&&(aa.on(q,"submit",au),aa.on(q,"reset",aq),aa.on(q,"mouseenter",w),aa.on(q,"blur",af),aa.on(q,"focus",ai),aa.on(q,"mouseleave",aj),aa.on(q,"click",R),aa.on(q,"dblclick",aB),aa.on(q,"paste",aC),aa.on(q,"dragdrop",aC),aa.on(q,"drop",aC),aa.on(q,"cut",av),aa.on(q,"complete",aH.oncomplete),aa.on(q,"incomplete",aH.onincomplete),aa.on(q,"cleared",aH.oncleared),aa.on(q,"keydown",T),aa.on(q,"keypress",ar),aa.on(q,"input",n),b||(aa.on(q,"compositionstart",V),aa.on(q,"compositionupdate",at),aa.on(q,"compositionend",W))),aa.on(q,"setvalue",z),""!==q.inputmask._valueGet()||aH.clearMaskOnLostFocus===!1){var aJ=f.isFunction(aH.onBeforeMask)?aH.onBeforeMask(q.inputmask._valueGet(),aH)||q.inputmask._valueGet():q.inputmask._valueGet();Y(q,!0,!1,aJ.split(""));var aK=N().slice();u=aK.join(""),r(aK)===!1&&aH.clearIncomplete&&F(),aH.clearMaskOnLostFocus&&(aK.join("")===v().join("")?aK=[]:D(aK)),K(q,aK),document.activeElement===q&&E(q,o(Q()))}}var u,m,q,aE,s,ap,ac=!1,am=!1,J=!1,ax=!1,an=!0,ao=!1,aa={on:function(aK,aJ,aL){var aM=function(aP){if(void 0===this.inputmask&&"FORM"!==this.nodeName){var aN=f.data(this,"_inputmask_opts");aN?new e(aN).mask(this):aa.off(this)}else{if("setvalue"===aP.type||!(this.disabled||this.readOnly&&!("keydown"===aP.type&&aP.ctrlKey&&67===aP.keyCode||aH.tabThrough===!1&&aP.keyCode===e.keyCode.TAB))){switch(aP.type){case"input":if(J===!0||ao===!0){return J=ao,aP.preventDefault()}break;case"keydown":am=!1,J=!1,ao=!1;break;case"keypress":if(am===!0){return aP.preventDefault()}am=!0;break;case"compositionstart":ao=!0;break;case"compositionupdate":J=!0;break;case"compositionend":ao=!1;break;case"cut":J=!0;break;case"click":if(a){var aO=this;return setTimeout(function(){aL.apply(aO,arguments)},0),!1}}return aL.apply(this,arguments)}aP.preventDefault()}};aK.inputmask.events[aJ]=aK.inputmask.events[aJ]||[],aK.inputmask.events[aJ].push(aM),-1!==f.inArray(aJ,["submit","reset"])?null!=aK.form&&f(aK.form).on(aJ,aM):f(aK).on(aJ,aM)},off:function(aJ,aL){if(aJ.inputmask&&aJ.inputmask.events){var aK;aL?(aK=[],aK[aL]=aJ.inputmask.events[aL]):aK=aJ.inputmask.events,f.each(aK,function(aM,aO){for(;aO.length>0;){var aN=aO.pop();-1!==f.inArray(aM,["submit","reset"])?null!=aJ.form&&f(aJ.form).off(aM,aN):f(aJ).off(aM,aN)}delete aJ.inputmask.events[aM]})}}};if(void 0!==H){switch(H.action){case"isComplete":return q=H.el,r(N());case"unmaskedvalue":return q=H.el,void 0!==q&&void 0!==q.inputmask?(A=q.inputmask.maskset,aH=q.inputmask.opts,ac=q.inputmask.isRTL):(ap=H.value,aH.numericInput&&(ac=!0),ap=(f.isFunction(aH.onBeforeMask)?aH.onBeforeMask(ap,aH)||ap:ap).split(""),Y(void 0,!1,!1,ac?ap.reverse():ap),f.isFunction(aH.onBeforeWrite)&&aH.onBeforeWrite(void 0,N(),0,aH)),az(q);case"mask":q=H.el,A=q.inputmask.maskset,aH=q.inputmask.opts,ac=q.inputmask.isRTL,u=N().join(""),Z(q);break;case"format":return aH.numericInput&&(ac=!0),ap=(f.isFunction(aH.onBeforeMask)?aH.onBeforeMask(H.value,aH)||H.value:H.value).split(""),Y(void 0,!1,!1,ac?ap.reverse():ap),f.isFunction(aH.onBeforeWrite)&&aH.onBeforeWrite(void 0,N(),0,aH),H.metadata?{value:ac?N().slice().reverse().join(""):N().join(""),metadata:g({action:"getmetadata"},A,aH)}:ac?N().slice().reverse().join(""):N().join("");case"isValid":aH.numericInput&&(ac=!0),H.value?(ap=H.value.split(""),Y(void 0,!1,!0,ac?ap.reverse():ap)):H.value=N().join("");for(var ak=N(),aF=ab(),aw=ak.length-1;aw>aF&&!O(aw);aw--){}return ak.splice(aF,aw+1-aF),r(ak)&&H.value===N().join("");case"getemptymask":return v();case"remove":q=H.el,aE=f(q),A=q.inputmask.maskset,aH=q.inputmask.opts,q.inputmask._valueSet(az(q)),aa.off(q);var ad;Object.getOwnPropertyDescriptor&&(ad=Object.getOwnPropertyDescriptor(q,"value")),ad&&ad.get?q.inputmask.__valueGet&&Object.defineProperty(q,"value",{get:q.inputmask.__valueGet,set:q.inputmask.__valueSet}):document.__lookupGetter__&&q.__lookupGetter__("value")&&q.inputmask.__valueGet&&(q.__defineGetter__("value",q.inputmask.__valueGet),q.__defineSetter__("value",q.inputmask.__valueSet)),q.inputmask=void 0;break;case"getmetadata":if(f.isArray(A.metadata)){for(var ag,aA=Q(),ay=aA;ay>=0;ay--){if(aD().validPositions[ay]&&void 0!==aD().validPositions[ay].alternation){ag=aD().validPositions[ay].alternation;break}}return void 0!==ag?A.metadata[aD().validPositions[aA].locator[ag]]:A.metadata[0]}return A.metadata}}}e.prototype={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:f.noop,onincomplete:f.noop,oncleared:f.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:f.noop,onBeforeMask:null,onBeforePaste:function(m,n){return f.isFunction(n.onBeforeMask)?n.onBeforeMask(m,n):m},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:f.noop,skipOptionalPartCharacter:" ",showTooltip:!1,tooltip:void 0,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",groupSeparator:"",radixFocus:!1,nojumps:!1,nojumpsThreshold:0,keepStatic:null,positionCaretOnTab:!1,tabThrough:!1,supportsInputType:["text","tel","password"],definitions:{"9":{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:null,canClearPosition:f.noop,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1},masksCache:{},mask:function(m){var n=this;return"string"==typeof m&&(m=document.getElementById(m)||document.querySelectorAll(m)),m=m.nodeName?[m]:m,f.each(m,function(p,q){var o=f.extend(!0,{},n.opts);l(q,o,f.extend(!0,{},n.userOptions));var r=d(o,n.noMasksCache);void 0!==r&&(void 0!==q.inputmask&&q.inputmask.remove(),q.inputmask=new e(),q.inputmask.opts=o,q.inputmask.noMasksCache=n.noMasksCache,q.inputmask.userOptions=f.extend(!0,{},n.userOptions),q.inputmask.el=q,q.inputmask.maskset=r,q.inputmask.isRTL=!1,f.data(q,"_inputmask_opts",o),g({action:"mask",el:q}))}),m&&m[0]?m[0].inputmask||this:this},option:function(m){return"string"==typeof m?this.opts[m]:"object"==typeof m?(f.extend(this.opts,m),f.extend(this.userOptions,m),this.el&&(void 0!==m.mask||void 0!==m.alias?this.mask(this.el):(f.data(this.el,"_inputmask_opts",this.opts),g({action:"mask",el:this.el}))),this):void 0},unmaskedvalue:function(m){return g({action:"unmaskedvalue",el:this.el,value:m},this.el&&this.el.inputmask?this.el.inputmask.maskset:d(this.opts,this.noMasksCache),this.opts)},remove:function(){return this.el?(g({action:"remove",el:this.el}),this.el.inputmask=void 0,this.el):void 0},getemptymask:function(){return g({action:"getemptymask"},this.maskset||d(this.opts,this.noMasksCache),this.opts)},hasMaskedValue:function(){return !this.opts.autoUnmask},isComplete:function(){return g({action:"isComplete",el:this.el},this.maskset||d(this.opts,this.noMasksCache),this.opts)},getmetadata:function(){return g({action:"getmetadata"},this.maskset||d(this.opts,this.noMasksCache),this.opts)},isValid:function(m){return g({action:"isValid",value:m},this.maskset||d(this.opts,this.noMasksCache),this.opts)},format:function(n,m){return g({action:"format",value:n,metadata:m},this.maskset||d(this.opts,this.noMasksCache),this.opts)}},e.extendDefaults=function(m){f.extend(!0,e.prototype.defaults,m)},e.extendDefinitions=function(m){f.extend(!0,e.prototype.defaults.definitions,m)},e.extendAliases=function(m){f.extend(!0,e.prototype.defaults.aliases,m)},e.format=function(o,m,n){return e(m).format(o,n)},e.unmask=function(n,m){return e(m).unmaskedvalue(n)},e.isValid=function(n,m){return e(m).isValid(n)},e.remove=function(m){f.each(m,function(n,o){o.inputmask&&o.inputmask.remove()})},e.escapeRegex=function(n){var m=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return n.replace(new RegExp("(\\"+m.join("|\\")+")","gim"),"\\$1")},e.keyCode={ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91};var c=navigator.userAgent,b=/mobile/i.test(c),a=/iemobile/i.test(c),j=/iphone/i.test(c)&&!a;/android.*safari.*/i.test(c)&&!a;return window.Inputmask=e,e}(jQuery),function(b,a){return void 0===b.fn.inputmask&&(b.fn.inputmask=function(e,d){var f,c=this[0];if(d=d||{},"string"==typeof e){switch(e){case"unmaskedvalue":return c&&c.inputmask?c.inputmask.unmaskedvalue():b(c).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return c&&c.inputmask?c.inputmask.getemptymask():"";case"hasMaskedValue":return c&&c.inputmask?c.inputmask.hasMaskedValue():!1;case"isComplete":return c&&c.inputmask?c.inputmask.isComplete():!0;case"getmetadata":return c&&c.inputmask?c.inputmask.getmetadata():void 0;case"setvalue":b(c).val(d),c&&void 0!==c.inputmask&&b(c).triggerHandler("setvalue");break;case"option":if("string"!=typeof d){return this.each(function(){return void 0!==this.inputmask?this.inputmask.option(d):void 0})}if(c&&void 0!==c.inputmask){return c.inputmask.option(d)}break;default:return d.alias=e,f=new a(d),this.each(function(){f.mask(this)})}}else{if("object"==typeof e){return f=new a(e),void 0===e.mask&&void 0===e.alias?this.each(function(){return void 0!==this.inputmask?this.inputmask.option(e):void f.mask(this)}):this.each(function(){f.mask(this)})}if(void 0===e){return this.each(function(){f=new a(d),f.mask(this)})}}}),b.fn.inputmask}(jQuery,Inputmask),function(b,a){return a.extendDefinitions({h:{validator:"[01][0-9]|2[0-3]",cardinality:2,prevalidator:[{validator:"[0-2]",cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:"[0-5]",cardinality:1}]},d:{validator:"0[1-9]|[12][0-9]|3[01]",cardinality:2,prevalidator:[{validator:"[0-3]",cardinality:1}]},m:{validator:"0[1-9]|1[012]",cardinality:2,prevalidator:[{validator:"[01]",cardinality:1}]},y:{validator:"(19|20)\\d{2}",cardinality:4,prevalidator:[{validator:"[12]",cardinality:1},{validator:"(19|20)",cardinality:2},{validator:"(19|20)\\d",cardinality:3}]}}),a.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(d){var c=a.escapeRegex.call(this,d);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+c+"[01])")},val2:function(d){var c=a.escapeRegex.call(this,d);return new RegExp("((0[1-9]|[12][0-9])"+c+"(0[1-9]|1[012]))|(30"+c+"(0[13-9]|1[012]))|(31"+c+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(f,c,d){if(isNaN(f)){return !1}var e=parseInt(f.concat(c.toString().slice(f.length))),g=parseInt(f.concat(d.toString().slice(f.length)));return(isNaN(e)?!1:e>=c&&d>=e)||(isNaN(g)?!1:g>=c&&d>=g)},determinebaseyear:function(d,f,h){var g=new Date().getFullYear();if(d>g){return d}if(g>f){for(var c=f.toString().slice(0,2),i=f.toString().slice(2,4);c+h>f;){c--}var e=c+i;return d>e?d:e}return g},onKeyDown:function(h,c,f,g){var i=b(this);if(h.ctrlKey&&h.keyCode===a.keyCode.RIGHT){var d=new Date();i.val(d.getDate().toString()+(d.getMonth()+1).toString()+d.getFullYear().toString()),i.trigger("setvalue")}},getFrontValue:function(d,c,h){for(var j=0,g=0,f=0;f<d.length&&"2"!==d.charAt(f);f++){var e=h.definitions[d.charAt(f)];e?(j+=g,g=e.cardinality):g++}return c.join("").substr(j,g)},definitions:{"1":{validator:function(d,g,h,c,e){var f=e.regex.val1.test(d);return c||f||d.charAt(1)!==e.separator&&-1==="-./".indexOf(d.charAt(1))||!(f=e.regex.val1.test("0"+d.charAt(0)))?f:(g.buffer[h-1]="0",{refreshFromBuffer:{start:h-1,end:h},pos:h,c:d.charAt(0)})},cardinality:2,prevalidator:[{validator:function(d,h,i,c,f){var e=d;isNaN(h.buffer[i+1])||(e+=h.buffer[i+1]);var g=1===e.length?f.regex.val1pre.test(e):f.regex.val1.test(e);if(!c&&!g){if(g=f.regex.val1.test(d+"0")){return h.buffer[i]=d,h.buffer[++i]="0",{pos:i,c:"0"}}if(g=f.regex.val1.test("0"+d)){return h.buffer[i]="0",i++,{pos:i}}}return g},cardinality:1}]},"2":{validator:function(e,i,g,h,c){var d=c.getFrontValue(i.mask,i.buffer,c);-1!==d.indexOf(c.placeholder[0])&&(d="01"+c.separator);var k=c.regex.val2(c.separator).test(d+e);if(!h&&!k&&(e.charAt(1)===c.separator||-1!=="-./".indexOf(e.charAt(1)))&&(k=c.regex.val2(c.separator).test(d+"0"+e.charAt(0)))){return i.buffer[g-1]="0",{refreshFromBuffer:{start:g-1,end:g},pos:g,c:e.charAt(0)}}if(c.mask.indexOf("2")===c.mask.length-1&&k){var j=i.buffer.join("").substr(4,4)+e;if(j!==c.leapday){return !0}var f=parseInt(i.buffer.join("").substr(0,4),10);return f%4===0?f%100===0?f%400===0?!0:!1:!0:!1}return k},cardinality:2,prevalidator:[{validator:function(d,h,i,c,e){isNaN(h.buffer[i+1])||(d+=h.buffer[i+1]);var g=e.getFrontValue(h.mask,h.buffer,e);-1!==g.indexOf(e.placeholder[0])&&(g="01"+e.separator);var f=1===d.length?e.regex.val2pre(e.separator).test(g+d):e.regex.val2(e.separator).test(g+d);return c||f||!(f=e.regex.val2(e.separator).test(g+"0"+d))?f:(h.buffer[i]="0",i++,{pos:i})},cardinality:1}]},y:{validator:function(d,g,i,c,f){if(f.isInYearRange(d,f.yearrange.minyear,f.yearrange.maxyear)){var h=g.buffer.join("").substr(0,6);if(h!==f.leapday){return !0}var e=parseInt(d,10);return e%4===0?e%100===0?e%400===0?!0:!1:!0:!1}return !1},cardinality:4,prevalidator:[{validator:function(e,h,i,d,f){var g=f.isInYearRange(e,f.yearrange.minyear,f.yearrange.maxyear);if(!d&&!g){var c=f.determinebaseyear(f.yearrange.minyear,f.yearrange.maxyear,e+"0").toString().slice(0,1);if(g=f.isInYearRange(c+e,f.yearrange.minyear,f.yearrange.maxyear)){return h.buffer[i++]=c.charAt(0),{pos:i}}if(c=f.determinebaseyear(f.yearrange.minyear,f.yearrange.maxyear,e+"0").toString().slice(0,2),g=f.isInYearRange(c+e,f.yearrange.minyear,f.yearrange.maxyear)){return h.buffer[i++]=c.charAt(0),h.buffer[i++]=c.charAt(1),{pos:i}}}return g},cardinality:1},{validator:function(d,i,g,h,c){var k=c.isInYearRange(d,c.yearrange.minyear,c.yearrange.maxyear);if(!h&&!k){var e=c.determinebaseyear(c.yearrange.minyear,c.yearrange.maxyear,d).toString().slice(0,2);if(k=c.isInYearRange(d[0]+e[1]+d[1],c.yearrange.minyear,c.yearrange.maxyear)){return i.buffer[g++]=e.charAt(1),{pos:g}}if(e=c.determinebaseyear(c.yearrange.minyear,c.yearrange.maxyear,d).toString().slice(0,2),c.isInYearRange(e+d,c.yearrange.minyear,c.yearrange.maxyear)){var j=i.buffer.join("").substr(0,6);if(j!==c.leapday){k=!0}else{var f=parseInt(d,10);k=f%4===0?f%100===0?f%400===0?!0:!1:!0:!1}}else{k=!1}if(k){return i.buffer[g-1]=e.charAt(0),i.buffer[g++]=e.charAt(1),i.buffer[g++]=d.charAt(0),{refreshFromBuffer:{start:g-3,end:g},pos:g}}}return k},cardinality:2},{validator:function(d,f,g,c,e){return e.isInYearRange(d,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(d){var c=a.escapeRegex.call(this,d);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(d){var c=a.escapeRegex.call(this,d);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(h,c,f,g){var i=b(this);if(h.ctrlKey&&h.keyCode===a.keyCode.RIGHT){var d=new Date();i.val((d.getMonth()+1).toString()+d.getDate().toString()+d.getFullYear().toString()),i.trigger("setvalue")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(h,c,f,g){var i=b(this);if(h.ctrlKey&&h.keyCode===a.keyCode.RIGHT){var d=new Date();i.val(d.getFullYear().toString()+(d.getMonth()+1).toString()+d.getDate().toString()),i.trigger("setvalue")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(e,h,i,c,f){if("24"===f.hourFormat&&24===parseInt(e,10)){return h.buffer[i-1]="0",h.buffer[i]="0",{refreshFromBuffer:{start:i-1,end:i},c:"0"}}var g=f.regex.hrs.test(e);if(!c&&!g&&(e.charAt(1)===f.timeseparator||-1!=="-.:".indexOf(e.charAt(1)))&&(g=f.regex.hrs.test("0"+e.charAt(0)))){return h.buffer[i-1]="0",h.buffer[i]=e.charAt(0),i++,{refreshFromBuffer:{start:i-2,end:i},pos:i,c:f.timeseparator}}if(g&&"24"!==f.hourFormat&&f.regex.hrs24.test(e)){var d=parseInt(e,10);return 24===d?(h.buffer[i+5]="a",h.buffer[i+6]="m"):(h.buffer[i+5]="p",h.buffer[i+6]="m"),d-=12,10>d?(h.buffer[i]=d.toString(),h.buffer[i-1]="0"):(h.buffer[i]=d.toString().charAt(1),h.buffer[i-1]=d.toString().charAt(0)),{refreshFromBuffer:{start:i-1,end:i+6},c:h.buffer[i]}}return g},cardinality:2,prevalidator:[{validator:function(d,g,h,c,e){var f=e.regex.hrspre.test(d);return c||f||!(f=e.regex.hrs.test("0"+d))?f:(g.buffer[h]="0",h++,{pos:h})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(d,g,h,c,e){var f=e.regex.mspre.test(d);return c||f||!(f=e.regex.ms.test("0"+d))?f:(g.buffer[h]="0",h++,{pos:h})},cardinality:1}]},t:{validator:function(d,f,g,c,e){return e.regex.ampm.test(d+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(d){var c=a.escapeRegex.call(this,d);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(d){var c=a.escapeRegex.call(this,d);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(h,c,f,g){var i=b(this);if(h.ctrlKey&&h.keyCode===a.keyCode.RIGHT){var d=new Date();i.val((d.getMonth()+1).toString()+d.getDate().toString()+d.getFullYear().toString()),i.trigger("setvalue")}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(d){var c=a.escapeRegex.call(this,d);return new RegExp("((0[1-9]|1[012])"+c+"[0-3])")},val2:function(d){var c=a.escapeRegex.call(this,d);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+c+"30)|((0[1-6])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0}}),a}(jQuery,Inputmask),function(b,a){return a.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),a.extendAliases({url:{definitions:{i:{validator:".",cardinality:1}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(d,f,g,c,e){return g-1>-1&&"."!==f.buffer[g-1]?(d=f.buffer[g-1]+d,d=g-2>-1&&"."!==f.buffer[g-2]?f.buffer[g-2]+d:"0"+d):d="00"+d,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(d)},cardinality:1}},onUnMask:function(e,c,d){return e}},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,64}]@*{1,64}[.*{2,64}][.*{2,6}][.*{1,2}]",greedy:!1,onBeforePaste:function(c,d){return c=c.toLowerCase(),c.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"}},onUnMask:function(e,c,d){return e}},mac:{mask:"##:##:##:##:##:##"}}),a}(jQuery,Inputmask),function(b,a){return a.extendAliases({numeric:{mask:function(e){function g(h){for(var j="",k=0;k<h.length;k++){j+=e.definitions[h.charAt(k)]?"\\"+h.charAt(k):h.charAt(k)}return j}if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator===e.radixPoint&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=void 0),e.autoGroup=e.autoGroup&&""!==e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var f=Math.floor(e.integerDigits/e.groupSize),d=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0===d?f-1:f),e.integerDigits<1&&(e.integerDigits="*")}e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),e.radixFocus=e.radixFocus&&""!==e.placeholder&&e.integerOptional===!0,e.definitions[";"]=e.definitions["~"],e.definitions[";"].definitionSymbol="~",1==e.numericInput&&(e.radixFocus=!1,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e.decimalProtect=!1);var c=g(e.prefix);return c+="[+]",c+=e.integerOptional===!0?"~{1,"+e.integerDigits+"}":"~{"+e.integerDigits+"}",void 0!==e.digits&&(isNaN(e.digits)||parseInt(e.digits)>0)&&(c+=e.digitsOptional?"["+(e.decimalProtect?":":e.radixPoint)+";{1,"+e.digits+"}]":(e.decimalProtect?":":e.radixPoint)+";{"+e.digits+"}"),""!==e.negationSymbol.back&&(c+="[-]"),c+=g(e.suffix),e.greedy=!1,c},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,radixPoint:".",radixFocus:!0,groupSize:3,groupSeparator:"",autoGroup:!1,allowPlus:!0,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,postFormat:function(n,s,f,c){c.numericInput===!0&&(n=n.reverse(),isFinite(s)&&(s=n.join("").length-s-1));var o,g,t=!1;n.length>=c.suffix.length&&n.join("").indexOf(c.suffix)===n.length-c.suffix.length&&(n.length=n.length-c.suffix.length,t=!0),s=s>=n.length?n.length-1:s<c.prefix.length?c.prefix.length:s;var m=!1,q=n[s];if(""===c.groupSeparator||c.numericInput!==!0&&-1!==b.inArray(c.radixPoint,n)&&s>b.inArray(c.radixPoint,n)||new RegExp("["+a.escapeRegex(c.negationSymbol.front)+"+]").test(q)){if(t){for(o=0,g=c.suffix.length;g>o;o++){n.push(c.suffix.charAt(o))}}return{pos:s}}var j=n.slice();q===c.groupSeparator&&(j.splice(s--,1),q=j[s]),f?q!==c.radixPoint&&(j[s]="?"):j.splice(s,0,"?");var p=j.join(""),h=p;if(p.length>0&&c.autoGroup||f&&-1!==p.indexOf(c.groupSeparator)){var k=a.escapeRegex(c.groupSeparator);m=0===p.indexOf(c.groupSeparator),p=p.replace(new RegExp(k,"g"),"");var e=p.split(c.radixPoint);if(p=""===c.radixPoint?p:e[0],p!==c.prefix+"?0"&&p.length>=c.groupSize+c.prefix.length){for(var d=new RegExp("([-+]?[\\d?]+)([\\d?]{"+c.groupSize+"})");d.test(p);){p=p.replace(d,"$1"+c.groupSeparator+"$2"),p=p.replace(c.groupSeparator+c.groupSeparator,c.groupSeparator)}}""!==c.radixPoint&&e.length>1&&(p+=c.radixPoint+e[1])}for(m=h!==p,n.length=p.length,o=0,g=p.length;g>o;o++){n[o]=p.charAt(o)}var r=b.inArray("?",n);if(-1===r&&q===c.radixPoint&&(r=b.inArray(c.radixPoint,n)),f?n[r]=q:n.splice(r,1),!m&&t){for(o=0,g=c.suffix.length;g>o;o++){n.push(c.suffix.charAt(o))}}return r=c.numericInput&&isFinite(s)?n.join("").length-r-1:r,c.numericInput&&(n=n.reverse(),b.inArray(c.radixPoint,n)<r&&n.join("").length-c.suffix.length!==r&&(r-=1)),{pos:r,refreshFromBuffer:m,buffer:n}},onBeforeWrite:function(n,j,m,f){if(n&&("blur"===n.type||"checkval"===n.type)){var d=j.join(""),p=d.replace(f.prefix,"");if(p=p.replace(f.suffix,""),p=p.replace(new RegExp(a.escapeRegex(f.groupSeparator),"g"),""),","===f.radixPoint&&(p=p.replace(a.escapeRegex(f.radixPoint),".")),isFinite(p)&&isFinite(f.min)&&parseFloat(p)<parseFloat(f.min)){return b.extend(!0,{refreshFromBuffer:!0,buffer:(f.prefix+f.min).split("")},f.postFormat((f.prefix+f.min).split(""),0,!0,f))}if(f.numericInput!==!0){var h=""!==f.radixPoint?j.join("").split(f.radixPoint):[j.join("")],g=h[0].match(f.regex.integerPart(f)),c=2===h.length?h[1].match(f.regex.integerNPart(f)):void 0;if(g){g[0]!==f.negationSymbol.front+"0"&&g[0]!==f.negationSymbol.front&&"+"!==g[0]||void 0!==c&&!c[0].match(/^0+$/)||j.splice(g.index,1);var l=b.inArray(f.radixPoint,j);if(-1!==l){if(isFinite(f.digits)&&!f.digitsOptional){for(var k=1;k<=f.digits;k++){(void 0===j[l+k]||j[l+k]===f.placeholder.charAt(0))&&(j[l+k]="0")}return{refreshFromBuffer:d!==j.join(""),buffer:j}}if(l===j.length-f.suffix.length-1){return j.splice(l,1),{refreshFromBuffer:!0,buffer:j}}}}}}if(f.autoGroup){var o=f.postFormat(j,f.numericInput?m:m-1,!0,f);return o.caret=m<=f.prefix.length?o.pos:o.pos+1,o}},regex:{integerPart:function(c){return new RegExp("["+a.escapeRegex(c.negationSymbol.front)+"+]?\\d+")},integerNPart:function(c){return new RegExp("[\\d"+a.escapeRegex(c.groupSeparator)+"]+")}},signHandler:function(d,g,h,c,f){if(!c&&f.allowMinus&&"-"===d||f.allowPlus&&"+"===d){var e=g.buffer.join("").match(f.regex.integerPart(f));if(e&&e[0].length>0){return g.buffer[e.index]===("-"===d?"+":f.negationSymbol.front)?"-"===d?""!==f.negationSymbol.back?{pos:e.index,c:f.negationSymbol.front,remove:e.index,caret:h,insert:{pos:g.buffer.length-f.suffix.length-1,c:f.negationSymbol.back}}:{pos:e.index,c:f.negationSymbol.front,remove:e.index,caret:h}:""!==f.negationSymbol.back?{pos:e.index,c:"+",remove:[e.index,g.buffer.length-f.suffix.length-1],caret:h}:{pos:e.index,c:"+",remove:e.index,caret:h}:g.buffer[e.index]===("-"===d?f.negationSymbol.front:"+")?"-"===d&&""!==f.negationSymbol.back?{remove:[e.index,g.buffer.length-f.suffix.length-1],caret:h-1}:{remove:e.index,caret:h-1}:"-"===d?""!==f.negationSymbol.back?{pos:e.index,c:f.negationSymbol.front,caret:h+1,insert:{pos:g.buffer.length-f.suffix.length,c:f.negationSymbol.back}}:{pos:e.index,c:f.negationSymbol.front,caret:h+1}:{pos:e.index,c:d,caret:h+1}}}return !1},radixHandler:function(f,h,i,d,g){if(!d&&(-1!==b.inArray(f,[",","."])&&(f=g.radixPoint),f===g.radixPoint&&void 0!==g.digits&&(isNaN(g.digits)||parseInt(g.digits)>0))){var c=b.inArray(g.radixPoint,h.buffer),e=h.buffer.join("").match(g.regex.integerPart(g));if(-1!==c&&h.validPositions[c]){return h.validPositions[c-1]?{caret:c+1}:{pos:e.index,c:e[0],caret:c+1}}if(!e||"0"===e[0]&&e.index+1!==i){return h.buffer[e?e.index:i]="0",{pos:(e?e.index:i)+1,c:g.radixPoint}}}return !1},leadingZeroHandler:function(g,l,i,k,d){if(d.numericInput===!0){if("0"===l.buffer[l.buffer.length-d.prefix.length-1]){return{pos:i,remove:l.buffer.length-d.prefix.length-1}}}else{var e=l.buffer.join("").match(d.regex.integerNPart(d)),h=b.inArray(d.radixPoint,l.buffer);if(e&&!k&&(-1===h||h>=i)){if(0===e[0].indexOf("0")){i<d.prefix.length&&(i=e.index);var j=b.inArray(d.radixPoint,l._buffer),f=l._buffer&&l.buffer.slice(h).join("")===l._buffer.slice(j).join("")||0===parseInt(l.buffer.slice(h+1).join("")),c=l._buffer&&l.buffer.slice(e.index,h).join("")===l._buffer.slice(d.prefix.length,j).join("")||"0"===l.buffer.slice(e.index,h).join("");if(-1===h||f&&c){return l.buffer.splice(e.index,1),i=i>e.index?i-1:e.index,{pos:i,remove:e.index}}if(e.index+1===i||"0"===g){return l.buffer.splice(e.index,1),i=e.index,{pos:i,remove:e.index}}}else{if("0"===g&&i<=e.index&&e[0]!==d.groupSeparator){return !1}}}}return !0},postValidation:function(d,c,f){var h=!0,g=f.numericInput?d.slice().reverse().join(""):d.join(""),e=g.replace(f.prefix,"");return e=e.replace(f.suffix,""),e=e.replace(new RegExp(a.escapeRegex(f.groupSeparator),"g"),""),","===f.radixPoint&&(e=e.replace(a.escapeRegex(f.radixPoint),".")),e=e.replace(new RegExp("^"+a.escapeRegex(f.negationSymbol.front)),"-"),e=e.replace(new RegExp(a.escapeRegex(f.negationSymbol.back)+"$"),""),e=e===f.negationSymbol.front?e+"0":e,isFinite(e)&&(null!==f.max&&isFinite(f.max)&&(e=parseFloat(e)>parseFloat(f.max)?f.max:e,h=f.postFormat((f.prefix+e).split(""),0,!0,f)),null!==f.min&&isFinite(f.min)&&(e=parseFloat(e)<parseFloat(f.min)?f.min:e,h=f.postFormat((f.prefix+e).split(""),0,!0,f))),h},definitions:{"~":{validator:function(d,h,i,c,e){var g=e.signHandler(d,h,i,c,e);if(!g&&(g=e.radixHandler(d,h,i,c,e),!g&&(g=c?new RegExp("[0-9"+a.escapeRegex(e.groupSeparator)+"]").test(d):new RegExp("[0-9]").test(d),g===!0&&(g=e.leadingZeroHandler(d,h,i,c,e),g===!0)))){var f=b.inArray(e.radixPoint,h.buffer);g=-1!==f&&e.digitsOptional===!1&&e.numericInput!==!0&&i>f&&!c?{pos:i,remove:i}:{pos:i}}return g},cardinality:1,prevalidator:null},"+":{validator:function(d,g,h,c,e){var f=e.signHandler(d,g,h,c,e);return !f&&(c&&e.allowMinus&&d===e.negationSymbol.front||e.allowMinus&&"-"===d||e.allowPlus&&"+"===d)&&(f="-"===d?""!==e.negationSymbol.back?{pos:h,c:"-"===d?e.negationSymbol.front:"+",caret:h+1,insert:{pos:g.buffer.length,c:e.negationSymbol.back}}:{pos:h,c:"-"===d?e.negationSymbol.front:"+",caret:h+1}:!0),f},cardinality:1,prevalidator:null,placeholder:""},"-":{validator:function(d,g,h,c,e){var f=e.signHandler(d,g,h,c,e);return !f&&c&&e.allowMinus&&d===e.negationSymbol.back&&(f=!0),f},cardinality:1,prevalidator:null,placeholder:""},":":{validator:function(d,h,i,c,f){var g=f.signHandler(d,h,i,c,f);if(!g){var e="["+a.escapeRegex(f.radixPoint)+",\\.]";g=new RegExp(e).test(d),g&&h.validPositions[i]&&h.validPositions[i].match.placeholder===f.radixPoint&&(g={caret:i+1})}return g?{c:f.radixPoint}:g},cardinality:1,prevalidator:null,placeholder:function(c){return c.radixPoint}}},onUnMask:function(f,c,e){var d=f.replace(e.prefix,"");return d=d.replace(e.suffix,""),d=d.replace(new RegExp(a.escapeRegex(e.groupSeparator),"g"),""),e.unmaskAsNumber?(""!==e.radixPoint&&-1!==d.indexOf(e.radixPoint)&&(d=d.replace(a.escapeRegex.call(this,e.radixPoint),".")),Number(d)):d},isComplete:function(d,f){var g=d.join(""),c=d.slice();if(f.postFormat(c,0,!0,f),c.join("")!==g){return !1}var e=g.replace(f.prefix,"");return e=e.replace(f.suffix,""),e=e.replace(new RegExp(a.escapeRegex(f.groupSeparator),"g"),""),","===f.radixPoint&&(e=e.replace(a.escapeRegex(f.radixPoint),".")),isFinite(e)},onBeforeMask:function(e,g){if(""!==g.radixPoint&&isFinite(e)){e=e.toString().replace(".",g.radixPoint)}else{var d=e.match(/,/g),i=e.match(/\./g);i&&d?i.length>d.length?(e=e.replace(/\./g,""),e=e.replace(",",g.radixPoint)):d.length>i.length?(e=e.replace(/,/g,""),e=e.replace(".",g.radixPoint)):e=e.indexOf(".")<e.indexOf(",")?e.replace(/\./g,""):e=e.replace(/,/g,""):e=e.replace(new RegExp(a.escapeRegex(g.groupSeparator),"g"),"")}if(0===g.digits&&(-1!==e.indexOf(".")?e=e.substring(0,e.indexOf(".")):-1!==e.indexOf(",")&&(e=e.substring(0,e.indexOf(",")))),""!==g.radixPoint&&isFinite(g.digits)&&-1!==e.indexOf(g.radixPoint)){var f=e.split(g.radixPoint),h=f[1].match(new RegExp("\\d*"))[0];if(parseInt(g.digits)<h.toString().length){var c=Math.pow(10,parseInt(g.digits));e=e.replace(a.escapeRegex(g.radixPoint),"."),e=Math.round(parseFloat(e)*c)/c,e=e.toString().replace(".",g.radixPoint)}}return e.toString()},canClearPosition:function(s,l,n,r,f){var p=s.validPositions[l].input,q=p!==f.radixPoint||null!==s.validPositions[l].match.fn&&f.decimalProtect===!1||isFinite(p)||l===n||p===f.groupSeparator||p===f.negationSymbol.front||p===f.negationSymbol.back;if(q&&isFinite(p)){var g,e=b.inArray(f.radixPoint,s.buffer),k=!1;if(void 0===s.validPositions[e]&&(s.validPositions[e]={input:f.radixPoint},k=!0),!r&&s.buffer){g=s.buffer.join("").substr(0,l).match(f.regex.integerNPart(f));var o=l+1,d=null==g||0===parseInt(g[0].replace(new RegExp(a.escapeRegex(f.groupSeparator),"g"),""));if(d){for(;s.validPositions[o]&&(s.validPositions[o].input===f.groupSeparator||"0"===s.validPositions[o].input);){delete s.validPositions[o],o++}}}var i=[];for(var h in s.validPositions){void 0!==s.validPositions[h].input&&i.push(s.validPositions[h].input)}if(k&&delete s.validPositions[e],e>0){var m=i.join("");if(g=m.match(f.regex.integerNPart(f))){if(e>=l){if(0===g[0].indexOf("0")){q=g.index!==l||"0"===f.placeholder}else{var c=parseInt(g[0].replace(new RegExp(a.escapeRegex(f.groupSeparator),"g"),"")),j=parseInt(m.split(f.radixPoint)[1]);10>c&&s.validPositions[l]&&("0"!==f.placeholder||j>0)&&(s.validPositions[l].input="0",s.p=f.prefix.length+1,q=!1)}}else{0===g[0].indexOf("0")&&3===m.length&&(s.validPositions={},q=!1)}}}}return q},onKeyDown:function(g,c,d,f){var h=b(this);if(g.ctrlKey){switch(g.keyCode){case a.keyCode.UP:h.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(f.step)),h.trigger("setvalue");break;case a.keyCode.DOWN:h.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(f.step)),h.trigger("setvalue")}}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowPlus:!1,allowMinus:!1}}),a}(jQuery,Inputmask),function(b,a){return a.extendAliases({phone:{url:"phone-codes/phone-codes.js",countrycode:"",phoneCodeCache:{},mask:function(c){if(void 0===c.phoneCodeCache[c.url]){var d=[];c.definitions["#"]=c.definitions[9],b.ajax({url:c.url,async:!1,type:"get",dataType:"json",success:function(e){d=e},error:function(g,e,f){alert(f+" - "+c.url)}}),c.phoneCodeCache[c.url]=d.sort(function(f,e){return(f.mask||f)<(e.mask||e)?-1:1})}return c.phoneCodeCache[c.url]},keepStatic:!1,nojumps:!0,nojumpsThreshold:1,onBeforeMask:function(e,d){var c=e.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(c.indexOf(d.countrycode)>1||-1===c.indexOf(d.countrycode))&&(c="+"+d.countrycode+c),c}},phonebe:{alias:"phone",url:"phone-codes/phone-be.js",countrycode:"32",nojumpsThreshold:4}}),a}(jQuery,Inputmask),function(b,a){return a.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(c,d){return new RegExp(d.regex).test(c.join(""))},definitions:{r:{validator:function(f,o,m,n,c){function k(t,i){this.matches=[],this.isGroup=t||!1,this.isQuantifier=i||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function r(){var z,v,x=new k(),A=[];for(c.regexTokens=[];z=c.tokenizer.exec(c.regex);){switch(v=z[0],v.charAt(0)){case"(":A.push(new k(!0));break;case")":j=A.pop(),A.length>0?A[A.length-1].matches.push(j):x.matches.push(j);break;case"{":case"+":case"*":var i=new k(!1,!0);v=v.replace(/[{}]/g,"");var t=v.split(","),w=isNaN(t[0])?t[0]:parseInt(t[0]),u=1===t.length?w:isNaN(t[1])?t[1]:parseInt(t[1]);if(i.quantifier={min:w,max:u},A.length>0){var y=A[A.length-1].matches;z=y.pop(),z.isGroup||(j=new k(!0),j.matches.push(z),z=j),y.push(z),y.push(i)}else{z=x.matches.pop(),z.isGroup||(j=new k(!0),j.matches.push(z),z=j),x.matches.push(z),x.matches.push(i)}break;default:A.length>0?A[A.length-1].matches.push(v):x.matches.push(v)}}x.matches.length>0&&c.regexTokens.push(x)}function p(z,u){var w=!1;u&&(s+="(",d++);for(var E=0;E<z.matches.length;E++){var F=z.matches[E];if(F.isGroup===!0){w=p(F,!0)}else{if(F.isQuantifier===!0){var x=b.inArray(F,z.matches),v=z.matches[x-1],G=s;if(isNaN(F.quantifier.max)){for(;F.repeaterPart&&F.repeaterPart!==s&&F.repeaterPart.length>s.length&&!(w=p(v,!0));){}w=w||p(v,!0),w&&(F.repeaterPart=s),s=G+F.quantifier.max}else{for(var D=0,I=F.quantifier.max-1;I>D&&!(w=p(v,!0));D++){}s=G+"{"+F.quantifier.min+","+F.quantifier.max+"}"}}else{if(void 0!==F.matches){for(var B=0;B<F.length&&!(w=p(F[B],u));B++){}}else{var t;if("["==F.charAt(0)){t=s,t+=F;for(var C=0;d>C;C++){t+=")"}var A=new RegExp("^("+t+")$");w=A.test(g)}else{for(var y=0,H=F.length;H>y;y++){if("\\"!==F.charAt(y)){t=s,t+=F.substr(0,y+1),t=t.replace(/\|$/,"");for(var C=0;d>C;C++){t+=")"}var A=new RegExp("^("+t+")$");if(w=A.test(g)){break}}}}s+=F}}}if(w){break}}return u&&(s+=")",d--),w}var g,j,e=o.buffer.slice(),s="",q=!1,d=0;null===c.regexTokens&&r(),e.splice(m,0,f),g=e.join("");for(var h=0;h<c.regexTokens.length;h++){var l=c.regexTokens[h];if(q=p(l,l.isGroup)){break}}return q},cardinality:1}}}}),a}(jQuery,Inputmask);
jQuery("input[type=tel]").inputmask("+7(999)999-99-99");

});
