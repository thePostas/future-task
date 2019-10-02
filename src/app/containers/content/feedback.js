import React, { Component } from 'react';
import json from '../../json/feedbacks';
import FeedbackItem from '../../components/content/feedbackItem';

export default class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            feedbacks: json,
        };
        this.ref = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(length, event) {
        if (event.target.className === "feedback__button") {
            event.target.className = "feedback__button feedback__button_hidden";
            event.target.innerHTML = "Скрыть";
            this.ref.current.className = "feedback__inner";
        } else {
            event.target.className = "feedback__button";
            event.target.innerHTML = `Показать все (${length})`;
            this.ref.current.className = "feedback__inner feedback__inner_hidden";
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
                <div ref={this.ref} className="feedback__inner feedback__inner_hidden">
                    { feedbacksForRender }
                </div>
                <div className="feedback__button" onClick={this.handleClick.bind(this, feedbacksForRender.length)}>
                    {feedbacksForRender.length > 3 ? `Показать все (${feedbacksForRender.length})` : null}
                </div>
            </section>
        )
    }
}