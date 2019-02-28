import React, { Component } from 'react'

class Animal extends Component {
    render() {

        return (
            <section className="animal">
                <div>
                    { this.props.animal.name }
                </div>
                <div>
                    { (this.props.owners) ? this.props.owners.join(", ") : "None" }
                </div>
            </section>
        )
    }
}

export default Animal