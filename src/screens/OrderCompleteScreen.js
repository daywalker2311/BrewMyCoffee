import React, { useEffect, useState } from 'react';
import { View, StatusBar, StyleSheet, LogBox } from 'react-native';
import { Paragraph, Subheading, Surface, Title, Button, List, Avatar, Headline, Caption } from 'react-native-paper';
import { store } from '../store';
import { Icon } from 'react-native-elements'
import { primaryColor, screenWidth, secondaryColor } from '../constants';

const OrderCompleteScreen = (props) => {
    LogBox.ignoreLogs([
        'Each child in a list should have a unique "key" prop', // TODO: Remove when fixed
    ]);


    const [coffeeName, setCoffeeName] = useState(store.getState().coffeeItems.selectedCoffeeType.name);
    const [selectedCoffeeSubselections, setSelectedCoffeeSubselections] = useState(store.getState().coffeeItems.selectedCoffeeSubselections);
    const [coffeeSize, setCoffeeSize] = useState(store.getState().coffeeItems.selectedCoffeeSize.name);

    const employeeId = store.getState().coffeeItems.employeeId;
    useEffect(() => {
        console.log("Coffee order : ", coffeeName, selectedCoffeeSubselections, coffeeSize);
    }, []);

    return (
        <Surface style={{ flex: 1, backgroundColor: secondaryColor }}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <View style={{ paddingHorizontal: 25, marginTop: 30, }}>

                <Title style={{ fontSize: 30, alignSelf: 'center', textDecorationLine: 'underline', color: 'white' }}>Order Summary</Title>

                <Subheading style={{ fontSize: 18, alignSelf: 'center', color: 'white' }}>Thanks for ordering with us!! Your order is received and will be announced soon.
                    {'\n'}Below is the Order summary{'\n'}
                </Subheading>


                <View style={{ marginHorizontal: 15 }}>
                    {
                        employeeId ? (
                            <Subheading>Employee Id : {employeeId}</Subheading>
                        ) : (
                            <View></View>
                        )
                    }
                    <Title>{coffeeName} ( size : {coffeeSize})</Title>

                    <Subheading style={{ textDecorationLine: 'underline', color: 'white', marginVertical: 15 }}>Extras:</Subheading >

                    {
                        selectedCoffeeSubselections && (
                            selectedCoffeeSubselections.map((item) => {
                                return (
                                    <View>
                                        {
                                            item.subselections
                                                .filter((item) => item.checked === true)
                                                .map((obj) => {
                                                    return (
                                                        <Title key={obj._id}
                                                        >
                                                            {obj.name}
                                                        </Title>
                                                    )
                                                })
                                        }
                                    </View>
                                )
                            })
                        )
                    }

                    <View style={{
                        marginTop: 250, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'
                    }}>
                        <Icon
                            name='info'
                            color='white'
                            type='material'
                        />
                        <Subheading
                            style={{
                                color: 'white', marginLeft: 5
                            }}
                        >For issues with order, please reach out to the front desk</Subheading>
                    </View>
                </View>

            </View>
            <Button mode="outlined"
                uppercase={false}
                color={primaryColor}
                style={styles.done_btn}
                onPress={() => {
                    store.dispatch({ type: 'SET_EMPLOYEE_ID', newValue: '' });
                    props.navigation.navigate('StartMachineScreen')
                }}
            >Brew another ?</Button>

        </Surface>
    )
}

export default OrderCompleteScreen;

const styles = StyleSheet.create({
    done_btn: {
        backgroundColor: 'white',
        position: 'absolute',
        alignSelf: 'center',
        bottom: 40,
        width: screenWidth * 0.92,
        height: 50,
        justifyContent: 'center',
    },

})