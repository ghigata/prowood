(function ($) {
	$(document).ready(function() {
		$('#navigation ul.menu').superfish();
	
		if ($('#block-views-view_slide_image-block .views-field-field-company-image div').length > 0)
			$('#block-views-view_slide_image-block .views-field-field-company-image div').before('<div id = "slide-nav"><a id = "prev" href = "#" title = "Preview">Prev</a><a id = "next" href = "#" title = "Next">Next</a></div>').cycle({
				fx: 'scrollHorz', 
				startingSlide: 1,  // start on the slide that was in the markup 
				timeout:  5000, 
				speed:    1000, 
				pause: 1,
				prev:   '#prev', 
				next:   '#next'
			});
		if ($('.node-product.full-node .field-name-field-image .field-items').length > 0)
			$('.node-product.full-node .field-name-field-image .field-items').after('<ul id="product-pager"></ul>').cycle({ 
				fx:     'scrollDown', 
				startingSlide: 1,  // start on the slide that was in the markup 
				timeout: 5000,
				speed: 1000,
				pager:'#product-pager',
				pagerAnchorBuilder:function(idx,slide){
					var src=String($('img',slide).attr('src')).replace('product_thumb','product_pager');
					return'<li class = "product-thumb"><a href="#"><img src="'+src+'" title="'+slide.title+'" alt="'+slide.alt+'"/></a></li>';
				}
			});
			$('#block-system-main-menu .gutter').width($('#block-system-main-menu ul.menu').width() + 15);
});
}(jQuery));

