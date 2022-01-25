import React from 'react';
import { Boxes } from './styled';

export const Phrase = (props) => {

    const listButton = props.sentences.map((element, index) => <div><Boxes>{element}</Boxes></div>);
    return (listButton)
}