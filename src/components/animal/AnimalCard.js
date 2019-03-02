import React, { Component } from 'react'
import { Link } from "react-router-dom"
import dog from "./DogIcon.png"
import './Animal.css'

class AnimalCard extends Component {

    componentDidMount() {
        console.log(`componentDidMount -- Animal ${this.props.animal.id}`)
    }

    render() {
        console.log(`render -- Animal ${this.props.animal.id}`)

        return (
            <React.Fragment>
                <div key={this.props.animal.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={dog} className="icon--dog" />
                            <div>{this.props.animal.name}</div>
                            <div className="ownerList">({this.props.owners.join(", ")})</div>
                            <button
                                onClick={() => this.props.dischargeAnimal(this.props.animal.id)}
                                className="card-link">Delete</button>
                        </h5>
                    </div>
                    <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                </div>

            </React.Fragment>
        )
    }
}

export default AnimalCard