export const SET_SEARCH_OBJ = 'searchObj/SET_SEARCH_OBJ'

export const setSearchObjRedux = searchObj => ({
    type: SET_SEARCH_OBJ,
    searchObj
})

export default function searchObj(state = {}, action){
    const {searchObj} = action
    console.log(searchObj)

    switch(action.type){
        case SET_SEARCH_OBJ:
            return {...state, ...searchObj}
        default:
            return state
    }
}