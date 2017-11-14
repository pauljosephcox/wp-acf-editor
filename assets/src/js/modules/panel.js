// ------------------------------------
//
// Panel
//
// ------------------------------------

(function($) {

	if (typeof window.Panel == 'undefined') window.Panel = {};

	Panel = {

		settings: {},

		/*
		 * Theme init
		 */

		init: function() {

			// Init 
			// alert("Panel")

		},

		render(){

			return `<div><h1>this is my panel object</h1></div>`;

		}
	};
	
	module.exports = Panel;

})(jQuery);