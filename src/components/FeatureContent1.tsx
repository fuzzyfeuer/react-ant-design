import * as React from 'react';
import styled from 'styled-components';

import { Moment } from 'moment';
import { Button, DatePicker, Slider, Space, Switch } from 'antd';

import { StyledProps } from 'components/common/CommonProps';

type Props = {
}
& StyledProps;

/**
 *
 */
const FeatureContent1: React.FunctionComponent<Props> = (props: Props) => {
    console.info('FeatureContent1 | render}');

    const onChange = (activeKey: string): void => {
        console.info(`onChange ${activeKey}`);
    };

    const onSwitchChange = (checked: boolean, event: Event): void => {
        //const value = event.target!.value;
        console.info(`onSwitchChange ${checked}`);
        console.info(`onSwitchChange ${Object.keys(event)}`);
    };

    const onChangeDate = (date: Moment | null, dateString: string): void => {
        console.info(`onChangeDate ${dateString}`);
    };

    return (
        <div
            data-testid="FeatureContent1"
            className={`feature-content-1 ${props.className}`} >

            <p>Content of Tab Pane 1</p>

            <Button type="primary">Primary</Button>
            <Button>Default</Button>

            <p>Hello</p>
            <Switch defaultChecked onChange={onSwitchChange} data-value="test-switch-1" />

            <Space>
                Is Visible
                <Switch defaultChecked onChange={onSwitchChange} data-value="test-switch-1" />
            </Space>

            <Space >
                Transparency
                <div style={{ width: '150px' }}>
                    <Slider min={0} max={1} step={0.1} defaultValue={0.5} />
                </div>
            </Space>

            <Space >
                From Date:
                <DatePicker onChange={onChangeDate} />
            </Space>
        </div>
    );
};

export default styled(FeatureContent1)`
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
