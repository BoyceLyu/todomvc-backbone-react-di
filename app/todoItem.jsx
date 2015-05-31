var React = require('react');

var ESCAP_KEY =27;
var ENTER_KEY = 13;

var todoItem = React.createClass({
	getInitialState:function(){
		return {editText:this.props.todo.get("title")};
	},

	handleSubmit:function(){
		var val = this.state.editText.trim();
		if(val){
			this.props.onSave(val);
			this.setState({editText:val});
		}else{
			this.props.onDestroy();
		}

		return false;
	},

	handleEdit:function() {
		this.props.onEdit(function() {
			var node  = this.refs.editField.getDOMNode();
			node.focus();
			node.setSelectionRange(node.value.length,node.value.length);
		}).bind(this);
		this.setState({editText:this.props.todo.get("title")});
	},

	

	render: function() {
		return (
			<div />
		);
	}

});


module.exports = todoItem;