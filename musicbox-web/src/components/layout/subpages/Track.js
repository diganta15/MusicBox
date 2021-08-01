import React from 'react';

const Track = (props) => {
    console.log(props.match.params.id);
    return (
        <div>
           <h1>Hello</h1>
        </div>
    )
}

export default Track
