import * as React from 'react';
import styled from 'styled-components';

import { Moment } from 'moment';
import { Button, DatePicker, Radio, Slider, Space, Switch } from 'antd';

//import type { RadioChangeEvent } from 'antd';

import { StyledProps } from 'components/common/CommonProps';

const { useState } = React;

type Props = {
}
& StyledProps;

/**
 *
 */
const FeatureContent1: React.FunctionComponent<Props> = (props: Props) => {
    console.info('FeatureContent1 | render}');
    const [value, setValue] = useState<number>(0);

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

    const onRadioChange = (event: { target: { value?: any }}): void => {
        if (event && event.target && typeof event.target.value === 'number') {
            // @ts-ignore
            console.info(`onRadioChange ${event.target.value}`);
            setValue(event.target.value);
        }
    };

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
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

            <Radio.Group onChange={onRadioChange} value={value}>
                <Radio style={radioStyle} value={1}>
                    Option A
                </Radio>
                <Radio style={radioStyle} value={2}>
                    Option B
                </Radio>
                <Radio style={radioStyle} value={3}>
                    Option C
                </Radio>
            </Radio.Group>
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
