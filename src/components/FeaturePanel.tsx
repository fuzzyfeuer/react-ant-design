import * as React from 'react';
import styled from 'styled-components';

import { Tabs } from 'antd';
const { TabPane } = Tabs;

import FeatureContent1 from './FeatureContent1';
import FeatureContent2 from './FeatureContent2';
import FeatureContent3 from './FeatureContent3';
import { StyledProps } from 'components/common/CommonProps';
import './ant-overrides.css';

//const { useState } = React;

type Props = {
    title?: string;
}
& StyledProps;

/**
 *
 */
const FeaturePanel: React.FunctionComponent<Props> = (props: Props) => {
    const { title } = props;
    //const [count, setCount] = useState<number>(0);
    //const [tab, setTab] = React.useState(0);
    console.info(`Title: ${title}`);

    const onChange = (activeKey: string): void => {
        console.info(`onChange ${activeKey}`);
    };

    const onSwitchChange = (checked: boolean, event: Event): void => {
        //const value = event.target!.value;
        console.info(`onSwitchChange ${checked}`);
        console.info(`onSwitchChange ${Object.keys(event)}`);
    };

    return (
        <div data-testid="FeaturePanel" className={`feature-panel ${props.className}`} >

            <Tabs
                animated={{ inkBar: true, tabPane: false }}
                defaultActiveKey="1"
                onChange={onChange}
                style={{ width: '100%', height: '100%'}} >

                <TabPane tab="Tab 1" key="1">
                    <FeatureContent1 />
                </TabPane>

                <TabPane tab="Tab 2" key="2">
                    <FeatureContent2 />
                </TabPane>

                <TabPane tab="Tab 3" key="3">
                    <FeatureContent3 />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default styled(FeaturePanel)`
    ${(props) => props.theme.default};

    padding: 5px 10px;

    background: white;
    box-shadow: 0px 0px 12px 0px rgba(90,90,90,0.4);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    height: 100%;
    width: 20em;
`;
