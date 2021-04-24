---
sidebar_position: 0
sidebar_label: Minimal Example
title: Minimal Example
---

import thisSource from '!!raw-loader!../../src/scenes/MinimalExample';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { MinimalExample } from '../../src/scenes/MinimalExample';
import { Example } from '../../src/components/Example';

<Example code={thisSource}>
    <MinimalExample />
</Example>
