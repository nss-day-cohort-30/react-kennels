import React, { Component } from 'react'
import { Link } from "react-router-dom"


class EmployeeList extends Component {
    componentDidMount() {
        console.log("componentDidMount -- EmployeeList")
    }
    render() {
        console.log("render -- EmployeeList")
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        <Link className="nav-link" to={`/employees/${employee.id}`}>
                            {employee.name}
                            <button onClick={() => {
                                    this.props.fireEmployee(employee.id)
                                }}
                            >Fire</button>
                        </Link>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList