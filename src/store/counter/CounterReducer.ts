/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { increaseCount, decreaseCount } from './CounterActions';
import type { IncreaseCountAction, DecreaseCountAction } from './CounterActions';

// Reducer: Updates the application state by applying an action.

export type CounterState = {
    currentCount: number;
};

const initialState: CounterState = {
    currentCount: 0
};

/**
 * This uses React Toolkit (the 'createReducer' method), which underneath uses the 'immer'
 * module to allow direct modification/mutation of the state.
 *
 * https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/
 * #simplifying-immutable-updates-with-redux-toolkit
 */
const reducers = {
    [increaseCount.type]: (state: CounterState, action: IncreaseCountAction): void => {
        const { deltaPlus } = action.payload;
        state.currentCount += deltaPlus;
    },

    [decreaseCount.type]: (state: CounterState, action: DecreaseCountAction): void => {
        const { deltaMinus } = action.payload;
        state.currentCount -= deltaMinus;
    }
};

export const counterReducer = createReducer(initialState, reducers);
