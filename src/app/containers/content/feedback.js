import React, { Component } from 'react';
import json from '../../json/feedbacks';
import FeedbackItem from '../../components/content/feedbackItem';

export default class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            feedbacks: json,
            isShowed: false,
            buttonText: ""
        };
        this.ref = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(length) {
        console.log(this.state);
        if (this.state.isShowed) {
            this.setState({
                isShowed: false,
                // buttonText: `Показать все ${this.state.buttonText} (${length})`
            });
        } else {
            this.setState({
                isShowed: true,
                // buttonText: "Скрыть"
            });
        }
    };

    render() {
        console.log(this.state.height);
        const feedbacksForRender = this.state.feedbacks.users.map((item, index) => {
            let img;
            try {
                img = require(`../../img/user_photos/${index+1}.png`);
            } catch(e) {
                console.log(e.error);
                img = null;
            }
            return <FeedbackItem key={index} id={index+1} photo={img} name={item.name} profession={item.profession} rating={item.rating} text={item.text} date={item.date}/>
        });
        return (
            <section className="feedback">
                <h4 className="feedback__title">
                    Отзывы:
                </h4>
                <div ref={this.ref} className={this.state.isShowed
                    ? "feedback__inner"
                    : "feedback__inner feedback__inner_hidden"
                }>
                    { feedbacksForRender }
                </div>
                <div className={this.state.isShowed
                    ? "feedback__button"
                    : "feedback__button feedback__button_hidden"}
                     onClick={this.handleClick.bind(this, feedbacksForRender.length)
                     }>
                    {
                        this.state.isShowed
                            ? "Скрыть"
                            : `Показать все ${feedbacksForRender.length > 3
                            ? `(${feedbacksForRender.length})`
                            : null}`
                    }
                </div>
            </section>
        )
    }
}