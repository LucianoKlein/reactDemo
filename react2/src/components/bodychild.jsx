import React from 'react';
import ReactDOM from 'react-dom';

export default class BodyChild extends React.Component {
    render() {
        return (
            <div>
                <p>子页面输入: <input type="text" onChange={this.props.handleChildValueChange}/></p>
                <p>username: {this.props.username}, userid: {this.props.userid}</p>
            </div>
        )
    }

}