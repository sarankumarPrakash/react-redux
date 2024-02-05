const redux=require('redux')
const reduxlogger =require('redux-logger')

const logger=reduxlogger.createLogger()
const applyMiddleWare=redux.applyMiddleware
const createStore=redux.createStore  // craeting a store
const combineReducer=redux.combineReducers
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

const initalCakeState={  // seperate state for  cake
    numOfCakes:10 , 
}

const initalIceCreamState={   // seperate state for  Icecream
    numOfCakes:15 , 
}

// const reducer=(state=initalstate,action)=>{      // reducer function which takes the previous state and an action as arguments
//     // reducer is a function that takes the previous state and an action ,and returns new state
    
//       switch(action.type){
//         case BUY_CAKE :
//             return{...state, numOfCakes:state.numOfCakes-1}
//          case BUY_ICECREAM :
//              return{...state, numOfIceCream:state.numOfIceCream-1}
//         default  : return  state;
      
//       }
// }

const buyCakereducer=(state=initalCakeState,action)=>{      // reducer function which takes the previous state and an action as arguments
    // reducer is a function that takes the previous state and an action ,and returns new state
    
      switch(action.type){
        case BUY_CAKE :
            return{...state, numOfCakes:state.numOfCakes-1}
        
        default  : return  state;
      
      }
}



const buyIceCreamreducer=(state=initalIceCreamState,action)=>{      // reducer function which takes the previous state and an action as arguments
    // reducer is a function that takes the previous state and an action ,and returns new state
      switch(action.type){
         case BUY_ICECREAM :
             return{...state, numOfIceCream:state.numOfIceCream-1}
        default  : return  state;
      
      }
}
const rootReducer=combineReducer({ //  combineReducers is a higher order function which combines multiple reducers into one .
    cake:buyCakereducer,
    iceCream:buyIceCreamreducer
})
const store =createStore(rootReducer,applyMiddleWare(logger)) // create a single store
console.log('state', store.getState())// get the initial state of the app

const unsubscribe= store.subscribe(()=>{})  // every time the state changes , log it . this is like setting up a listener for our state
store.dispatch(buycake())  //  dispatch an action to the store

// every time you call dispatch and pass an action ,the Redux will update the state
store.dispatch(buyicecream())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())


unsubscribe()