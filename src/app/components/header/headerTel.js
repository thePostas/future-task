import React from 'react';

export const HeaderTel = props => {
    return (
        <span className={'telephone header__telephone'}>
            Телефон:
            <a className={'telephone__link'} href={'tel: 88001231212'}>
                { props.children }
            </a>
        </span>
    )
};

HeaderTel.defaultProps = {
  children: '8(888)-888-88-88'
};