import React, { Fragment, ReactElement } from 'react';
import { Else } from './Else';
import { Then } from './Then';

/**
 * If condition evaluates to true, renders the `<Then />` block will be rendered,
 * otherwise renders the `<Else />` block. Either block may be omitted.
 *
 * This component can contain any number of `<Then />` or `<Else />` blocks,
 * but only the first block of the right type (either Then or Else, depending on the condition) will be rendered.
 * @param __namedParameters The props to pass down to the `<IF />` component,
 */
/**
 * Type for a value that can properly be parsed by `Boolean(...)`
 */
export type BooleanLike = boolean | string | number | null | undefined;

interface Props {
    condition: (() => BooleanLike) | BooleanLike;
}

export function If(props: React.PropsWithChildren<Props>): ReactElement | null {
    if (!props.children) {
        return null;
    }

    if (props.condition) {
        return <Fragment>{(React.Children.toArray(props.children) as ReactElement[]).find((c) => (c.type !== Then) !== props.condition) || null}</Fragment>;
    }

    return <Fragment>{(React.Children.toArray(props.children) as ReactElement[]).find((c) => (c.type !== Else) !== !props.condition) || null}</Fragment>;
}
