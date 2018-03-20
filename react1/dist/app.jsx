// ReactDOM.render(
//     <div>
//         <ul className="list-group">
//             <li className="list-group-item">asdasd <a className="right glyphicon glyphicon-plus" href="#"></a><a className="right glyphicon glyphicon-remove" href="#"></a></li>
//         </ul>
//     </div>,
//     document.getElementById('container')
// )
//Item
class Item extends React.Component{
    render() {
        return <li className="list-group-item">{this.props.value + this.props.children}
                    <a className="right glyphicon glyphicon-plus" href="#"></a>
                    <a className="right glyphicon glyphicon-remove" href="#"></a>
               </li>
    }
};
//ItemEditor
class ItemEditor extends React.Component{
    render() {
        return <li className="list-group-item">
                    <input className="item-edit" defaultValue={this.props.value}/> 
                    <a className="glyphicon glyphicon-plus" href="#"></a> 
                    <a className="glyphicon glyphicon-remove" href="#"></a> 
                    <a className="right glyphicon glyphicon-plus" href="#"></a>
                    <a className="right glyphicon glyphicon-remove" href="#"></a>
               </li>
    }
}

//List
class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: new Set(),
            editList: new Set()
        }
    }
    
    add() {
        this.state.editList.add({value: ''});
        this.forceUpdate();
    }

    getNonDupID(randomLength) {
        return Number(Math.random().toString().substr(3,randomLength) + Date.now()).toString(36);
    }
    render() {
        const listDOM = [];
        const editListDOM = [];

        for (let item of this.state.list) {
            listDOM.push(<Item key={this.getNonDupID(10)} value={item.value}/>);
        }

        for (let item of this.state.editList) {
            editListDOM.push(<ItemEditor key={this.getNonDupID(10)} value={item.value}/>)
        }

        return <div>
            <button onClick={()=>this.add()} className="btn btn-default">Add</button>
            <ul className="list-group">
                {listDOM}
                {editListDOM}
            </ul>
        </div>
    }
}

ReactDOM.render(
    <List/>,
    document.getElementById('container')
)
