/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/25 17:20
 */
import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';
import browserHistory from 'react-router/lib/browserHistory';
import Redirect from 'react-router/lib/Redirect';
import withRouter from 'react-router/lib/withRouter';
import useBasename from 'history/lib/useBasename';

const About = ()=><h2>About</h2>;
const withExampleBasename = history => useBasename(() => history)({basename: `/view`});
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
      <li><IndexLink to="/app.html">Home</IndexLink></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/inbox">Inbox</Link></li>
      <li><Link to="/page">Page</Link></li>
    </ul>
    {props.children}
  </div>
);

class Page extends React.Component {
  componentDidMount() {
    console.log('You have unsaved information, are you sure you want to leave this page?');
  }

  render() {
    return (<div>Staff</div>);
  }
}

const RouterPage = withRouter(Page);

render((
  <Router history={withExampleBasename(browserHistory)}>
    <Route path="/app.html"
           component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/about"
             component={About} />
      <Route path="/page"
             component={RouterPage} />
      <Route path="/inbox"
             component={Inbox}>
        <Redirect from="/inbox/messages/:id"
                  to="/messages/:id" />
      </Route>
      <Route component={Inbox}>
        <Route path="/messages/:id"
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