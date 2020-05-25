import * as React from 'react';
import CounterPanel from 'components/CounterPanel';
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

describe('CounterPanel', () => {
    it('Renders without error.', () => {
        // exception if an error rendering the component.
        render(
            <CounterPanel title="Click here!"/>
        );
    });

    it('Component updates when clicked.', () => {
        // returns the parent div as an actual DOM element.
        const { container } = render(
            <CounterPanel title="Click here!"/>
        );
        //debugHtml(container);

        const title = query(container, '.counter-title');
        const button = query(container, 'button');
        const label = query(container, '.counter-count');

        expect(title.textContent).toBe('Title: Click here!');
        expect(button.textContent).toBe('Increase Count');
        expect(label.textContent).toBe('Count: 0');

        click(button);
        expect(label.textContent).toBe('Count: 1');

        click(button);
        click(button);
        expect(label.textContent).toBe('Count: 3');
    });
});
