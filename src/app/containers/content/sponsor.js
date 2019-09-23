import React, { Component } from 'react';

export default class Sponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
    render() {
    return(
        <section className="sponsor">
            <div className="sponsor__block">

            </div>
            <div className="sponsor__block">

            </div>
        </section>
    )
    }
}
