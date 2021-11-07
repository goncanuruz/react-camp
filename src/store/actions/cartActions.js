
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_TO_CART = "REMOVE_FROM_CART"


export function addToCardt(product) {
    return {
        type: "ADD_TO_CART",
        payload: product
    }
}

export function removeFromCardt(product) {
    return {
        type: "REMOVE_FROM_CART",
        payload: product
    }
}

