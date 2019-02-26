import React, { Component } from 'react';
import EmployeeList from './EmployeeList';
import LocationList from './LocationList';
import "./Kennel.css"
import AnimalList from './AnimalList';

export default class Kennel extends Component {

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Spot" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Rover" },
        { id: 4, name: "Snickers" },
        { id: 5, name: "Seymour" }
    ]

    animalOwners = [
        { id: 1, animalId: 1, ownerId: 5 },
        { id: 2, animalId: 2, ownerId: 3 },
        { id: 3, animalId: 3, ownerId: 1 },
        { id: 4, animalId: 4, ownerId: 2 },
        { id: 5, animalId: 5, ownerId: 4 },
        { id: 6, animalId: 5, ownerId: 6 },
    ]

    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    state = {
        owners: this.ownersFromAPI,
        animalOwners: this.animalOwners,
        employees: this.employeesFromAPI,
        animals: this.animalsFromAPI,
        locations: this.locationsFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <h1>Student Kennels</h1>
                {/*
                    function AnimalList (animals, owners, animalOwners) {
                        return ` <html ${stuff}> `
                    }

                    AnimalList(this.state.animals,
                        this.state.owners,
                        this.state.animalOwners)
                */}
                <AnimalList animals={this.state.animals}
                    owners={this.state.owners}
                    animalOwners={this.state.animalOwners}
                     />
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
            </React.Fragment>
        );
    }
}