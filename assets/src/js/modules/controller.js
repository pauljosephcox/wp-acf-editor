// ------------------------------------
//
// Controller
//
// ------------------------------------


var Screen = require('./screen');

(function($) {

	if (typeof window.Controller == 'undefined') window.Controller = {};

	Controller = {

		panel: null,
		screen: null,
		data: {},

		init: function() {

			// Get Elements
			this.panel = $('.acfeditor');
			this.screenContainer = this.panel.find('[data-screen]');
			this.btnSave = this.panel.find('[data-save]');

			// Setup Events
			$('[data-editable]').on('click',Controller.handleEditableClick);
			this.btnSave.on('click',Controller.save);
		},



		handleEditableClick(e){

			var $el = $(this);

			// Collect Data
			var obj = {
				key: $el.data('editable'),
				type: $el.data('editableType'),
				title: $el.data('editableTitle'),
				description: $el.data('editableDescription'),
				element: $el,
			};

			// Show
			Controller.show(obj);

		},

		save(e){

			// Set Value
			Controller.set(Controller.screen.props.key,Controller.$screen.find('[name="input"]').val());

			// Update DOM
			Controller.screen.props.element.html(Controller.$screen.find('[name="input"]').val());

			// Close Panel
			Controller.hide();

		},

		show(props){

			// Set The Screen
			this.screen = new Screen( props );
			this.screenContainer.html('');
			this.$screen = $(this.screen.render());
			this.$screen.appendTo(this.screenContainer);
			// this.screenContainer.append(this.screen.render());

			// Show
			this.panel.addClass('-active');

		},

		hide(){

			this.panel.removeClass('-active');

		},

		set(key,value){

			this.data[key] = value;

		},

		get(key){

			return this.data[key];

		}


	};
	
	module.exports = Controller;

})(jQuery);