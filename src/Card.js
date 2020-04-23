import React from 'react';
import './Card.css';
//component card
function Card(props) {
    return (
        <div className="Card">
            <button type="button">delete</button>
            onClick={() => props.onClickDelete(props.id)}
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

Card.propTypes = {
    onClickDelete: () => {}
  }
export default Card;