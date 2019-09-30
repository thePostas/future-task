import React from 'react';

export const FeedbackItem = props => {
    return (
        <div className={'feedback__item'}>
            <img className="feedback__item-image" src={props.photo || null}/>
            <div className="feedback__item-wrapper">
                <div className="feedback__item-name">
                    { props.name }
                </div>
                <div className={props.profession ? "feedback__item-profession" : "feedback__item-profession_hidden"}>
                    { props.profession }
                </div>
                <div className="feedback__item-rating">
                    <div className="feedback__item-rating-stars">

                    </div>
                    <div className="feedback__item-rating-text">
                        Супер! Я бы заказал съемку снова!
                    </div>
                </div>
                <div className="feedback__item-text">
                    { props.text }
                </div>
                <div className="feedback__item-date">
                    { props.date }
                </div>
            </div>
        </div>
    )
};

FeedbackItem.defaultProps = {
    photo: "",
    name: "Имя фамилия",
    profession: "Профессия",
    rating: 5,
    text: "Отзыв",
    date: "27 Апреля, 2019г."
};