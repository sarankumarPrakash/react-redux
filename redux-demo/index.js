const redux=require('redux')

const createStore=redux.createStore  // craeting a store
const BUY_CAKE='BUY_CAKE' 
const BUY_ICECREAM='BUY_ICECREAM'


function buycake(){   // action creator for cake
    return{
        type:BUY_CAKE
    }
}

function buyicecream(){   // action creator for Ice cream
    return{
        type:BUY_ICECREAM
    }
}

// const initalstate={ // inital state of our app 
//     numOfCakes:10 ,
        
// }


const reducer=(state=initalstate,action)=>{      // reducer function which takes the previous state and an action as arguments
    // reducer is a function that takes the previous state and an action ,and returns new state
    
      switch(action.type){
        case BUY_CAKE :
            return{...state, numOfCakes:state.numOfCakes-1}
         case BUY_ICECREAM :
             return{...state, numOfIceCream:state.numOfIceCream-1}
        default  : return  state;
      
      }
}


const store =createStore(reducer) // create a single store
console.log('state', store.getState())// get the initial state of the app

const unsubscribe= store.subscribe(()=>console.log(store.getState()))  // every time the state changes , log it . this is like setting up a listener for our state
store.dispatch(buycake())  //  dispatch an action to the store

// every time you call dispatch and pass an action ,the Redux will update the state
store.dispatch(buyicecream())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())


unsubscribe()