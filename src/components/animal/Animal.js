import React, { Component } from 'react'
import dog from "./DogIcon.png"
import './Animal.css'

class Animal extends Component {
    componentDidMount() {
        console.log(`componentDidMount -- Animal ${this.props.animal.id}`)
    }

    render() {
        console.log(`render -- Animal ${this.props.animal.id}`)

        return (
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
            </div>
        )
    }
}

export default Animal