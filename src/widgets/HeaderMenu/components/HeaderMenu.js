import React from 'react';
import '../../../shared/ui/main.css'

export const HeaderMenu = () => {
    let isLogged = true; //Заменить при появлении авторизации
    if (isLogged){
        return(
            <div className="headerContainer">
                <h2> Delivery Кушац</h2>
                <a href={'/'}>Меню</a>
                <a href={'/orders'}>Заказы</a>
                <a href={'/cart'}>Корзина</a>
                <div className="headerRightSide">
                    <a href={'/profile'}>example@mail.com</a>
                    <button style={{height: "40px",
                        marginLeft: "10px",
                        border: "none",
                        borderRadius: "5px",
                        padding: "10px",}}
                        onClick={() => console.log("Click")}>выйти</button>
                </div>

            </div>
        );
    }
    else{
        return (
            <div className="headerContainer">
                <h2> Delivery Кушац</h2>
                <a href={'/'}>Меню</a>
                <a href={'/authorization'}>Войты</a>
                <a href={'/registration'}>Зарегестрироваться</a>
            </div>
        );
    }
};

export default HeaderMenu;