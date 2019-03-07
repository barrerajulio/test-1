import React, { Component } from 'react';

/**
 * @class ListComponent
 * @extends {Component}
 */
class ListComponent extends Component {
    public render(): React.ReactNode {
        return (
            <div className="item">
                <h3 className="name">Antonio</h3>
            </div>
        );
    }
}

export default ListComponent;
