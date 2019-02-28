import React, { Component } from 'react'

class Animal extends Component {
    componentDidMount() {
        console.log(`componentDidMount -- Animal ${this.props.animal.id}`)
    }

    render() {
        console.log(`render -- Animal ${this.props.animal.id}`)

        return (
            <section className="animal">
                <div>
                    { this.props.animal.name }
                    <button onClick={() => {
                        this.props.dischargeAnimal(this.props.animal.id)
                    }}
                    >Discharge</button>
                </div>
                <div>
                    { this.props.owners.join(", ") }
                </div>
            </section>
        )
    }
}

export default Animal