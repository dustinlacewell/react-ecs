---
slug: /core/
title: '@react-ecs/core overview'
sidebar_label: Overview
sidebar_position: 0
---

For API documentation <a href="/api/core">check here</a>.

## Intro

This documentation will cover all the concepts you'll need to use react-ecs.

`@react-ecs/core` is the primary library in our ecosystem, containing the hooks and components needed to build your ECS.

While `@react-ecs/core` is _render agnostic_, it comes with stuff for working with the DOM built in. Other libraries provide _render specific_ integrations. Check out <a href="/docs/three">@react-ecs/three</a> for working with ThreeJS scenes.

## Installation

To install:

    npm install @react-ecs/core

Or:

    yarn add @react-ecs/core

### Peer Dependencies

`@react-ecs/core` has a number of Peer Dependencies you'll need to install too:

    yarn add react react-dom mobx mobx-react

But you may already have these.
