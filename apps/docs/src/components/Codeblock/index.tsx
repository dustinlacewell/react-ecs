import Highlight, { defaultProps } from 'prism-react-renderer';
import React from 'react';

export const Codeblock = (props) => {
    return (
        <Highlight {...defaultProps} code={props.code} language="tsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
}
