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

        const ownerStringArray = this.props.animalOwners
            .filter(ao => ao.animalId === this.props.animal.id)
            .map(ao =>
                this.props.owners.find(
                    o => o.id === ao.ownerId
                ).name
            )

        return (
            <React.Fragment>
                <div key={this.props.animal.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={dog} className="icon--dog" />
                            <div>{this.props.animal.name}</div>
                            <div className="ownerList">({ownerStringArray.join(", ")})</div>
                            {
                                (this.props.hasOwnProperty("dischargeAnimal"))
                                    ? <button
                                        onClick={() => this.props.dischargeAnimal(this.props.animal.id)}
                                        className="card-link">Delete</button>
                                    : null
                            }

                        </h5>
                    </div>
                    <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                </div>

            </React.Fragment>
        )
    }
}

export default AnimalCard