import React, { Component } from 'react';

export default class PhotosessionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
    render() {
        const listElements = this.props.items.map((item, index)=>{
            return (
                <li key={index} className="photosession-list__item">
                    <img className={'photosession-list__item-image'} src={item.img} alt={'img'}/>
                    <span className={'photosession-list__item-title'}>
                        { item.title }
                      </span>
                </li>
            )
        });
        return(
            <ul className="photosession-list">
                { listElements }
            </ul>
        )
    }
}

