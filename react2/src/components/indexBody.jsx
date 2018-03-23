import React from 'react';
import BodyChild from '../components/bodychild.jsx';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins.jsx'
const defaultProps = {
    username: '这是一个默认值'
}
export default class BodyIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Parry",
            age: "18"
        };
    }

    changeUserInfo() {
        MixinLog.log();
    }

    handleChildValueChange(event) {
        this.setState({age: event.target.value});
    }
    render() {

        return (
            <main>
                <h1>页面的主体内容</h1>
                <p>接收到父页面的属性 userid: {this.props.userid} username: {this.props.username} </p>
                <p>age: {this.state.age}</p>
                <input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
                <BodyChild {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </main>
        )
    }
}

BodyIndex.propTypes = {
    userid: PropTypes.number.isRequired,
    username: PropTypes.string
};

BodyIndex.defaultProps = defaultProps;
ReactMixin(BodyIndex.prototype, MixinLog);
