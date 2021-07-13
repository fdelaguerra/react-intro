import React from 'react';

/*
export class Card extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
        {props.value.map(sample) {
            return (
                <div key={sample.order} >
                    <a href={sample.src}>
                        <img src={sample.img} alt={sample.alt}/>
                        <h2>{sample.title}</h2>
                    </a>
                    <p>{sample.description}</p>
                </div>
                )       
            }
        }
        )
        )
    }
}
*/

//what if you replace the div with either an <img /> or <video />
//what if you just use video thumbnail that links to external source, eliminating the need to replace altogether

function Sample(props) {
    return (
        <div>
            <a href={sample.src}>
                <img src={sample.img} alt={sample.alt}/>
                <h2>{sample.title}</h2>
            </a>
            <p>{sample.description}</p>
        </div>
)
}

function Cards(props) {
    return (
        <div className="card">
            {props.value.map(function(sample) {
                return <Sample className="sample" key={sample.order} sample={sample} />;
            })}
        </div>
    )
}
