//Доступная фотосессия
import React from 'react';

export const ScheduleItem = props => {
    return (
        <div className="schedule__table-section schedule__table-item">
            <div className="schedule__table-item-wrapper">
                <span className="schedule__table-item-time">
                    { props.time }
                </span>
                <span className="schedule__table-item-price">
                    { props.price }
                    <span className="schedule__table-item-price-currency">
                        c
                    </span>
                </span>
                <span className="schedule__table-item-count">
                    { props.count }
                </span>
            </div>
            <div className="schedule__table-item-choose">
                <span className={'schedule__table-item-choose-title'}>Выбрать</span>
            </div>
        </div>
    )
};

ScheduleItem.defaultProps = {
    time: 'Время',
    price: 'Цена',
    count: 'Количество'
};