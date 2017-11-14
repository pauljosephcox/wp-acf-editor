// ------------------------------------
//
// Editor
//
// ------------------------------------

(function($) {

	if (typeof window.Editor == 'undefined') window.Editor = {};

	Editor = {

		el:null,
		panel: null,

		/*
		 * Theme init
		 */

		init: function() {

			// Init 
			this.panel = Panel;
			this.panel.init();
			this.el = $('#acfeditor');
			this.render();

		},

		render(){
			
			// Build The Panel
			this.el.append($(Panel.render()));


		}
	};
	
	module.exports = Editor;

})(jQuery);