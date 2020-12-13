// write your CatList component here
import React from 'react';

function CatList(props){
    return (
        <ul>
            {props.catPics.map(cat => <img src={cat.url}></img>)}
        </ul>
    )
}
export default CatList
