/* eslint-disable */
import * as React from 'react';
import styled from 'styled-components';

import { StyledProps } from 'components/common/CommonProps';
import { SketchPicker } from 'react-color';

import type { ColorResult } from 'react-color';

const { useLayoutEffect, useRef, useState } = React;

type Props = {
}
& StyledProps;

const text = `
The Ring Nebula (also catalogued as Messier 57, M57 or NGC 6720) is a planetary nebula in the
northern constellation of Lyra. Such objects are formed when a shell of ionized gas is expelled
into the surrounding interstellar medium by a star in the last stages of its evolution before
becoming a white dwarf. HaRGB image of the Ring Nebula (M57) showing the faint outer shells.
Data from the Liverpool Telescope on La Palma.
`;

/**
 *
 */
const FeatureContent3: React.FunctionComponent<Props> = (props: Props) => {
    console.info('FeatureContent3 | render}');
    const [color, setColor] = useState<string | undefined>(undefined);
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const onChange = (newColor: ColorResult): void => {
        console.info(`onChange ${newColor.hex}`);
        setColor(newColor.hex);
        if (inputRef && inputRef.current) {
            //const width = window.getComputedStyle(inputRef.current!).width;
            // @ts-ignore
            console.info(`Style: inputRef.current ${inputRef!.current!.style}`);
            // @ts-ignore
            const child: HTMLElement | null = inputRef.current.firstChild;
            if (child) {
                // @ts-ignore
                child.style["box-shadow"] = "none";
            }
        }
    };

    useLayoutEffect(() => {
        if (inputRef && inputRef.current) {
            //const width = window.getComputedStyle(inputRef.current!).width;
            console.info(`Style: inputRef.current ${101}`);
            // @ts-ignore
            const child: HTMLElement | null = inputRef.current.firstChild;
            if (child) {
                // @ts-ignore
                child.style["box-shadow"] = "none";
            }
        }
    }, [inputRef]);

    return (
        <div
            data-testid="FeatureContent3"
            className={`feature-content-1 ${props.className}`} >

            <p>Content of Tab Pane 3</p>
            <div ref={inputRef}>
                {
                // @ts-ignore
                <SketchPicker styles={{ boxShadow: 'none' }}
                    color={color}
                    onChangeComplete={onChange} />
                }
            </div>
            <p style={{marginTop: '20px'}}>Color: {color || '-'}</p>
        </div>
    );
};

export default styled(FeatureContent3)`
    ${(props) => props.theme.default};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & > * {
       margin: 10px 0 0 0;
    }
    & > :first-child {
       margin-top: 0;
    }
`;
