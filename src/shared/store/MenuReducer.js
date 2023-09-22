import {MenuDataAPI} from "../../widgets/MenuCatalog"

const initialState = {
    allDataMenu: [],
    errors:[]
}



export const MenuReducer = (state = initialState, action) => {
    let newState = {...state};
    switch (action.type){
        case 'GET_MENU_DATA':
            newState.allDataMenu = action.allDataMenu;
            return newState;
        default:
            return state
    }
}

export function MenuReducerActionCreator(data){
    if (data.status === 200)
        return {type: 'GET_MENU_DATA', allDataMenu: data.data}
    else
        return {type: 'UNSUCCES', errors: data.errors}
}

export const MenuReducerThunkCreator = (pageNum) => (dispatch) => {
    return MenuDataAPI.getMenuData(pageNum).then(
        (data) => {
            console.log(data)
            dispatch(MenuReducerActionCreator(data));
            if (data.status === 200) {
                return Promise.resolve();
            }
            return Promise.reject();
        }
    )
};

export default MenuReducer;