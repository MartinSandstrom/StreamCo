import React from 'react';
import {render} from 'react-dom';
export default class ProductComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-sm-4 col-lg-2 d-flex align-items-stretch mb-3">
                <div className="card">
                    <img className="img-fluid" src={this.props.imageUrl} alt={'image url'}/>
                    <div className="card-body">
                        <h6 className="card-title">{this.props.title}</h6>
                    </div>
                </div>
            </div>
        );
    }
}
