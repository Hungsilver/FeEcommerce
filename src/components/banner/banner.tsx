import React from 'react'

function Banner(props: { image: string }) {
    return (
        <div>
            <img src={props.image} alt="banner" />
        </div>
    )
}

export default Banner