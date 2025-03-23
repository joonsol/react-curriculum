import React from 'react'

const Controller = ({ onClickButton, buttonValues }) => {
    return (
        <div>
            {buttonValues.map((value, index) => (
                <button
                    key={index}
                    onClick={() => { onClickButton(value) }}
                >
                    {value>0? `+${value}`:value}
                </button>

            ))}

        </div>
    )
}

export default Controller