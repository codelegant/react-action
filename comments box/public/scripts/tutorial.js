var CommentBox = React.createClass({
	loadCommentsFromServer:function(){
		$.ajax({
			url:this.props.url,
			dataType:"json",
			cache:false
		}).done((data)=>{
			this.setState({data:data});
		}).fail((xhr)=>{
			console.error(xhr.status);
		});
	},
	handleCommentSubmit:function(comment){
		var comments=this.state.data;
		var newComments=comments.concat([comment]);
		this.setState({data:newComments});
		$.ajax({
			url:this.props.url,
			dataType:"json",
			type:"POST",
			data:comment
		}).done((data)=>{
			this.setState({data:data});
		}).fail((xhr)=>{
			console.error(xhr.status);
		});
	},
	getInitialState:function(){
		return {data:[]};//初始化this.state
	},
	componentDidMount:function(){
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer,this.props.pollInterval);
	},
	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
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
	handleSubmit:function(e){
		e.preventDefault();
		var author=React.findDOMNode(this.refs.author).value.trim();
		var text=React.findDOMNode(this.refs.text).value.trim();
		if(!text||!author){
			return;
		}
		this.props.onCommentSubmit({author:author,text:text});
		// React.findDOMNode(this.refs.author).value="";
		// React.findDOMNode(this.refs.text).value="";
		return;
	},
	render: function() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" ref="author" placeholder="Your name"/>
				<input type="text" ref="text" placeholder="Say something..."/>
				<input type="submit" value="Post"/>
			</form>
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

React.render(
  <CommentBox url="/api/comments" pollInterval={2000}/>,
  document.getElementById('content')
);