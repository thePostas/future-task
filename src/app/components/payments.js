import React from 'react';
import Language from '../containers/language';
import mcImg from '../img/payments/MC.svg';
import visaImg from '../img/payments/VISA.svg';

export const Payments = () => {
    return (
        <div className="payments payments_position">
            <img src={mcImg} width={39} height={25} alt="img" className="payments__image"/>
            <img src={visaImg} width={39} height={27} alt="img" className="payments__image"/>
            <Language/>
        </div>
    )
};