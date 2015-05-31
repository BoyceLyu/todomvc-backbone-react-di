var React = require('react');

var Footer = React.createClass({

	render: function() {
		var activeTodoWord = this.props.count ===1?'item':'items';
		var clearButton = null;

		if(this.props.completedCount > 0){
			clearButton = (
				<button id="clear-completed"
						onClick={this.props.onClearCompleted}>
						Clear completed
				</button>
			);
		}

		var cx = React.addons.classSet;
		var nowShowint = this.props.newShowing;

		return (
			<footer id= "foots">
				<span id="todo-count">
					<strong>{this.props.count}</stront> {activeTodeWord} left
				</span>
				<ul id="filters">
					<li>
						<a href="#/"
					   		className = {cx({selected:newShowint===app.ALL_TODO})}>
					   		All
						</a>
					</li>
					<li>
						<a href="#/active"
					   		className = {cx({selected:newShowint===app.ALL_TODO})}>
					   		Active
						</a>
					</li>
					<li>
						<a href="#/completed"
					   		className = {cx({selected:newShowint===app.ALL_TODO})}>
					   		Completed
					   	</a>
					</li>
				</ul>
				{clearButton}
			</footer>
		);
	}

});

module.exports = Footer;