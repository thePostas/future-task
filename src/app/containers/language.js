import React, { Component } from 'react';

export default class Language extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    handleClick(event) {

    }

    render() {
        return (
            <div className="language language_position language_hidden">
                <div className="language__option language__option_first">
                    ru
                </div>
                {/*<div className="language__option language__option_second">*/}
                    {/*en*/}
                {/*</div>*/}
            </div>
        )
    }
}
