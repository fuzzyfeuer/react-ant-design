/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-explicit-any */
import * as React from 'react';
import './ErrorBoundary.css';

type ErrorProps = {
    error?: Error | null;   // caught exception, e.g., in useEffect
};

type ErrorState = {
    error: Error | null;
};

/**
 * Catches any exceptions raised by the child components and shows the error.
 */
class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
    state: ErrorState = {
        error: null,
    };

    /**
     * @param error An error that has been thrown.
     * @param info An object with a componentStack key. The property has information about
     *        component stack during the thrown error.
     */
    componentDidCatch(error: Error, info: { componentStack: string }): void {
        console.error(`Exception caught by error boundary:\n${error.toString()}`);
        console.error(`Component Stack:\n${info.componentStack}`);
        this.setState({ error });
    }

    render() {
        const error = this.state.error || this.props.error;

        // 1) an error was caught
        if (error) {
            let message = (error && error.toString()) || '';
            message = message.replace(/^Error: /, '');

            return (
                <div className="geomap-error-boundary">
                    <div className="geomap-error-box">
                        <h2>Error: Unable to show the map!</h2>
                        <p>{message}</p>
                    </div>
                </div>
            );
        }

        // 2) no error, render the children
        return this.props.children;
    }
}

export default ErrorBoundary;
