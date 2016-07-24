/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/19 9:20
 */
import 'whatwg-fetch';
import 'es6-promise';

fetch('./data.json')
    .then(response=> {
      console.log(response.headers.get('Content-Type'));
      console.log(response.headers.get('Date'));
      console.log(response.status);
      console.log(response.statusText);
      console.dir(response);
      return response.json();
    })
    .then(json=> {
      console.info('parsed json', json);
    })
    .catch(ex=> {
      console.info('parsing failed', ex);
    });