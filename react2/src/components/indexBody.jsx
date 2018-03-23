import React from 'react';
export default class BodyIndex extends React.Component {
    componentWillMount() {
        //定义你的逻辑就可以了
        console.log("BodyIndex - componentWillMount");
    }

    componentDidMount() {
        console.log("BodyIndex - componentDidMount");
    }

    render() {
        let userName = '';
        let boolInput = false;
        //comments 
        let html = "hah&nbsp;aha";
        return (
            <main>
                <h1>这里是Body</h1>
                <p>{userName === '' ? '用户还没有登录' : '用户名:' + userName}</p>
                <p><input type='button' value="默认按钮" disabled={boolInput}/></p>
                {/*我是注释*/}
                <p>{html}</p>
                <p dangerouslySetInnerHTML = {{__html : html}}></p>
            </main>
        )
    }
}