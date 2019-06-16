import React, { Component } from 'react'
import { Link } from "react-router-dom"
import dog from "./DogIcon.svg"
import './Animal.css'

class AnimalCard extends Component {

    componentDidMount() {
        console.log(`componentDidMount -- Animal ${this.props.animal.id}`)
    }

    render() {
        console.log(`render -- Animal ${this.props.animal.id}`)

        const ownerStringArray = this.props.animalOwners
            .filter(ao => ao.animalId === this.props.animal.id)
            .map(ao => this.props.owners.find( o => o.id === ao.ownerId ).name)

        return (
            <React.Fragment>
                <div key={this.props.animal.id} className="card animal">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={dog} className="icon--dog" />
                            <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>
                                { this.props.animal.name }
                            </Link>
                            <div className="ownerList">({ownerStringArray.join(", ")})</div>
                            <section className="btn-bar">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    onClick={() => {
                                        this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                                    }}
                                    >
                                    Edit
                                </button>

                                {
                                    (this.props.hasOwnProperty("dischargeAnimal"))
                                        ? <button
                                            onClick={() => this.props.dischargeAnimal(this.props.animal.id)}
                                            className="btn btn-secondary btn-sm">Delete</button>
                                        : null
                                }
                            </section>
                        </h5>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default AnimalCard