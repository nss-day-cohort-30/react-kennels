import React, { Component } from 'react';
import { Link } from "react-router-dom"

import house from "./location.png"
import "./Location.css"

export default class LocationList extends Component {
    componentDidMount() {
        console.log("componentDidMount -- LocationList")
    }

    render() {
        console.log("render -- LocationList")
        return (
            <section className="list">
            {
                this.props.locations.map(business =>
                    <div key={business.id} className="card ">
                        <div className="card-body">
                            <h4 className="card-title">
                                <img src={house} className="icon--house" />
                                <Link className="nav-link" to={`/locations/${business.id}`}>
                                    {business.name}
                                </Link>
                            </h4>
                        </div>
                    </div>
                )
            }
            </section>
        );
    }
}
