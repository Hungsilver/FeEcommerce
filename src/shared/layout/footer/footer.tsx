import './footer.scss';
import React from 'react'
import FooterAnonymous from './footer_anonymous';

export interface IFooterProps {
    isAdmin: boolean
}
function Footer(props: IFooterProps) {
    return (
        <div className='text-black text-center '>
            {
                props.isAdmin ?
                    <div> Footer Admin</div> :
                    <FooterAnonymous />

            }
        </div>
    )
}

export default Footer