/*!
 * 	Standard.scroll
 * Copyright (c) 2017-2021 by Marc Anton Dahmen - https://marcdahmen.de - MIT license
 */

+(function (Standard, $) {
	Standard.ScrollPosition = {
		init: function () {
			var $doc = $(document),
				$html = $('html');

			// Create event to be triggered only once when scrolling has finished.
			$(window).scroll(function () {
				if (this.scrolling) {
					clearTimeout(this.scrolling);
				}

				this.scrolling = setTimeout(function () {
					$(this).trigger('scrolled.automad');
				}, 10);
			});

			// Handle scrolled event.
			$(window).on('load scrolled.automad', function () {
				var scrolled = $doc.scrollTop(),
					cls = 'am-scrolled',
					clsSecondary = 'am-scrolled-secondary';

				if (scrolled > 30) {
					$html.addClass(cls);
				} else {
					$html.removeClass(cls);
				}

				if (scrolled > 60) {
					$html.addClass(clsSecondary);
				} else {
					$html.removeClass(clsSecondary);
				}
			});
		},
	};

	$(document).ready(Standard.ScrollPosition.init);
})((window.Standard = window.Standard || {}), jQuery);
