import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Paragraph, Subheading, Surface, Title, Button, List, Avatar } from 'react-native-paper';
import CoffeeElementItem from '../components/CoffeeElementItem';


const SelectCoffeeSizeScreen = (props) => {

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
                        title="Small"
                        left={props =>
                            <Image
                                source={require('../assets/small.png')}
                                style={{ width: 50, height: 50, }}
                            />
                        }
                    />
                    <List.Item
                        title="Medium"
                        left={props =>
                            <Image
                                source={require('../assets/medium.png')}
                                style={{ width: 50, height: 50, }}
                            />
                        }
                    />
                    <List.Item
                        title="Large"
                        left={props =>
                            <Image
                                source={require('../assets/large.png')}
                                style={{ width: 50, height: 50, }}
                            />
                        }
                    />

                </View>

            </View>
        </Surface>
    )
}

export default SelectCoffeeSizeScreen;
