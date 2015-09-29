"use strict";

var CommentBox = React.createClass({
	displayName: "CommentBox",

	loadCommentsFromServer: function loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: "json",
			cache: false,
			success: (function (data) {
				this.setState({ data: data });
			}).bind(this),
			error: (function (xhr, status, err) {
				console.error(this["this"].props.url, status, err.toString());
			}).bind(this)
		});
	},
	getInitialstate: function getInitialstate() {
		return { data: [] };
	},
	componentDidMount: function componentDidMount() {
		this.loadCommentsFromServer();
		setinterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentBox" },
			React.createElement(
				"h1",
				null,
				"commentList"
			),
			React.createElement(CommentList, { data: this.state.data }),
			React.createElement(CommentForm, null)
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

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentForm" },
			"Hello, world! I am a CommentForm."
		);
	}
});

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

var data = [{ author: "赖传峰", text: "这是一个提交" }, { author: "Microsoft", text: "这是一个**MarkDown**" }];

React.render(React.createElement(CommentBox, { url: "/api/comments", pollInterval: 2000 }), document.getElementById('content'));