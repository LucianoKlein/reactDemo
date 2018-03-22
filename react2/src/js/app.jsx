import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from '../components/header.jsx';
import IndexBody from '../components/indexBody.jsx';
import Footer from '../components/footer.jsx';


class Index extends React.Component {
   render() {
        return (
            <div>
                <ComponentHeader/>
                <IndexBody/>
                <Footer/>
            </div>
        )
   } 
}

ReactDOM.render(<Index/>, document.getElementById('app'));