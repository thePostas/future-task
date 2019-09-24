import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

export class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            date: new Date()
        };
        this.onChange = date => this.setState({ date });
        this.monthToRus = {Jan: "января", Feb: "февраля", Mar: "марта", Apr: "апреля", May: "мая", Jun: "июня", Jul: "июля", Aug: "августа", Sep: "сентября", Oct: "октября", Nov: "ноября", Dec: "декабря"};
        this.day = {Mon: "Понедельник", Tue: "Вторник", Wed: "Среда", Thu: 'Четверг', Fri: "Пятница", Sat: "Суббота", Sun: "Воскресенье"}
    }
    render() {
        console.log(this.state.date);
        const renderDate = this.state.date.toString().split(' ');
        return(
            <section className="schedule">
                <h3 className="schedule__title">
                    Доступная съемка в ближайшее время:
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
                    <div className="schedule__table-section schedule__table-section_first">

                    </div>
                    <div className="schedule__table-section schedule__table-section_second">

                    </div>
                </div>
            </section>
        )
    }
}