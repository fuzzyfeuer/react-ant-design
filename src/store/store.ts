import { useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter/CounterReducer';

// https://redux-toolkit.js.org/usage/usage-with-typescript
// https://redux.js.org/recipes/usage-with-typescript

const rootReducer = combineReducers({
    counter: counterReducer
});

/** The type of the application's state. */
export type AppState = ReturnType<typeof rootReducer>;
// OR:
// export type AppState = ReturnType<typeof store.getState>;

/**
 * The Redux store that holds the application state.
 */
export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;

/** Export a hook that can be resused to resolve types. */
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
