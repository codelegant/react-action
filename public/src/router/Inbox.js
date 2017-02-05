/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2017/1/1
 */
import Link from 'react-router/lib/Link';
const Inbox = props => (
  <div>
    <h2>Inbox</h2>
    <ul>
      <li><Link to="/messages/110?name=laichuanfeng"
                activeStyle={{ color: 'red' }}>Message</Link></li>
    </ul>
    {props.children || 'Welcome to your Inbox'}
  </div>
);

// export default Inbox;
module.exports=Inbox;