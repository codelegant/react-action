/**
 * Author: 赖传峰
 * Email: laichuanfeng@hotmail.com
 * Homepage: http://laichuanfeng.com/
 * Date: 2016/7/16
 */
import React,{Component,PropTypes} from 'react';

export class PropValid extends Component {
  static propTypes = {
    //属性验证
    invalidData: PropTypes.array,
    span       : PropTypes.element.isRequired
  };
  static defaultProps = {
    //默认属性
    defaultProp: 'laichuanfeng'
  };

  render() {
    return (<p>Prop Valid
      {this.props.defaultProp && this.props.defaultProp}
      {this.props.span}
      {this.props.name}
    </p>);
  }
}

export class TransferProp extends Component {
  render() {
    return <a {...this.props}>Click</a>;
  }
}

let SetIntervalMixin = {
  componentWillMount(){
    this.intervals = [];
  },
  setInterval(){
    this.intervals.push(setInterval.apply(null.arguments));
  },
  componentWillUnmount(){
    this.intervals.map(clearInterval);
  }
};

export class TickTock extends Component {
  constructor() {
    super();
    this.state = { seconds: 0 };
    this.tick = this.tick.bind(this);
  }

  static mixin = [SetIntervalMixin];

  componentDidMount() {
    this.setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  render() {
    return (<p>
      React has been runing for {this.state.seconds} seconds.
    </p>);
  }

}