import React, { Component } from 'react'
import "./AnimalList.css"
import AnimalCard from './AnimalCard';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class AnimalList extends Component {

    componentDidMount() {
        console.log("componentDidMount -- AnimalList")
    }

    shouldComponentUpdate (nextProps, nextState) {
        if (this.props.animals.length === nextProps.animals.length) {
            toast.warning("No change in state. Not updating", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 1500
            })
            return false
        }
        return true
    }

    componentDidUpdate (prevProps, prevState) {
        console.log("componentDidUpdate -- AnimalList")

        toast.success("Animals Reloaded", {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 1000
        })
    }

    render() {
        console.log("render -- AnimalList")
        return (
            <React.Fragment>
            <ToastContainer className="toastContainer" />
            <div className="centerChildren">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")}
                        }>
                    Admit Animal
                </button>
            </div>
            <article className="animals">
                {
                    this.props.animals.map(animal =>
                        <AnimalCard key={`animal-${animal.id}`}
                            animal={animal}
                            dischargeAnimal={this.props.dischargeAnimal}
                            owners={this.props.owners}
                            animalOwners={this.props.animalOwners}
                            />
                    )
                }
            </article>
            <div className="centerChildren">
                <button onClick={ () => this.props.loadAnimals() }>
                    Reload Animals
                </button>
            </div>
            </React.Fragment>
        )
    }
}

export default AnimalList