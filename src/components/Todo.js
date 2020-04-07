import React from 'react';
import Styled from "styled-components"

/***Styles***/
/* I'm going to give the items some padding and change the color to be a bit more readable*/
const ItemDiv = Styled.div`
color:white;
padding: 1%;
`
/********/
const Todo = props => {
    return(
        <ItemDiv 
        className={props.item.finished ? 'finished' : 'task'}
        onClick={() => props.toggleTask(props.item.id)}>
            <p>{props.item.task}</p>
        </ItemDiv>
    )
}

export default Todo