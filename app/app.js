// var say = require('./component/hello.js');
// say();
// document.write('Hello');

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
    // React.createElement('a',{href: 'http://google.com'},'Click để vào google'),
    <a href="http://google.com">Google</a>,
    document.getElementById('root')
);