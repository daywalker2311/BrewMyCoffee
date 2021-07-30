import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { primaryColor, screenHeight, screenWidth } from '../constants';
import { Button } from 'react-native-paper';

const AppButtonComponent = ({ title, ...otherProps }) => {

    return (
        <Button mode="outlined"
            uppercase={false}
            color="white"
            style={styles.styles_btn}
            {...otherProps}
        >
            {title}
        </Button>
    )
}

export default AppButtonComponent;

const styles = StyleSheet.create({
    styles_btn: {
        backgroundColor: primaryColor,
        //position: 'absolute',
        //bottom: 40,
        width: screenWidth * 0.92,
        alignSelf: 'center',
        height: 45,
        justifyContent: 'center',

    }
})


