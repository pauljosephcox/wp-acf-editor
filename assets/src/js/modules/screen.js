// ------------------------------------
//
// Screen
//
// ------------------------------------

class Screen {

	// ------------------------------------
	// Constructor
	// ------------------------------------

	constructor(obj){

		// Get Props
		this.props = obj;

		// Get The Value
		this.value = this.props.element.text();

		// Events
		// this.props.element.on('keyup',this.bind);
		

	}

	bind(e){

		console.log("HELLO");

	}

	// ------------------------------------
	// Types
	// ------------------------------------

	renderType(){

		switch(this.props.type){

			case 'text':
				return `<input name="input" value="${this.value}">`
				break;

			case 'textarea':
				return `<textarea name="input">${this.value}</textarea>`
				break;
			
			default:
				return ''

		}

	}

	// ------------------------------------
	// Render Card
	// ------------------------------------

	render(){

		var header = (this.props.title) ? `<h6 class="editor-screen-title">${this.props.title}</h6>` : '';
		var description = (this.props.description) ? `<div class="editor-screen-description">${this.props.description}</div>` : '';
		var input = this.renderType();
		return '<div class="screen">'+header+description+input+'</div>';

	}

};


module.exports = Screen;