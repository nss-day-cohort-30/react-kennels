import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import AnimalManager from '../modules/AnimalManager'
import OwnerManager from '../modules/OwnerManager'
import LocationManager from '../modules/LocationManager'
import EmployeeManager from '../modules/EmployeeManager'


class ApplicationViews extends Component {
    state = {
        owners: [],
        animalOwners: [],
        employees: [],
        animals: [],
        locations: []
    }

    dischargeAnimal = (id) => {
        fetch(`http://localhost:5002/animals/${id}`, {
            "method": "DELETE"
        })
        .then(() => fetch("http://localhost:5002/animals"))
        .then(r => r.json())
        .then(animals => this.setState({ animals: animals }))
    }

    fireEmployee = (id) => {
        fetch(`http://localhost:5002/employees/${id}`, {
            "method": "DELETE"
        })
        .then(() => fetch("http://localhost:5002/employees"))
        .then(r => r.json())
        .then(employees => this.setState({ employees: employees }))
    }

    getAllAnimalsAgain =  () => {
        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => this.setState({ animals: animals }))
    }

    componentDidUpdate () {
        console.log("componentDidUpdate -- ApplicationViews")
    }

    componentDidMount() {
        console.log("componentDidMount -- ApplicationViews")
        const newState = {}


        AnimalManager.getAll()
            .then(animals => newState.animals = animals)
            .then(() => EmployeeManager.getAll())
            .then(employees => newState.employees = employees)
            .then(() => LocationManager.getAll())
            .then(locations => newState.locations = locations)
            .then(() => OwnerManager.getAll())
            .then(owners => newState.owners = owners)
            .then(() => fetch("http://localhost:5002/animalOwners")
            .then(r => r.json()))
            .then(animalOwners => newState.animalOwners = animalOwners)
            .then(() => this.setState(newState))
    }

    render() {
        console.clear()
        console.log("render -- ApplicationViews")
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}
                                owners={this.state.owners}
                                animalOwners={this.state.animalOwners}
                                dischargeAnimal={this.dischargeAnimal}
                                loadAnimals={this.getAllAnimalsAgain}
                                />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList
                        fireEmployee={this.fireEmployee}
                        employees={this.state.employees}
                        />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews