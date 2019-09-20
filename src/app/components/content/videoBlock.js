import React, { Component } from 'react';

import videoBlockImage from '../../img/video_block_image.png'

export default class VideoBlock extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            ...props,
        };
        this.ref = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        event.target.className = 'video-block__image video-block__image_hidden';
        this.ref.current.className = 'video-block__iframe video-block__iframe_visible'
    }
    render() {
        return (
            <div className="video-block">
                <iframe ref={this.ref} className="video-block__iframe" width="554" height="374" src="https://www.youtube.com/embed/dUtI5pu22z0" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                </iframe>
                <img className="video-block__image" src={videoBlockImage} alt={'img'} onClick={this.handleClick}/>
            </div>
        )
    }
};