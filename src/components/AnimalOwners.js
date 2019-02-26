import React, { Component } from 'react'

class AnimalOwners extends Component {
    render() {

        return (
            <section>
                {
                    this.props.animalOwners.map(ao =>
                        <div>
                            {
                                this.props.owners.find(
                                    o => o.id === ao.ownerId
                                ).name

                            }
                        </div>
                    )
                }
            </section>
        )
    }
}

export default AnimalOwners