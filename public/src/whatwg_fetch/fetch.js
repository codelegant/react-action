/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/19 9:20
 */
import 'whatwg-fetch';

fetch('data.json')
    .then(res=> {
      res.json();
      console.log(res.json());
    })
    .then(json=> {
      console.log('parsed json', json);
    })
    .catch(ex=> {
      console.log('parsing failed', ex);
    });