function maskbox(name,nav){
	var html='<div class="theme-mask">'+
						'<div class="theme-mask-box">'+
							'<div class="row">'+
								'<div class="col-lg-12">'+
									'<div class="panel">'+
										'<div class="panel-heading bk-bg-primary">'+
											'<h6><i class="fa fa-indent red"></i>'+name+'</h6>'+
											'<div class="panel-actions">'+
												'<a class="btn-close"><i class="fa fa-times black"></i></a>'+
											'</div>'+
										'</div>'+
										'<div class="panel-body body-auto">'+nav+'</div>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>';
	$('.mask-prompt').append(html);
	$('.theme-mask .col-lg-12').css({'margin':'0 auto','float':'inherit'});
	$('.body-auto').css('padding-bottom','30px');
	$('.btn-close').click(function(){
		$('.theme-mask').remove();
		$('body').css('overflow','auto');
	});
	if($('.panel-body').hasClass('body-auto')){
		$('body').css('overflow','hidden');
	}
}

function indexclick(th){
	var index_1=$(th).index();
	$('.main iframe').each(function(){
		$(this).css('display','none');
	})
	$('.main iframe').eq(index_1).css('display','block');

	$('.programa li').each(function(){
		$(this).removeClass('active');
	})
	$(th).addClass('active');
}



function closeclick(ts){
	$(ts).parent().addClass('delete');
	var index_3;
	$('.programa li').each(function(){
		if($(this).hasClass('delete')){
			index_3=$(this).index();
		}
	})
	$(ts).parent().remove();
	$('.main iframe').eq(index_3).remove();
	
	$('.main iframe:last').css('display','block');
	setTimeout(function(){
		$('.programa li:last').addClass('active');
	},100);
}


$(function(){
	// $('.nav-sidebar li a,.nav-sidebar li ul li a').click(function(){
	// 	var src=$(this).attr('name');
	// 	$('iframe').attr('src',src);
	// 	$('.nav-sidebar li').each(function(){
	// 		$(this).removeClass('active');
	// 	})
	// 	$(this).parent().addClass('active');
	// 	$(this).parent().parent().parent().addClass('active');
	// 	var navhtml=$(this).find('span').html();
	// 	$('.pull-left .active').html(navhtml);
	// })
	// $('.nav-sidebar li a').click(function(){
	// 	$('.nav-sidebar li').each(function(){
	// 		$(this).removeClass('active');
	// 	})
	// 	$('.pull-left ol li').remove();
	// 	$(this).parent().addClass('active');
	// 	var src=$(this).attr('name');
	// 	$('iframe').attr('src',src);
	// 	$(this).parent().parent().parent().addClass('active');
	// 	if($(this).parent().hasClass('nav-parent') || $(this).parent().parent('ul').hasClass('nav-children')){
	// 		var navhtml=$(this).find('span').html();
	// 		var navhtml2=$(this).parent().parent().parent().find('.nav-prompt span').html();
	// 		if($(this).hasClass('nav-prompt')){
	// 			$('.pull-left ol').append('<li><a href="public.html"><i class="icon fa fa-home"></i>Home</a></li><li>'+navhtml+'</li>');
	// 		}else{
	// 			$('.pull-left ol').append('<li><a href="public.html"><i class="icon fa fa-home"></i>Home</a></li><li>'+navhtml2+'</li><li class="active">'+navhtml+'</li>');
	// 		}
			
	// 	}else{
	// 		var navhtml=$(this).find('span').html();
	// 		$('.pull-left ol').append('<li><a href="public.html"><i class="icon fa fa-home"></i>Home</a></li><li>'+navhtml+'</li>');
	// 	}
	// });
})