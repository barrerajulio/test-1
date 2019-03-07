import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @class ListComponent
 * @extends {Component}
 */
class ListComponent extends Component {
    static propTypes: any;

    /**
     * @memberof ListComponent
     */
    public render(): React.ReactNode {
        return (
            <div className="container-row list-rows">
            {(this.props as any).items.map((item: any, i: number) => {     
                return (
                    <div className="list-item" key={i}>
                        <h5>{i + 1}. { item.name }</h5>
                        <div className="detail">
                            <div className="country">
                                <i className="fa fa-map-marker"></i>&nbsp;
                                { item.country }
                            </div>
                            <div className="country">
                                <i className="fa fa-phone-volume"></i>&nbsp;
                                { item.phone }
                            </div>
                            <div className="country">
                                <i className="fa fa-at"></i>&nbsp;
                                { item.email }
                            </div>
                        </div>
                    </div>
                ) 
             })}
             </div>
        );
    }
}

ListComponent.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            country: PropTypes.string,
            name: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string
        })
    )
};

export default ListComponent;
