import React from 'react'

export const WrapperComponent = (props) => {
    return (
        <div>
            <h1>EveryThing is Wrapped inside this Div</h1>
            {props.children}
        </div>
    )
}
