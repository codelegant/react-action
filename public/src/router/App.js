/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/25 17:20
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory,browserHistory, Redirect, withRouter } from 'react-router';

const About = ()=><h2>About</h2>;

const Inbox = props=>(
  <div>
    <h2>Inbox</h2>
    <ul>
      <li><Link to="/messages/110?name=laichuanfeng">Message</Link></li>
    </ul>
    {props.children || 'Welcome to your Inbox'}
  </div>
);
const Dashboard = ()=><h2>Welcome to the app!</h2>;

const Message = props=><h3>Message, ID:{props.params.id}, Name:{props.location.query.name}</h3>;

const App = props=>(
  <div>
    <h1>App</h1>
    <ul>
      <li><Link to="/view/about">About</Link></li>
      <li><Link to="/view/inbox">Inbox</Link></li>
      <li><Link to="/view/page">Page</Link></li>
    </ul>
    {props.children}
  </div>
);

class Page extends React.Component {
  componentDidMout() {
    console.log('You have unsaved information, are you sure you want to leave this page?');
  }

  render() {
    return (<div>Staff</div>);
  }
}

const RouterPage = withRouter(Page);

render((
  <Router history={browserHistory}>
    <Route path="/view/app.html"
           component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/view/about"
             component={About} />
      <Route path="/view/page"
             component={RouterPage} />
      <Route path="/view/inbox"
             component={Inbox}>
        <Redirect from="/view/inbox/messages/:id"
                  to="/view/messages/:id" />
      </Route>
      <Route component={Inbox}>
        <Route path="/view/messages/:id"
               component={Message} />
      </Route>
    </Route>
  </Router>
), document.getElementById('container'));

// const routes = {
//   path       : '/',
//   component  : App,
//   indexRoute : {component: Dashboard},
//   childRoutes: [
//     {path: 'about', component: About},
//     {
//       path       : 'inbox',
//       component  : Inbox,
//       childRoutes: [{
//         path   : 'messages/:id',
//         onEnter: ({params}, replace) => replace(`/messages/${params.id}`)
//       }]
//     },
//     {
//       component  : Inbox,
//       childRoutes: [{
//         path: 'messages/:id', component: Message
//       }]
//     }
//   ]
// };
// render(<Router routes={routes} />, document.getElementById('container'));