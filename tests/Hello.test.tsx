import * as React from 'react';
import { debugHtml, query, queryByText, render } from 'tests/TestApi';

describe('Hello', () => {
    /** Throws an exception if an error rendering the component. */
    it('Renders without error.', () => {
        render(
            <div className="test-hello">Hello</div>
        );
    });

    /** Checks the HTML DOM generated for a div. */
    it('Renders a very simple <div>.', () => {
        const { container } = render(
            <div className="test-hello">Hello</div>
        );
        debugHtml(container);

        // different ways to query, errors if not found.
        const div1 = query(container, '.test-hello');
        const div2 = queryByText(container, 'Hello');

        // standard DOM elements (HTMLElement) as would be in a browser.
        expect(div1.className).toBe('test-hello');
        expect(div2.textContent).toBe('Hello');
    });
});
