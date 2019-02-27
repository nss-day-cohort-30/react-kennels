import React, { Component } from 'react'
import "./AnimalList.css"
import Animal from './Animal';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class AnimalList extends Component {
    componentDidMount() {
        console.log("componentDidMount -- AnimalList")
    }

    componentDidUpdate (prevProps, prevState) {
        console.log("componentDidUpdate -- AnimalList")
        if (JSON.stringify(this.props.animals.length) === JSON.stringify(prevProps.animals.length)) {
            toast.info("Animals Reloded", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 1000
            });
        }
    }


    render() {
        console.log("render -- AnimalList")
        return (
            <article className="animals">
                <ToastContainer className="toastContainer" />
                <button onClick={
                    () => this.props.loadAnimals()
                }>Reload Animals</button>
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