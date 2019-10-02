import React, { Component } from 'react';

export default class Socials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
    render() {
        const socials = this.props.socials.map((item, index)=> {
            return (
                <a key={index} href={item.link} className={index+1 === this.props.socials.length ? "socials__link socials__link_last" : "socials__link"}>
                    <img
                        src={item.img}
                        width={item.width}
                        height={item.height}
                        alt="img" className="socials__image"
                    />
                </a>
            )
        });
        return (
            <div className="socials">
                { socials }
            </div>
        )
    }
}

Socials.defalutProps = {
    img: null,
    link: '#',
    width: 25.5,
    height: 15.18
};