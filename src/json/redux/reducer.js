import { notificationComponent } from "../../components/utils/notification";

const initialState = {
    listId: [],
    listObject: [],
    hour: ''

}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "CHOOSE_SERVICE":
            console.log(action.payload);



            let temp = '';

            if (action.payload.group !== 0) {
                if (!(state.listId.some(val => val.serviceId == action.payload.serviceId))) {
                    if (!state.listObject.some(val => val.group == action.payload.group)) {
                        if (state.listId.length < 10) {
                            return {
                                ...state, listId: [...state.listId, action.payload],
                                listObject: [...state.listObject, { group: action.payload.group, serviceId: action.payload.serviceId }]
                            }
                        }
                        else notificationComponent('error', "Anh vui lòng chọn không quá 10 dịch vụ trong 1 lần sử dụng");
                    }

                    else {
                        for (var i = 0; i < state.listObject.length; i++) {
                            if (state.listObject[i].group == action.payload.group) {
                                temp = state.listObject[i].serviceId;
                                state.listObject[i].serviceId = action.payload.serviceId;

                            }
                        }
                        return {
                            ...state, listId: [...state.listId, action.payload].filter(function (val) {
                                return val.serviceId !== temp
                            }),
                        }
                    }
                }
                else {
                    console.log('be xuan mai lon ton')
                    return {
                        ...state, listId: state.listId.filter(function (val) {
                            return val.serviceId !== action.payload.serviceId;
                        }),
                        listObject: state.listObject.filter(function (val) {
                            return val.serviceId !== action.payload.serviceId
                        })
                    }
                }

            }
            else {
                if (!(state.listId.some(val => val.serviceId == action.payload.serviceId))) {
                    if (state.listId.length < 10) {
                        return { ...state, listId: [...state.listId, action.payload] }
                    }
                    else notificationComponent('error', "Anh vui lòng chọn không quá 10 dịch vụ trong 1 lần sử dụng");
                }
                else {
                    return {
                        ...state, listId: state.listId.filter(function (val) {
                            return val.serviceId !== action.payload.serviceId;
                        })
                    }
                }
            }
        case "SET_HOUR":
            console.log(action.payload);
            return { ...state, hour: action.payload }
        default:
            return state;

    }
}
export default rootReducer;