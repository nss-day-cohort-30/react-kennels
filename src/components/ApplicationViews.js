import { Route } from 'react-router-dom'
import React, { Component } from "react"

import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'

import AnimalDetail from './animal/AnimalDetail';
import EmployeeDetail from './employee/EmployeeDetail';

import AnimalManager from '../modules/AnimalManager'
import OwnerManager from '../modules/OwnerManager'
import LocationManager from '../modules/LocationManager'
import EmployeeManager from '../modules/EmployeeManager'
import AnimalForm from './animal/AnimalForm';


class ApplicationViews extends Component {
    state = {
        owners: [],
        animalOwners: [],
        employees: [],
        animals: [],
        locations: []
    }

    dischargeAnimal = (id) =>
        AnimalManager.delete(id)
            .then(AnimalManager.getAll)
            .then(animals => this.setState({ animals: animals }))

    addAnimal = animal => {
        return AnimalManager.addAnimal(animal)
            .then(() => AnimalManager.getAll())
            .then(animals =>
                this.setState({
                    animals: animals
                })
            )
    }

    fireEmployee = (id) =>
        EmployeeManager.delete(id)
            .then(EmployeeManager.getAll)
            .then(employees => this.setState({ employees: employees }))

    getAllAnimalsAgain = () =>
        AnimalManager.getAll().then(animals => this.setState({ animals: animals }))


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
                <Route exact path="/animals" render={(routePropertyObject) => {
                    return <AnimalList animals={this.state.animals}
                                owners={this.state.owners}
                                animalOwners={this.state.animalOwners}
                                dischargeAnimal={this.dischargeAnimal}
                                loadAnimals={this.getAllAnimalsAgain}
                                {...routePropertyObject}
                                />
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    console.log(props)
                    return <AnimalDetail
                        {...props}
                        dischargeAnimal={this.dischargeAnimal}
                        animals={this.state.animals} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                                    addAnimal={this.addAnimal}
                                    employees={this.state.employees} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList
                    fireEmployee={this.fireEmployee}
                    employees={this.state.employees}
                    />
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail
                        {...props}
                        fireEmployee={this.fireEmployee}
                        employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews