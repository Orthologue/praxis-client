// external imports
import React from 'react'
import { createStore, combineReducers } from 'redux'
import { ApolloProvider } from 'react-apollo'
// local imports
import { reducer as apolloReducer, client as apolloClient } from './apollo'

// mix all the reducers into a single store
const store = createStore(
   combineReducers({
       apollo: apolloClient.reducer(),
   })
)

// handle the apollo provider details internally
export const Provider = ({...unused}) => (
    <ApolloProvider store={store} client={apolloClient} {...unused}/>
)

export default store
