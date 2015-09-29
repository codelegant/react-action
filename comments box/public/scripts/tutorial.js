var CommentBox = React.createClass({
	loadCommentsFromServer:function(){
		$.ajax({
			url:this.props.url,
			dataType:"json",
			cache:false,
			success:function(data){
				this.setState({data:data});
			}.bind(this),
			error:function(xhr,status,err){
				console.error(this.this.props.url,status,err.toString());
			}.bind(this)
		});
	},
	getInitialstate:function(){
		return {data:[]};
	},
	componentDidMount:function(){
		this.loadCommentsFromServer();
		setinterval(this.loadCommentsFromServer,this.props.pollInterval);
	},
	render: function() {
		return (
			<div className="commentBox">
				<h1>commentList</h1>
				<CommentList data={this.state.data}/>
				<CommentForm/>
			</div>
		);
	}
});

var CommentList=React.createClass({
	render: function() {
		var commentNodes=this.props.data.map(function(comment){
			return (
				<Comment author={comment.author}>
					{comment.text}
				</Comment>
			);
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}		
});

var CommentForm=React.createClass({
	render: function() {
		return (
			<div className="commentForm">
			Hello, world! I am a CommentForm.
			</div>
		);
	}
});

var Comment=React.createClass({
	rawMarkup:function(){
		var rawMarkup=marked(this.props.children.toString(),{sanitize:true});
		return {__html:rawMarkup};
	},
	render: function() {
		return (
			<div className="comments">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
		);
	}
});

var data = [
  {author: "赖传峰", text: "这是一个提交"},
  {author: "Microsoft", text: "这是一个**MarkDown**"}
];

React.render(
  <CommentBox url="/api/comments" pollInterval={2000}/>,
  document.getElementById('content')
);