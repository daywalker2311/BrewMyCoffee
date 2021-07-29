import React, { Component, useEffect, useState } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Paragraph, Subheading, Surface, Title, Button, List, Avatar } from 'react-native-paper';
import CoffeeElementItem from '../components/CoffeeElementItem';
import API from '../api/baseApiIinstance';

const SelectCoffeeStyleScreen = (props) => {

    const [coffeeTypes, setCoffeeTypes] = useState([]);

    useEffect(() => {
        API().get('coffee-machine/60ba1ab72e35f2d9c786c610').then((response) => {
            console.log("Response : ", response.data);

            setCoffeeTypes(response.data.types);
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

                <View style={{ marginHorizontal: 15 }}>

                    {
                        coffeeTypes.map((item) => {
                            return (
                                <CoffeeElementItem
                                    key={item._id}
                                    title={item.name}
                                    //imgSrc="large.png"
                                    size="50"
                                    onPress={() => props.navigation.navigate('SelectCoffeeSizeScreen')}

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
