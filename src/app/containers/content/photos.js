import React, { Component } from 'react';

import photo1 from '../../img/photos/1.png'
import photo2 from '../../img/photos/2.png'
import photo3 from '../../img/photos/3.png'
import photo4 from '../../img/photos/4.png'
import photo5 from '../../img/photos/5.png'
import photo6 from '../../img/photos/6.png'
import photo7 from '../../img/photos/7.png'
import photo8 from '../../img/photos/8.png'
import photo9 from '../../img/photos/1.png'
import photo10 from '../../img/photos/2.png'
import photo11 from '../../img/photos/3.png'
import photo12 from '../../img/photos/4.png'
import photo13 from '../../img/photos/5.png'
import photo14 from '../../img/photos/6.png'
import photo15 from '../../img/photos/7.png'
import photo16 from '../../img/photos/8.png'

const photosArr = [photo1, photo2, photo3, photo4,  photo5,  photo6,  photo7,  photo8,  photo9,  photo10,  photo11,  photo12,  photo13,  photo14,  photo15,  photo16];

export default class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            text: 'Показать все фото'
        };
        this.handleClick = this.handleClick.bind(this);
        this.ref = React.createRef();
    }

    handleClick = (event) => {
        if (this.ref.current.className === 'photos__content photos__content_hidden') {
            this.ref.current.className = 'photos__content';
            this.setState({text: 'Скрыть фотографии'});
            event.target.className = 'photos__show-hide-title photos__show-hide-title_showed';
        } else {
            this.ref.current.className = 'photos__content photos__content_hidden';
            this.setState({text: 'Показать все фото'});
            event.target.className = 'photos__show-hide-title';
        }
    };

    render() {
        const photos = photosArr.map((item, index) => {
            return <img key={index} src={item} alt="photo" className="photos__image"/>
        });
        return (
            <section className="photos">
                <h3 className="photos__title">Фотографии пакета:</h3>
                <div className="photos__content photos__content_hidden" ref={this.ref}>
                    { photos }
                </div>
                <div className="photos__show-hide">
                    <span className="photos__show-hide-title" onClick={this.handleClick}>
                        { this.state.text }
                    </span>
                </div>
            </section>
        )
    }
}