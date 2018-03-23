import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from '../components/header.jsx';
import IndexBody from '../components/indexBody.jsx';
import Footer from '../components/footer.jsx';

class Index extends React.Component {

    componentWillMount() {
        //定义你的逻辑就可以了
        console.log("Index - componentWillMount");
    }

    componentDidMount() {
        console.log("Index - componentDidMount");
    }

    render() {
        return (
            <div>
                <ComponentHeader/>
                <IndexBody userid={123} />
                <Footer/>
            </div>
        )
   } 
}

ReactDOM.render(<Index/>, document.getElementById('app'));