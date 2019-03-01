import React, { Component } from "react"
import "../animal/Animal.css"
import dog from "../animal/DogIcon.png"


export default class EmployeeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const employee = this.props.employees.find(a =>
            a.id === parseInt(this.props.match.params.employeeId))
             || {id:404, name:"404", breed: "Employee not found"}

        return (
            <section className="animal">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={dog} className="icon--dog" />
                            {employee.name}
                        </h4>
                        <button
                            onClick={() =>
                                this.props.fireEmployee(employee.id)
                                    .then(() => this.props.history.push("/employees"))
                            }
                            className="card-link">Terminate Employment</button>
                    </div>
                </div>
            </section>
        )
    }
}