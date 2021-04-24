---
sidebar_position: 99
sidebar_label: DOM Particles
title: DOM Particles
---

import thisSource from '!!raw-loader!../../src/scenes/DOMParticles';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { DOMParticles } from '../../src/scenes/DOMParticles';
import { Example } from '../../src/components/Example';

<Example code={thisSource}>
    <div style={{
        minHeight: "400px", display: 'flex', alignItems: "stretch",
        flexDirection: "column"
    }}>
        <DOMParticles />
    </div>
</Example>
