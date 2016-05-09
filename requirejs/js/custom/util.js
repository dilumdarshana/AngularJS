"use stricts";

var __myApp;

define (['jquery'], function ($) {

	(function ($) {

		$.myApp = function () {

			this.name = 'Test';

			this.set = function (value) {

				this.name = value;
			};

			this.get = function () {

				return this.name;
			};
		};

	})(jQuery);

	__myApp = new $.myApp ();
});