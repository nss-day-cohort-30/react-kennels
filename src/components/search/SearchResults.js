import React, { Component } from "react"
import Animal from "../animal/Animal";
import EmployeeList from "../employee/EmployeeList";
import LocationList from "../location/LocationList";


export default class SearchResults extends Component {

    displayLocations = () => {
        if (this.props.location.state.locations.length) {
            return (
            <React.Fragment>
                <h3>Matching Locations</h3>
                <LocationList locations={this.props.location.state.locations} />
            </React.Fragment>
            )
        }
    }

    displayEmployees = () => {
        if (this.props.location.state.employees.length) {
            return (
            <React.Fragment>
                <h3>Matching Employees</h3>
                <EmployeeList employees={this.props.location.state.employees} />
            </React.Fragment>
            )
        }
    }

    displayAnimals = () => {
        if (this.props.location.state.animals.length) {
            return (
            <React.Fragment>
                <h3>Matching Animals</h3>
                <ul>
                {
                    this.props.location.state.animals.map(item => <Animal animal={item} key={item.id}/>)
                }
                </ul>
            </React.Fragment>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.displayLocations()}
                {this.displayEmployees()}
                {this.displayAnimals()}
            </React.Fragment>
        )
    }
}
