import * as React from 'react';
import styled from 'styled-components';

import { Collapse } from 'antd';

import { StyledProps } from 'components/common/CommonProps';

const { Panel } = Collapse;

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
const FeatureContent2: React.FunctionComponent<Props> = (props: Props) => {
    console.info('FeatureContent2 | render}');

    const onChange = (key: string | string[]): void => {
        console.info(`onChange ${key}`);
    };

    return (
        <div
            data-testid="FeatureContent2"
            className={`feature-content-1 ${props.className}`} >

            <p>Content of Tab Pane 2</p>
            <Collapse
                defaultActiveKey={['1']}
                onChange={onChange}
                style={{ width: '100%'}}>

                <Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        </div>
    );
};

export default styled(FeatureContent2)`
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
