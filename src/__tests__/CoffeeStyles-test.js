import { expect, test } from '@jest/globals';
import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import SelectCoffeeStyleScreen from '../screens/SelectCoffeeStyleScreen';

test('renders correctly', () => {
    const tree = renderer.create(<SelectCoffeeStyleScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});