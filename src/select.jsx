import React from 'react';

export class Select extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let type = e.target.value;
        this.props.onChange(type);
    }

    render() {
        return (
            <div id="select">
                <label htmlFor="ctype"> Select Content Type:
                
                    <select name="ctype" id="ctype" onChange={this.handleChange}>
                        <option value="blank">Please select a content type</option>
                        <option value="writingSamples">writing</option>
                        <option value="videoSamples">video</option>
                        <option value="webSamples">web</option>
                        
                    </select>
                </label>
            </div>
        )
    }
}

