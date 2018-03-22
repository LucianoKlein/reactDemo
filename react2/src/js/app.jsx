import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from '../components/header.jsx';

class Index extends React.Component {
   render() {
        return (
            <div>
                <ComponentHeader/>
                <h2>页面主体内容</h2>
            </div>
        )
   } 
}

ReactDOM.render(<Index/>, document.getElementById('app'));