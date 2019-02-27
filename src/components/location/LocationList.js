import React, { Component } from 'react';

export default class LocationList extends Component {
    componentDidMount() {
        console.log("componentDidMount -- LocationList")
    }

    render() {
        console.log("render -- LocationList")
        return (
            <article>
                <section>
                    <h2>Nashville North</h2>
                    <div>
                        1000 Infinity Way
                    </div>
                </section>
                <section>
                    <h2>Nashville South</h2>
                    <div>
                        555 Demonbreun Drive
                    </div>
                </section>
            </article>
        );
    }
}
