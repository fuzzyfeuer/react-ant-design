import * as React from 'react';
import styled from 'styled-components';
import type { MouseEvent } from 'react';
const { useEffect, useState } = React;

import { StyledProps } from 'components/common/CommonProps';
import { ThemeObject } from 'components/common/Theme';

type Props = {
    title?: string;
}
& StyledProps;

/**
 * A button to increase a counter value.
 */
const CounterPanel: React.FunctionComponent<Props> = (props: Props) => {
    const { title } = props;
    const [count, setCount] = useState<number>(0);

    const onClick = (event: MouseEvent): void => {
        const value = (event.target as HTMLInputElement).value;
        console.info(`Button pressed: ${value}`);   // 'button1'
        setCount(count + 1);
    };

    useEffect(() => {
        console.info('CounterPanel | Initialize');
        return (): void => console.info('CounterPanel | Clean up');
    }, []);  // on mount and unmount

    return (
        <div data-testid="CounterPanel" className={props.className} >
            {(title) && (
                <p className="counter-title">Title: {title}</p>
            )}
            <button onClick={onClick} value="button1">Increase Count</button>
            <p className="counter-count">Count: {count}</p>
        </div>
    );
};

export default styled(CounterPanel)`
    ${(props): ThemeObject => props.theme.default};
    padding: 5px 20px;
    background: #f0f0f0;

    .counter-title {
       ${(props): ThemeObject => props.theme.label};
       background: #f0f0f0;
       font-style: italic;
       font-weight: bold;
    }

    button {
        background: orange;
        padding: 5px 10px;
    }
`;
