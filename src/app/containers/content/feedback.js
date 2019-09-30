import React, { Component } from 'react';
import json from '../../json/feedbacks';
import { FeedbackItem } from '../../components/content/feedbackItem';

export default class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            feedbacks: json
        };
    }

    render() {
        const feedbacksForRender = this.state.feedbacks.users.map((item, index) => {
            let img;
            try {
                img = require(`../../img/user_photos/${index+1}.png`);
            } catch(e) {
                console.log(e.error);
                img = null;
            }
            return <FeedbackItem key={index} photo={img} name={item.name} profession={item.profession} rating={item.rating} text={item.text} date={item.date}/>
        });
        return (
            <section className="feedback">
                <h4 className="feedback__title">
                    Отзывы:
                </h4>
                <div className="feedback__inner">
                    { feedbacksForRender }
                </div>
            </section>
        )
    }
}