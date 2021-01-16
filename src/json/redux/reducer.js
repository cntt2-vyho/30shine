import { notificationComponent } from "../../components/utils/notification";

const initialState = {
    listId: [],
    listObject: []

}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "CHOOSE_SERVICE":
            console.log(action.payload.id);



            let temp = '';

            if (action.payload.parentId !== 0) {
                if (!(state.listId.some(val => val == action.payload.id))) {
                    if (!state.listObject.some(val => val.parentId == action.payload.parentId)) {
                        if (state.listId.length < 10) {
                            return {
                                ...state, listId: [...state.listId, action.payload],
                                listObject: [...state.listObject, { parentId: action.payload.parentId, id: action.payload.id }]
                            }
                        }
                        else notificationComponent('error', "Anh vui lòng chọn không quá 10 dịch vụ trong 1 lần sử dụng");
                    }

                    else {
                        for (var i = 0; i < state.listObject.length; i++) {
                            if (state.listObject[i].parentId == action.payload.parentId) {
                                temp = state.listObject[i].id;
                                state.listObject[i].id = action.payload.id;

                            }
                        }
                        return {
                            ...state, listId: [...state.listId, action.payload].filter(function (val) {
                                return val.id !== temp
                            }),
                        }
                    }
                }
                else {
                    return {
                        ...state, listId: state.listId.filter(function (val) {
                            return val.id !== action.payload.id;
                        }),
                        listObject: state.listObject.filter(function (val) {
                            return val.id !== action.payload.id
                        })
                    }
                }

            }
            else {
                if (!(state.listId.some(val => val.id == action.payload.id))) {
                    if (state.listId.length < 10) {
                        return { ...state, listId: [...state.listId, action.payload] }
                    }
                    else notificationComponent('error', "Anh vui lòng chọn không quá 10 dịch vụ trong 1 lần sử dụng");
                }
                else {
                    return {
                        ...state, listId: state.listId.filter(function (val) {
                            return val.id !== action.payload.id;
                        })
                    }
                }
            }

        default:
            return state;

    }
}
export default rootReducer;