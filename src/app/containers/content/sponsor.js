import React, { Component } from 'react';
import { Photographer } from '../../components/content/photographer'

export default class Sponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            buttonFirst: 'Читать еще',
            firstShowed: false,
            buttonSecond: 'Читать еще',
            secondShowed: false
        };
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
    }

    handleClick = (block, event) => {
        console.log(event);
        switch (block) {
            case 'first': {
                if (this.state.firstShowed) {
                    this.setState({
                        buttonFirst: 'Читать еще',
                        firstShowed: false
                    });
                } else {
                    this.setState({
                        buttonFirst: 'Скрыть',
                        firstShowed: true
                    });
                }
                break;
            }
            case 'second' : {
                if (this.state.secondShowed) {
                    this.setState({
                        buttonSecond: 'Читать еще',
                        secondShowed: false
                    });
                } else {
                    this.setState({
                        buttonSecond: 'Скрыть',
                        secondShowed: true
                    });
                }
                break;
            }
        }
    };

    render() {
    return(
        <section className="sponsor">
            <div className="sponsor__block sponsor__block_first">
                <Photographer/>
            </div>
            <div className="sponsor__block sponsor__block_second">
                <div className="sponsor__info">
                    <h4 className="sponsor__info-title">
                        Об организаторе:
                    </h4>
                    <p ref={this.ref1} className={this.state.firstShowed ?
                        "sponsor__info-text"
                        : "sponsor__info-text sponsor__info-text_hidden"
                    }>
                        Всем привет! Я фотограф Мария!
                        И по мимо фотосъемки я так же являюсь
                        членом группы экспертов туристической отрасли,
                        которые хорошо разбираются в маркетинге,
                        операциях и услугах обслуживания клиентов,
                        специализирующихся на совместном использовании
                        и частных турах.
                        {'\n'}
                        {'\n'}
                        Сначала мы (я и моя
                        изучаем интересы клиентов,
                        а затем придумываем подходящее решение,
                        которое соответствует бюджету и планам клиента.
                        Мы никогда не зависим от субпоставщиков и не свяжемся…
                        {'\n'}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio dolorem explicabo magnam maiores minus, molestiae nesciunt, quaerat quod ratione, reiciendis sapiente sequi totam? Corporis labore magnam quibusdam rem voluptatibus!
                    </p>
                    <div className="sponsor__info-text-wrapper">
                        <span onClick={this.handleClick.bind(this, 'first')}
                              className= {
                                  this.state.firstShowed ? "sponsor__info-text-show"
                                  :"sponsor__info-text-show sponsor__info-text-show_hidden"
                              }>
                            { this.state.buttonFirst }
                        </span>
                    </div>
                </div>
                <div className="sponsor__additional-info">
                    <h4 className="sponsor__info-title sponsor__additional-info-title">
                        Что я предоставлю:
                    </h4>
                    <p ref={this.ref2} className={this.state.secondShowed
                        ? "sponsor__info-text-additional"
                        : "sponsor__info-text-additional sponsor__info-text-additional_hidden"
                    }>
                        Встречу вас на машине после длительного перелёта.
                        Качественный подбор места и локации для вашей съемки.
                        При необходимости всегда возможно прерваться на обед/ужин.
                        Более 50 фотографий на выходе с обработкой и замечательные впечатления о Дубае !
                        {'\n'}
                        {'\n'}
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Aliquid amet animi consequatur
                        cumque delectus dolorem eveniet harum,
                        inventore ipsum labore natus nisi nostrum,
                        uaerat quod repellat suscipit tempora vel vero.
                    </p>
                    <div className="sponsor__info-text-wrapper">
                        <span onClick={this.handleClick.bind(this, 'second')}
                              className={this.state.secondShowed
                            ? "sponsor__info-text-show"
                            :"sponsor__info-text-show sponsor__info-text-show_hidden"
                        }>
                            { this.state.buttonSecond }
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
    }
}
