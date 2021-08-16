import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { Paragraph, Subheading, Surface, Title, Button, List, Avatar } from 'react-native-paper';
import CoffeeElementItem from '../components/CoffeeElementItem';
import { store } from '../store';


const SelectCoffeeSizeScreen = (props) => {

    console.log("store selectedCoffeeType: ", store.getState().coffeeItems.selectedCoffeeType.sizes);
    const selectedCoffeeSizes = store.getState().coffeeItems.selectedCoffeeType.sizes;
    const coffeeObjSizes = store.getState().coffeeItems.coffeeObj.sizes;
    console.log("coffeeobjsize :: ", coffeeObjSizes, selectedCoffeeSizes);

    const [availableSizes, setAvailableSizes] = useState([]);

    useEffect(() => {
        setAvailableSizes(getCoffeeSizes());
        console.log("availableSizes : ", availableSizes);
    }, []);

    const getCoffeeSizes = () => {

        let arr = [];
        coffeeObjSizes.forEach(element => {
            selectedCoffeeSizes.forEach(item => {
                (element._id == item) ?
                    (
                        arr.push(element)
                    ) : ''
            });
        });

        return arr;
    }

    return (
        <Surface style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <Title style={{ marginHorizontal: 15, fontSize: 24 }}>Select your size</Title>

            <View style={{ marginHorizontal: 15 }}>
                {
                    availableSizes && (
                        availableSizes.map((item) => {
                            return (
                                <CoffeeElementItem title={item.name}
                                    key={item._id}
                                    size="50"
                                    onPress={() => {
                                        store.dispatch({ type: 'SET_SELECTED_COFFEE_SIZE', newValue: item })
                                        props.navigation.navigate('SelectCoffeeExtrasScreen')
                                    }}
                                />
                            )
                        })
                    )
                }
            </View>
        </Surface>
    )
}

export default SelectCoffeeSizeScreen;
