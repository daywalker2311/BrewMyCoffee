import React, { Component } from 'react';
import { View, Text, StatusBar, ImageBackground, StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { primaryColor, screenHeight, screenWidth } from '../constants';
import { Paragraph, Subheading, Surface, Title, Button } from 'react-native-paper';


const StartMachineScreen = (props) => {

    return (
        <Surface style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <View>
                <Title style={{ marginHorizontal: 15, fontSize: 24 }}>Tap the machine to Start</Title>
                <ImageBackground
                    source={require('../assets/bg.png')}
                    style={styles.background_image}
                    resizeMode="stretch"
                />
                <View style={{ marginHorizontal: 15 }}>
                    <Subheading style={{ fontWeight: 'bold', textDecorationLine: "underline" }}>{'\n'}How does this work</Subheading>


                    <Paragraph>{'\n'}{'\n'}Dont have NFC? We got you</Paragraph>
                </View>

            </View>


            <Button mode="outlined"
                style={styles.start_btn}
                onPress={() => props.navigation.navigate('SelectCoffeeStyleScreen')}
            >Start</Button>
        </Surface>
    )
}

export default StartMachineScreen;

const styles = StyleSheet.create({
    background_image: {
        width: screenWidth,
        height: screenHeight * 0.55,
        marginTop: 50
    },
    start_btn: {
        backgroundColor: primaryColor,
        position: 'absolute',
        bottom: 30,
        width: screenWidth * 0.92,
        alignSelf: 'center',
        height: 45,
        justifyContent: 'center',

    }
})