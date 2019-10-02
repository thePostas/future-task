import React from 'react';
import { Payments } from '../payments';

export const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="footer-bottom__inner">
                <Payments/>
                <div className="footer-bottom__info">
                    <a href={"tel:8800700-00-00"} className="footer-bottom__info-support">
                        Тех. поддержка: 8(800)700-00-00
                    </a>
                    <p className="footer-bottom__info-copyright">
                        &copy; 2018 HELYFLY. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    )
};