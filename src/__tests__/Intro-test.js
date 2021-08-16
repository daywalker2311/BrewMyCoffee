import { expect, test } from '@jest/globals';
import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Intro from '../screens/Intro';

test('renders correctly', () => {
    const tree = renderer.create(<Intro />).toJSON();
    expect(tree).toMatchSnapshot();
});