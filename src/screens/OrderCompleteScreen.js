import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { Paragraph, Subheading, Surface, Title, Button, List, Avatar, Headline, Caption } from 'react-native-paper';
import { primaryColor, secondaryColor } from '../constants';
import { store } from '../store';
import { Icon } from 'react-native-elements'

const OrderCompleteScreen = (props) => {
    const [coffeeName, setCoffeeName] = useState(store.getState().coffeeItems.selectedCoffeeType.name);
    const [selectedCoffeeSubselections, setSelectedCoffeeSubselections] = useState(store.getState().coffeeItems.selectedCoffeeSubselections);
    const [coffeeSize, setCoffeeSize] = useState(store.getState().coffeeItems.selectedCoffeeSize.name);

    useEffect(() => {
        //setSelectedCoffeeSubselections(store.getState().coffeeItems.selectedCoffeeSubselections);

        console.log("Coffee order : ", coffeeName, selectedCoffeeSubselections, coffeeSize);
    }, []);

    return (
        <Surface style={{ flex: 1, backgroundColor: secondaryColor }}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <View style={{ paddingHorizontal: 15, marginTop: 30, }}>

                <Title style={{ fontSize: 26, alignSelf: 'center', textDecorationLine: 'underline', color: 'white' }}>Order Summary</Title>

                <Subheading style={{ fontSize: 18, alignSelf: 'center', color: 'white' }}>Thanks for ordering with us!! Your order is complete now and will be announced soon.
                    {'\n'}Below is the Order summary{'\n'}
                </Subheading>

                <View style={{ marginHorizontal: 15 }}>

                    <Title>{coffeeName} ( size : {coffeeSize})</Title>

                    <Subheading style={{ textDecorationLine: 'underline', color: 'white' }}>Extras:</Subheading >

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
                                                        <List.Item
                                                            title={obj.name}
                                                            key={obj._id}
                                                            titleStyle={{ color: 'white' }}
                                                        />
                                                    )
                                                })
                                        }
                                    </View>
                                )
                            })
                        )
                    }

                    <View style={{
                        marginTop: 250, flexDirection: 'row', justifyContent: 'space-between'
                    }}>
                        <Icon
                            name='info'
                            color='white'
                            type='material'
                        />
                        <Subheading
                            style={{
                                color: 'white'
                            }}
                        >For issues with order, please reach out to the front desk</Subheading>
                    </View>
                </View>

            </View>

        </Surface>
    )
}

export default OrderCompleteScreen;
