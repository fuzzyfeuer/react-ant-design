import { getByText, fireEvent, screen } from '@testing-library/react';

// Helper methods to hide boiler-plate code.

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

// re-export
export { render } from '@testing-library/react';

/**
 * Shortcut for: screen.debug(elem)
 */
export const debugHtml = (elem: Element): void => {
    screen.debug(elem);
};

/**
 * Shortcut for: Element.querySelector(), that errors if not found.
 */
export const query = (container: Element, selector: string): Element => {
    const result = container.querySelector(selector);
    if (result === null) {
        throw Error(`Element cannot be found by selector: ${selector}`);
    }
    return result;
};

/**
 * Shortcut for: getByText(elem, textContent)
 */
export const queryByText = (elem: HTMLElement, text: string): Element => {
    return getByText(elem, text);
};

/**
 * Shortcut for: fireEvent.click(elem)
 */
export const click = (elem: Element): void => {
    fireEvent.click(elem);
};
