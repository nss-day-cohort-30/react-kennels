import React, { Component } from 'react'
import "./AnimalList.css"
import Animal from './Animal';


class AnimalList extends Component {
    componentDidMount() {
        console.log("componentDidMount -- AnimalList")
    }

    componentDidUpdate () {
        console.log("componentDidUpdate -- AnimalList")
    }


    render() {
        console.log("render -- AnimalList")
        return (
            <article className="animals">
                {
                    this.props.animals.map(animal =>
                        <Animal key={`animal-${animal.id}`}
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
            </article>
        )
    }
}

export default AnimalList