import React from 'react';
import "../../../shared/ui/main.css";
//props.data.name
export const MenuCard = (props) => {
    return (
        <div className="catalog-item">
            <img className="dishesImage" src={props.data.image} />
            <div className="descriptionItem">
                <p4 style={{fontSize: "25px",}}>{props.data.name}<br/></p4>
                <p6>Категория блюда: {props.data.category}<br/></p6>
                <h3>{props.data.ratings}</h3>
            </div>

            <p>{props.data.description}</p>
            <div className="buying">
                <p5>Цена: {props.data.price}</p5>
                <p5 style={{marginLeft: "10px"}}>Купить</p5>
            </div>
        </div>
    );
};

export default MenuCard;