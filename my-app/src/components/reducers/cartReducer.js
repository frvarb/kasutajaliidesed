import {
    ADD_QUANTITY,
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    RESET
} from "../actions/actionTypes/cartActionTypes";

const initState = {
    items: [
        {
            id:1,
            title:'Nyan cat earrings',
            smallDesc: "Nyan cat earrings that fits perfectly for any ear.",
            price:110,
            img:require('../../pictures/product/6362854781_7c1daff4f5_b.jpg')
        },
        {
            id:2,
            title:'Not single shirt',
            smallDesc: "I am bit single because I have my cat shirt for all genders, darker color version.",
            price:80,
            img:require('../../pictures/product/27216216237_52b1601d47_b.jpg')
        },
        {
            id:3,
            title:'Not single shirt',
            smallDesc: "I am bit single because I have my cat shirt for all genders, lighter color version.",
            price:120,
            img:require('../../pictures/product/28213519548_a58fc5553d_b.jpg')
        },
        {
            id:4,
            title:'Sleeping cat shirt',
            smallDesc: "Keep calm my cat is sleeping shirt, color yellow.",
            price:260,
            img:require('../../pictures/product/28213531458_ae9eabef4e_b.jpg')
        },
        {
            id:5,
            title:'Diamond cat bracelet',
            smallDesc: "Luxury bracelet for women who want to feel special.",
            price:160,
            img:require('../../pictures/product/cartier-1137401_960_720.jpg')
        },
        {
            id:6,
            title:'Egyptian bracelet',
            smallDesc: "Casual every-day cat egyptian cat bracelet.",
            price:90,
            img:require('../../pictures/product/jewelry-parts-cat-charm.jpg')
        },
    ],
    addedItems:[],
    total: 0,
    itemCount: 0

}

const cartReducer= (state = initState,action)=>{
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id);
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id);
        if(existed_item)
        {
            addedItem.quantity += 1;
            return{
                ...state,
                total: state.total + addedItem.price,
                itemCount: state.itemCount + 1
            }
        }
        else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price;

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
                itemCount: state.itemCount + 1
            }

        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id);
        let new_items = state.addedItems.filter(item=> action.id !== item.id);

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );
        console.log(itemToRemove);
        return{
            ...state,
            addedItems: new_items,
            total: newTotal,
            itemCount: state.itemCount - (itemToRemove.quantity)
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1;
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal,
            itemCount: state.itemCount + 1
        }
    }
    if(action.type=== SUB_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price;
            return{
                ...state,
                addedItems: new_items,
                total: newTotal,
                itemCount: state.itemCount - 1
            }
        }
        else {
            addedItem.quantity -= 1;
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal,
                itemCount: state.itemCount - 1
            }
        }
    }

    if(action.type === RESET) {
        return {
            ...state,
            addedItems: [],
            itemCount: 0,
            total: 0,
        }
    }
    return state;
};

export default cartReducer;