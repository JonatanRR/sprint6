import React, { useState} from 'react';
import { Boxes, PrevNext, ButPrevNext } from './styled';
import { Popup } from './Popup';

export const Phrase = (props) => {

    const [a, setA] = useState(0);

    const listButton = props.sentences.map((element, index) => index === a ? <Boxes checked={index} 
    isRed={false}>{element}</Boxes> : <Boxes checked={index} isRed={true}>{element}</Boxes>);

    const [sentences, setSentences] = useState(listButton);

    const changeColorNext = () => {
        if(a < 4 && a >= 0) {
            setA(a + 1);
            setSentences(sentences);
        } else {
            setA(3);
        }
    }
    
    const changeColorPrev = () => {
        if(a < 4 && a >= 0) {
            setA(a - 1);
            setSentences(sentences);
        } else {
            setA(0);
        }    
    }

    return (
        <div>
            <PrevNext>
                <ButPrevNext onClick={() => changeColorPrev()}>Anterior</ButPrevNext>
                <ButPrevNext onClick={() => changeColorNext()}>Següent</ButPrevNext>
            </PrevNext>
            {listButton}
            <Popup />
        </div>
    )
}