/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { StyledProps } from './common/CommonProps';
import ErrorBoundary from './common/ErrorBoundary';
import { theme } from './common/Theme';
import FeaturePanel from './FeaturePanel';

type Props = StyledProps;

/**
 * Template application.
 *
 * ErrorBoundary - Catches any exceptions thrown by child components, and shows the error message
 *     in the UI.
 * ThemeProvider - Styled components can access the theme through the 'theme' prop.
 */
const App: React.FunctionComponent<Props> = (props: Props) => {
    console.debug('App | Render');
    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>

                <div data-testid="App" className={`app ${props.className}`} >
                    <FeaturePanel title="Don't click!"/>
                </div>

            </ThemeProvider>
        </ErrorBoundary>
    );
};

export default styled(App)`
    background: #cacaca;
    box-sizing: border-box;
    padding: 0;
    width: 100%;
    height: 100%;
`;
