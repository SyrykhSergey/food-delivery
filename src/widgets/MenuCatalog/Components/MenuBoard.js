import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MenuReducerThunkCreator} from "../../../shared/index"
import {MenuCard} from "../../../entities"
import "../../../shared/ui/main.css"
import {Pagination} from "antd";

export const MenuBoard = () => {
    const dispatch = useDispatch()
    const menu = useSelector((state) => state.menu.allDataMenu)


    useEffect(()=>{
        dispatch(MenuReducerThunkCreator())
    }, [dispatch])
    if(!menu){
        return (
            <div>
                <p1>Нет данных</p1>
            </div>
        )
    }
    else {
        let pageCount = menu.pagination? menu.pagination.count * menu.pagination.size : 50;
        return (
            <div className="menuContainer">
                <div className="menuBoard">
                    {menu.dishes && menu.dishes.map(dish =>
                        <MenuCard data={dish} style={{marginRight: "20px"}} />)}
                </div>
                <Pagination total={pageCount}
                    />
            </div>
        );
    };
};

export default MenuBoard;