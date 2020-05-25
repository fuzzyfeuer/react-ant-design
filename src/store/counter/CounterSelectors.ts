import type { AppState } from 'store/store';

/* Selectors | Get values from the application state. */

// Example
//   import { useSelector } from 'react-redux';
//   const count = useSelector(selectCount);

export const selectCount = ({ counter }: AppState): number => (
    counter.currentCount
);
