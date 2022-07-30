// here we difine all the applicaton lavel states and define action to make the chenges to the state

export const initialState = {
    basket: [],
};

// selector
const reducer = (state, action) => {

    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

    }
}

export default reducer