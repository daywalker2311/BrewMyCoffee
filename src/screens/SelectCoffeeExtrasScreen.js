import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Paragraph, Subheading, Surface, Title, Button, List, Avatar } from 'react-native-paper';
import CoffeeElementItem from '../components/CoffeeElementItem';


const SelectCoffeeExtrasScreen = (props) => {

    return (
        <Surface style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <View>
                <Title style={{ marginHorizontal: 15, fontSize: 24 }}>Select your style</Title>

                <View style={{ marginHorizontal: 15 }}>
                    <CoffeeElementItem title="Lungo"
                        imgSrc="large.png"
                        size="50"
                    />

                    <List.Item
                        title="Espresso"
                        left={props =>
                            <Image
                                source={require('../assets/espresso.png')}
                                style={{ width: 50, height: 50, }}
                            />
                        }
                    />
                    <List.Accordion
                        title="Milk"
                        left={props =>
                            <Image
                                source={require('../assets/large.png')}
                                style={{ width: 50, height: 50, }}
                            />
                        }
                    >
                        <View>
                            <Title>heyyyy</Title>
                        </View>

                        <List.Item
                            title="First Item"
                            description="Item description"
                            left={props =>
                                <Image
                                    source={require('../assets/large.png')}
                                    style={{ width: 50, height: 50, }}
                                />
                            }
                        />
                    </List.Accordion>
                </View>

            </View>
        </Surface>
    )
}

export default SelectCoffeeExtrasScreen;
