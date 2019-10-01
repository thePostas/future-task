import React from 'react';

export const FeedbackItem = props => {
    return (
        <div className={'feedback__item'}>
            <div className={'feedback__item-desktop'}>
                <img className="feedback__item-image" src={props.photo || null}/>
                <div className="feedback__item-wrapper">
                    <div className="feedback__item-name">
                        { props.name }
                    </div>
                    <div className={props.profession ? "feedback__item-profession" : "feedback__item-profession_hidden"}>
                        { props.profession }
                    </div>
                    <div className="feedback__item-rating">
                        <div className="feedback__item-rating-stars"/>
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
            <div className="feedback__item-mobile">
                <img className="feedback__item-image" src={props.photo || null}/>
                <div className={'feedback__item-wrapper-mobile'}>
                    <div className="feedback__item-name feedback__item-name_mobile">
                        { props.name }
                    </div>
                    <div className={props.profession ? "feedback__item-profession feedback__item-profession-mobile" : "feedback__item-profession_hidden"}>
                        { props.profession }
                    </div>
                    <div className="feedback__item-rating-stars feedback__item-rating-stars_mobile"/>
                </div>
                <div className="feedback__item-rating-text feedback__item-rating-text_mobile">
                    Супер! Я бы заказал съемку снова!
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