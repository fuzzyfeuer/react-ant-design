import { ReactNode } from 'react';

/**
 * Component that uses it's child components (props.children).
 */
export type ChildrenProps = {
    children?: ReactNode;
};

/**
 * "The styled method works perfectly on all of your own or any third-party component, as long as they
 * attach the passed className prop to a DOM element."
 *
 * https://styled-components.com/docs/basics#styling-any-component
 */
export type StyledProps = {
    className?: string;
};
