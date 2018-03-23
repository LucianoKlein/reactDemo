import React from 'react';
export default class BodyIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Parry",
            age: "18"
        };
    }

    render() {
        setTimeout(()=>{
            this.setState({
                username: "Mooc",
                age: "30"
            });
        }, 4000);
        return (
            <main>
                <h1>页面的主体内容</h1>
                <p>{this.props.userid}</p>
            </main>
        )
    }
}