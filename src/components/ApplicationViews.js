import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'

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
import AnimalEditForm from './animal/AnimalEditForm';
import Login from './auth/Login';
import AuthRoute from "./auth/AuthRoute";


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

    updateAnimal = animal => {
        return AnimalManager.updateAnimal(animal)
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

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {
        console.clear()
        console.log("render -- ApplicationViews")
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />

                <AuthRoute path="/" Destination={LocationList}
                           locations={this.state.locations} />

                <AuthRoute path="/animals" Destination={AnimalList}
                           owners={this.state.owners}
                           animalOwners={this.state.animalOwners}
                           dischargeAnimal={this.dischargeAnimal}
                           loadAnimals={this.getAllAnimalsAgain} />

                <AuthRoute path="/animals/:animalId(\d+)" Destination={AnimalDetail}
                           dischargeAnimal={this.dischargeAnimal}
                           animals={this.state.animals} />



                <Route path="/animals/:animalId(\d+)/edit" render={props => {
                    if (this.isOwner()) {
                        return <AnimalEditForm
                                    {...props}
                                    employees={this.state.employees}
                                    updateAnimal={this.updateAnimal}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
                />
                <Route path="/animals/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalForm {...props}
                                    addAnimal={this.addAnimal}
                                    employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList
                                animals={this.state.animals}
                                fireEmployee={this.fireEmployee}
                                employees={this.state.employees}
                                owners={this.state.owners}
                                animalOwners={this.state.animalOwners}
                                />
                    } else {
                        return <Redirect to="/login" />
                    }

                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeDetail
                                    {...props}
                                    fireEmployee={this.fireEmployee}
                                    employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews