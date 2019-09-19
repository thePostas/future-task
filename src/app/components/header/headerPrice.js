import React from 'react';

export const HeaderPrice = props => {
    return (
        <div className="header-price">
            <div className="header-price__figure"/>
            <div className="header-price__wrapper">
                <span className="header-price__title">Стоимость:</span>
                <span className={'header-price__cost'}>{ props.price }<span className={'header-price__currency'}>c</span></span>
            </div>
            <div className="header-price__percent">%</div>
        </div>
    )
};


HeaderPrice.defaultProps = {
  price: 1000
};