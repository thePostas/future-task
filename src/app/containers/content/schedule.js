import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import { ScheduleItem } from '../../components/content/scheduleItem';
import { PhotosessionFeedback } from '../../components/content/photosessionFeedback';

export class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            date: new Date()
        };
        this.onChange = date => this.setState({ date });
        this.monthToRus = {Jan: "января", Feb: "февраля", Mar: "марта", Apr: "апреля", May: "мая", Jun: "июня", Jul: "июля", Aug: "августа", Sep: "сентября", Oct: "октября", Nov: "ноября", Dec: "декабря"};
        this.day = {Mon: "Понедельник", Tue: "Вторник", Wed: "Среда", Thu: 'Четверг', Fri: "Пятница", Sat: "Суббота", Sun: "Воскресенье"};
        this.photosessions = [
            {
                time: '15:00 - 18:00',
                price: 1500,
                count: 'Осталось — 1 место'
            },
            {
                time: '19:00 - 22:00',
                price: 1500,
                count: 'Осталось — 1 место'
            }
        ]
    }
    render() {
        const renderDate = this.state.date.toString().split(' ');
        const photosessions = this.photosessions.map((item, index) => {
            return <ScheduleItem key={index} time={item.time} price={item.price} count={item.count}/>
        });
        return(
            <section className="schedule">
                <h3 className="schedule__title">
                    Доступная съемка
                    {'\n'}
                    в ближайшее время:
                </h3>
                <div className="schedule__table">
                    <div className="schedule__table-section schedule__table-calendar">
                  <span className={'schedule__table-calendar-date'}>
                      {`${this.day[renderDate[0]]}, ${renderDate[2]} ${this.monthToRus[renderDate[1]]}`}
                  </span>
                        <DatePicker
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </div>
                    { photosessions }
                    <div className="schedule__table-section">
                        <PhotosessionFeedback/>
                    </div>
                </div>
            </section>
        )
    }
}