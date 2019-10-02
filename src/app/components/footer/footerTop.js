import React from 'react';
import { Logo } from '../logo';
import Socials from '../../containers/socials';
import Language from '../../containers/language';

import socialIcon1 from '../../img/socials/vk.svg';
import socialIcon2 from '../../img/socials/Facebook.svg';
import socialIcon3 from '../../img/socials/Instragram.svg';

const socialsArr = [
    {
        img: socialIcon1,
        link: '#',
        width: 25.5,
        height: 15.18
    },
    {
        img: socialIcon2,
        link: '#',
        width: 25,
        height: 25
    },
    {
        img: socialIcon3,
        link: '#',
        width: 25,
        height: 25.5
    },
];

export const FooterTop = () => {
    return (
        <div className="footer-top">
            <div className="footer-top__inner">
                <Logo/>
                <div className="footer-top__links">
                    <Socials socials={socialsArr}/>
                    <Language/>
                </div>
            </div>
        </div>
    )
};