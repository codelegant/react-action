"use strict";

var Comment = React.createClass({
	displayName: "Comment",

	rawMarkup: function rawMarkup() {
		var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
		return { __html: rawMarkup };
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "comments" },
			React.createElement(
				"h2",
				{ className: "commentAuthor" },
				this.props.author
			),
			React.createElement("span", { dangerouslySetInnerHTML: this.rawMarkup() })
		);
	}
});
var CommentBox = React.createClass({
	displayName: "CommentBox",

	loadCommentsFromServer: function loadCommentsFromServer() {
		var _this = this;

		$.ajax({
			url: this.props.url,
			dataType: "json",
			cache: false
		}).done(function (data) {
			_this.setState({ data: data });
		}).fail(function (xhr) {
			console.error(xhr.status);
		});
	},
	handleCommentSubmit: function handleCommentSubmit(comment) {
		var _this2 = this;

		var comments = this.state.data;
		var newComments = comments.concat([comment]);
		this.setState({ data: newComments });
		$.ajax({
			url: this.props.url,
			dataType: "json",
			type: "POST",
			data: comment
		}).done(function (data) {
			_this2.setState({ data: data });
		}).fail(function (xhr) {
			console.error(xhr.status);
		});
	},
	getInitialState: function getInitialState() {
		return { data: [] }; //初始化this.state
	},
	componentDidMount: function componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentBox" },
			React.createElement(
				"h1",
				null,
				"Comments"
			),
			React.createElement(CommentList, { data: this.state.data }),
			React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
		);
	}
});

var CommentList = React.createClass({
	displayName: "CommentList",

	render: function render() {
		var commentNodes = this.props.data.map(function (comment) {
			return React.createElement(
				Comment,
				{ author: comment.author },
				comment.text
			);
		});
		return React.createElement(
			"div",
			{ className: "commentList" },
			commentNodes
		);
	}
});

var CommentForm = React.createClass({
	displayName: "CommentForm",

	handleSubmit: function handleSubmit(e) {
		e.preventDefault();
		var author = React.findDOMNode(this.refs.author).value.trim();
		var text = React.findDOMNode(this.refs.text).value.trim();
		if (!text || !author) {
			return;
		}
		this.props.onCommentSubmit({ author: author, text: text });
		// React.findDOMNode(this.refs.author).value="";
		// React.findDOMNode(this.refs.text).value="";
		return;
	},
	render: function render() {
		return React.createElement(
			"form",
			{ className: "commentForm", onSubmit: this.handleSubmit },
			React.createElement("input", { type: "text", ref: "author", placeholder: "Your name" }),
			React.createElement("input", { type: "text", ref: "text", placeholder: "Say something..." }),
			React.createElement("input", { type: "submit", value: "Post" })
		);
	}
});

React.render(React.createElement(CommentBox, { url: "/api/comments", pollInterval: 2000 }), document.getElementById('content'));