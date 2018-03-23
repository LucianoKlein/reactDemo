import React from 'react';
import BodyChild from '../components/bodychild.jsx';
export default class BodyIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Parry",
            age: "18"
        };
    }

    changeUserInfo() {
        this.setState({
            age: 50
        });
    }

    handleChildValueChange(event) {
        this.setState({age: event.target.value});
    }
    render() {

        return (
            <main>
                <h1>页面的主体内容</h1>
                <p>{this.state.age}</p>
                <input type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
                <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </main>
        )
    }
}