"use stricts";

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

//$(document).ready (function () {

	var __myApp = new $.myApp ();
//});
