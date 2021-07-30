import React, { useState } from 'react';
import { View, Text, StatusBar, ImageBackground, StyleSheet, ToastAndroid, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { primaryColor, screenHeight, screenWidth } from '../constants';
import { Paragraph, Subheading, Surface, Title, Button, TextInput } from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AppButtonComponent from '../components/AppButtonComponent';
import { store } from '../store';

const StartMachineScreen = (props) => {
    const [employeeId, setEmployeeId] = useState('');

    return (
        <Surface style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <ScrollView>
                <Title style={{ marginHorizontal: 15, fontSize: 24 }}>Tap the machine to Start</Title>
                <ImageBackground
                    source={require('../assets/bg.png')}
                    style={styles.background_image}
                    resizeMode="stretch"
                />
                <View style={{ marginHorizontal: 15, marginTop: 30, marginBottom: 10 }}>
                    <TouchableOpacity onPress={() => {
                        Alert.alert("Brew My Coffee", "Tap the Machine with NFC enabled device and follow the screens to brew a perfect coffee any time of the day (not just mornings ;) ) !!", [
                            {
                                text: "Ok",
                                onPress: () => null,
                                style: "cancel"
                            },
                        ])
                    }}>
                        <Subheading style={{ fontWeight: 'bold', textDecorationLine: "underline" }}>
                            How does this work</Subheading>
                    </TouchableOpacity>
                    <Paragraph>{'\n'}{'\n'}OR Dont have NFC? We got you</Paragraph>

                    <TextInput
                        placeholder="Enter Employee Id to continue"
                        style={{ backgroundColor: 'white' }}
                        onChangeText={(text) => {
                            setEmployeeId(text);
                            console.log("", employeeId);
                        }}
                        keyboardType="number-pad"
                    />
                </View>
                <AppButtonComponent
                    title="Start"
                    disabled={employeeId ? false : true}
                    onPress={() => {
                        store.dispatch({ type: 'SET_EMPLOYEE_ID', newValue: employeeId });
                        props.navigation.navigate('SelectCoffeeStyleScreen')
                    }}
                />
            </ScrollView>


        </Surface>
    )
}

export default StartMachineScreen;

const styles = StyleSheet.create({
    background_image: {
        width: '100%',
        height: screenHeight * 0.46,
        marginTop: 70,
    },

})