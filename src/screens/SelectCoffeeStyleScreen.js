import React, { Component, useEffect, useState } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Paragraph, Subheading, Surface, Title, Button, List, Avatar, ActivityIndicator } from 'react-native-paper';
import CoffeeElementItem from '../components/CoffeeElementItem';
import API from '../api/baseApiIinstance';
import { store } from '../store';
import { primaryColor } from '../constants';


const SelectCoffeeStyleScreen = (props) => {
    console.log("store values : ", store);
    const [coffeeTypes, setCoffeeTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        API().get('coffee-machine/60ba1ab72e35f2d9c786c610').then((response) => {
            console.log("Response : ", response.data);
            store.dispatch({ type: 'SET_COFFEE_OBJ', newValue: response.data });

            setCoffeeTypes(response.data.types);
            setIsLoading(false);
        })
            .catch((err) => {
                console.log("error : ", err)
            })
    }, []);

    return (
        <Surface style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <View>
                <Title style={{ marginHorizontal: 15, fontSize: 24 }}>Select your style</Title>


                <ActivityIndicator animating={isLoading} color={primaryColor} size={40}
                    style={{ position: 'absolute', top: 200, alignSelf: 'center' }} />

                <View style={{ marginHorizontal: 15 }}>

                    {
                        coffeeTypes.map((item, index) => {
                            //console.log("index: ", index);
                            return (
                                <CoffeeElementItem
                                    key={item._id}
                                    title={item.name}
                                    //imgSrc="large.png"
                                    size="50"
                                    onPress={() => {
                                        store.dispatch({ type: 'SET_SELECTED_COFFEE_TYPE', newValue: item })
                                        props.navigation.navigate('SelectCoffeeSizeScreen')
                                    }}
                                />
                            )
                        })
                    }


                    {/* <List.Item
                        title="Cappuccino"
                        left={props =>
                            <Image
                                source={require('../assets/cappuccino.png')}
                                style={{ width: 50, height: 50, }}
                            />
                        }
                        onPress={() => props.navigation.navigate('SelectCoffeeSizeScreen')}
                    /> */}

                </View>
            </View>
        </Surface>
    )
}

export default SelectCoffeeStyleScreen;
