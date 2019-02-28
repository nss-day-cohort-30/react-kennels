import React, { Component } from 'react'


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
                        {employee.name}
                        <button onClick={() => {
                                this.props.fireEmployee(employee.id)
                            }}
                        >Fire</button>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList