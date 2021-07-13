import React from 'react';
//import { Card } from './Card';
//import ContentSamples from './objects.js';

//try writing the const name as target.value for the select and have function there use the returned string as a parameter to set the State

export class Select extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.changeType(e.target.value);
    }

    render() {
        return (
            <div id="select">
                <label htmlFor="ctype"> {"Select Content Type: "}
                
                    <select name="ctype" id="ctype" onChange={this.handleChange}>
                        <option value="blank">Please select a content type</option>
                        <option value="0">writing</option>
                        <option value="1">video</option>
                        <option value="2">podcast</option>
                        
                    </select>
                </label>
            </div>
        )
    }
}

const contentSamples = [
    /*blank :
    {
        "id": "blank",
        "title": "Please choose a content type",
        "src": "",
        "img": "https://placekitten.com/400/225",
        "alt": "alternate description",
        "description": "Choose a content type to see a sample of my work.",
        "order": 0
    }
    */
 //"writingSamples" : 
[
    {
        "id": "hypoxia",
        "title": "The Gulf Dead Zone: Smaller Measurement Doesn’t Hide Big Problem",
        "src": "https://www.floridamuseum.ufl.edu/earth-systems/blog/the-gulf-dead-zone-smaller-measurement-doesnt-hide-big-problem/",
        "img": "hypoxia.jpg",
        "alt": "eutrophic zone in the gulf of mexico",
        "description": "The dead zone in the Northern Gulf of Mexico did not reach its record-setting prediction this year, but scientists are still concerned that the measurement may not paint the full picture of the problem.",
        "order": 0
    },
    {
        "id": "coral",
        "title": "Why Some Florida Coral is Rejecting a Potentially Life Saving Partnership",
        "src": "https://www.floridamuseum.ufl.edu/earth-systems/blog/why-some-florida-coral-is-rejecting-a-potentially-life-saving-partnership/",
        "img": "coral.jpg",
        "alt": "diver studying coral",
        "description": "With so many threats to reef survival, scientists are investigating why reefs are rejecting one species of zooxanthellae, Durusdinium trenchii.",
        "order": 1 
    },
    {
        "id": "animals",
        "title": "With Florida Iconic Species Under Threat, Officials Look to Reduce Protections",
        "src":"https://www.floridamuseum.ufl.edu/earth-systems/blog/with-florida-iconic-species-under-threat-officials-look-to-reduce-protections/",
        "img": "panther.jpg",
        "alt": "panther",
        "description": "Threats to Florida’s native plants and animals made headlines—at the same time that officials are pushing to reduce protections for vulnerable species. Against the trend, however, one marine creature gives signs of hope.",
        "order": 2 
}]
,
 //"videoSamples" :
[
    {
        "id": "who",
        "src": "/graphics/Who_Am_I.mp4",
        "img": "shades.jpg",
        "alt": "reflection of me in sunglasses",
        "title": "Who Am I?",
        "description": "A project for a digital storytelling class, this video describes my experiences growing up as an Ecuadorian-American and explores the search for my own identity.",
        "order": 0
    },
    {
        "id": "languages",
        "src": "https://www.youtube.com/embed/h7BAtudGwJg",
        "img": "Gate-NC-1.jpg",
        "alt": "a japanese gate",
        "title": "Hello",
        "description": "This video was a project for a digital storytelling class, exploring why we tend to gravitate towards people like us, why we might benefit from interacting with people from other cultures and the benefits of learning a new language.",
        "order": 1
    },
    {
        "id": "narrative",
        "src": "https://youtu.be/keA6DKuAkB8",
        "title": "Do it for Mom...: A Short Narrative Film",
        "description": "A project for a fundamentals of production class, this video was a short narrative film without any dialogue.",
        "order": 2
    }
]
,
[
    {
        "id": "podcast",
        "src": "https://www.youtube.com/embed/tHJKZDvH9hw",
        "img": "fire-1.jpg",
        "alt": "Bonfire",
        "title": "From the Ashes: Kaylan Moody",
        "description": "A podcast about the failures people have faced, how they overcame them and how not to let your failures define you.",
        "order": 0
    }
]
]

function Sample(props) {
    return (
        <div className="sample">
            <a href={props.sample.src} target="_blank" rel="noopener noreferrer" >
                <img src={props.sample.img} alt={props.sample.alt}/>
                <h2>{props.sample.title}</h2>
            </a>
            <p className="description">{props.sample.description}</p>
        </div>
)
}

function Cards(props) {
    return (
        <div className="card">
        { props.samples.map( function (sample) {
            return <Sample className="sample" key={sample.order} sample={sample} />;
        })}
        </div>
    )

}


export class FlexDiv extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            samples: contentSamples

            };
        
        this.changeType = this.changeType.bind(this);
    }
   
    changeType(newType) {
        this.setState({
          samples: contentSamples[newType]
        });
      }

    render() {
        return (
            <div className="flex">
                <Select changeType={this.changeType} />
                <Cards samples={this.state.samples} />
            </div>
        )
    }
}