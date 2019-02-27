import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'


class ApplicationViews extends Component {
    state = {
        owners: [],
        animalOwners: [],
        employees: [],
        animals: [],
        locations: []
    }

    componentDidUpdate () {
        console.log("componentDidUpdate -- ApplicationViews")
    }

    componentDidMount() {
        console.log("componentDidMount -- ApplicationViews")
        const newState = {}

        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/locations")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/owners")
            .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => fetch("http://localhost:5002/animalOwners")
            .then(r => r.json()))
            .then(animalOwners => newState.animalOwners = animalOwners)
            .then(() => this.setState(newState))
            .then(() => this.setState(newState))
    }

    render() {
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
                                />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews