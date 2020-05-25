import * as React from 'react';
import { Provider } from 'react-redux';

import CounterPanelUsingRedux from 'components/CounterPanelUsingRedux';
import { store } from 'store/store';
import { click, query, render/*, debugHtml*/ } from 'tests/TestApi';

/*
 * The test library ('@testing-library/react') works well with React hooks and typescript, and
 * is recommended in the React FAQ.
 *   Unlike enzyme which seems to error, probably because 'useEffect' is asynchronous (?). That
 * is even when using 'mount' (rather than shallow, which doesn't work):
 * "Cannot log after tests are done. Did you forget to wait for something async in your test?"
 *
 * https://reactjs.org/docs/hooks-faq.html#how-to-test-components-that-use-hooks
 * https://testing-library.com/docs/react-testing-library/intro
 */

describe('CounterPanelUsingRedux', () => {
    /** Throws an exception if an error rendering the component. */
    it('Renders without error.', () => {
        render(
            <Provider store={store} >
                <CounterPanelUsingRedux title="Click here!"/>
            </Provider>
        );
    });

    it('Component updates when clicked.', () => {
        // returns the parent div as an actual DOM element.
        const { container } = render(
            <Provider store={store} >
                <CounterPanelUsingRedux title="Test me!"/>
            </Provider>
        );
        //debugHtml(container);

        const title = query(container, '.counter-title');
        const button = query(container, 'button');
        const label = query(container, '.counter-count');

        expect(title.textContent).toBe('Title: Test me!');
        expect(button.textContent).toBe('Increase Count (Redux)');
        expect(label.textContent).toBe('Count: 0');

        click(button);
        expect(label.textContent).toBe('Count: 1');

        click(button);
        click(button);
        expect(label.textContent).toBe('Count: 3');
    });
});
