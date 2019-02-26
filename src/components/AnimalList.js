import React, { Component } from 'react'
import "./AnimalList.css"
import AnimalOwners from './AnimalOwners';
import Animal from './Animal';


class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
                <h1>Animals</h1>
                {
                    this.props.animals.map(animal =>
                        <Animal key={animal.id}
                            animal={animal}
                            owners={
                                this.props.animalOwners
                                    .filter(ao => ao.animalId === animal.id)
                                    .map(ao =>
                                        this.props.owners.find(
                                            o => o.id === ao.ownerId
                                        ).name
                                    )
                            } />
                    )
                }
            </section>
        )
    }
}

export default AnimalList