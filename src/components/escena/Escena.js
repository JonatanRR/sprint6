import React from 'react';

export const Phrase = (props) => {

    const listButton = props.sentences.map((element, index) => <div><p>{element}</p></div>);
    return (listButton)
}