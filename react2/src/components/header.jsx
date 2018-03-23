import React from 'react';

export default class ComponentHeader extends React.Component {


    render() {
        const styleComponentHeader = {
            header: {
                backgroundColor: "#333333",
                color: "#FFFFFF",
                "padding-top": "15px",
                paddingBottom: "15px"
            }
        };

        return (
            <header style={styleComponentHeader.header}>
                <h1>这里是头部</h1>
            </header>
        )
    }
}

