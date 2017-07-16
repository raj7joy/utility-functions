function fixrightnav() {



	if (!IS_IPAD && $(".home_left_mid").length > 0 && $(".home_left_mid").height() < $(".home_right_mid").height()) {




		var leftpos = ($("body").width() - $(".bt_footer").width()) / 2 + $(".home_right_mid").width() + 11;
		var $window = $(window);

		var $stickyyEl = $('.home_left_mid');

		var elTop = $stickyyEl.offset().top;
		var $sidebar = $('.home_left_mid');
		var docheight = $(document).height();
		var footerheight = $(".bt_footer").height();

		var windowheight = $(window).height();
		$window.on("resize scroll", function () {


			if ($(window).width() > 994) {

				var scrol_top = $(window).scrollTop();
				docheight = $(document).height();

				if ((scrol_top + windowheight) > (docheight - footerheight)) {
					$sidebar.addClass("fixedrhs");
					$sidebar.css({
						"bottom": (footerheight - (docheight - (scrol_top + windowheight)))
					});

				} else if ((scrol_top + windowheight) > (elTop + $sidebar.height())) { //calculate again  if zoom changes height and width of all element changes
					docheight = $(document).height();
					windowheight = $(window).height();
					footerheight = $(".bt_footer").height() + 96;
					leftpos = ($("body").width() - $(".bt_footer").width()) / 2 + $(".home_right_mid").width() + 11;

					$sidebar.addClass("fixedrhs");
					$sidebar.css({
						"bottom": 0
					});
				} else {
					$sidebar.removeClass("fixedrhs");
				}

			}


		});




	} else {
		setTimeout('fixrightnav()', 1000);
	}

}
