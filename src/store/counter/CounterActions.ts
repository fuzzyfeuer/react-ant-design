import { createAction } from '@reduxjs/toolkit';

/* Action Creators */

// See also: https://redux-toolkit.js.org/api/createAction
//
// Examples:
//   dispatch(increaseCount());
//   dispatch(increaseCount(4));

export const increaseCount = createAction('counter/increase', (deltaPlus = 1) => ({
    payload: {
        deltaPlus
    }
}));

export const decreaseCount = createAction('counter/decrease', (deltaMinus = 1) => ({
    payload: {
        deltaMinus
    }
}));

/** Type for an action is the return type of the action creator. */
export type IncreaseCountAction = ReturnType<typeof increaseCount>;
export type DecreaseCountAction = ReturnType<typeof decreaseCount>;
