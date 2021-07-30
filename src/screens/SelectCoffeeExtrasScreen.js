import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Image, StyleSheet, ScrollView } from 'react-native';
import { Paragraph, Subheading, Surface, Title, Button, List, } from 'react-native-paper';
import { primaryColor, screenWidth, secondaryColor } from '../constants';
import { CheckBox } from 'react-native-elements';
import { store } from '../store';
import { color } from 'react-native-elements/dist/helpers';

const SelectCoffeeExtrasScreen = (props) => {
    const [checked, setChecked] = useState(false);
    const [availableExtras, setAvailableExtras] = useState([]);

    const selectedCoffeeExtras = store.getState().coffeeItems.selectedCoffeeType.extras;
    const coffeeObjExtras = store.getState().coffeeItems.coffeeObj.extras;

    useEffect(() => {
        setAvailableExtras(getExtras());
    }, []);

    const getExtras = () => {
        coffeeObjExtras.forEach(element => {
            element.subselections.forEach(element2 => {
                element2.checked = false;
                //console.log("==========> ", element2);
            });
        });

        let arr = [];
        coffeeObjExtras.forEach(element => {
            selectedCoffeeExtras.forEach(item => {
                //console.log("element to be pushed : ", element);
                (element._id == item) ?
                    (
                        arr.push(element)
                    ) : ''
            });
        });

        console.log("extras object after filtering : ", arr);
        return arr;
    }

    const onCheckboxChange = (obj, index, index2) => {
        let newSelection = availableExtras;
        let prevValue = newSelection[index].subselections[index2].checked;
        newSelection[index].subselections[index2].checked = !prevValue;
        console.log("newselection array cahnge value: ", newSelection[index].subselections[index2]);

        setAvailableExtras(newSelection);

        // for (let index = 0; index < newSelection.length; index++) {
        //     console.log("newselection array BEFORE  cahnge : ", newSelection[index].subselections);

        //     const subSelections = newSelection[index].subselections;
        //     console.log("obj in oncheckchange : ", obj)
        //     subSelections.forEach(element => {
        //         console.log("subselections element : ", element)

        //         if (element._id == obj._id) {
        //             console.log("ischecked ? ", element.checked);
        //             element.checked = !element.checked
        //             console.log("ischecked after ? ", element.checked);
        //         }

        //     });
        //     console.log("newselection array after cahnge : ", newSelection[index].subselections);
        // }

    }


    const onCheckboxChange2 = (obj) => {
        console.log("coffeee subslections : ", store.getState().coffeeItems.selectedCoffeeSubselections);

        console.log("oncheckcahnge : ", obj)
        const currentSubselection = store.getState().coffeeItems.selectedCoffeeSubselections;

        if (currentSubselection.length === 0) {
            console.log("empty")
            obj.checked = true;
            store.dispatch({ type: 'SET_SELECTED_COFFEE_SUBSELECTIONS', newValue: [obj] })
        } else {
            console.log("not empty")
            for (let index = 0; index < currentSubselection.length; index++) {

                if (currentSubselection[index]._id == obj._id) {
                    currentSubselection.splice(index, 1);
                    console.log(obj.name, "present already, popping... ", obj.name, currentSubselection);
                    store.dispatch({ type: 'SET_SELECTED_COFFEE_SUBSELECTIONS', newValue: currentSubselection });
                    return;

                }
            }
            console.log("not present, pushing... ", obj.name)
            obj.checked = true;

            currentSubselection.push(obj);
            store.dispatch({ type: 'SET_SELECTED_COFFEE_SUBSELECTIONS', newValue: currentSubselection });

        }
    }

    return (
        <Surface style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <ScrollView style={{ marginBottom: 100 }}>
                <Title style={{ marginHorizontal: 15, fontSize: 24 }}>Select your extra's{'\n'}</Title>

                <View style={{ marginHorizontal: 15 }}>

                    {
                        //DISCLAIMER : if we shift the '(' below to the next line, the map will run TWICE !!!
                        availableExtras && (
                            availableExtras.map((item, index1) => {
                                console.log("item :: ", item, index1);
                                return (
                                    <View style={{ marginBottom: 5 }}>
                                        <List.Accordion
                                            title={item.name}
                                            titleStyle={{ color: 'white' }}
                                            key={item._id}
                                            left={props =>
                                                <Image
                                                    source={item.name.includes('milk') ?
                                                        require('../assets/milk.png')
                                                        :
                                                        require('../assets/cappuccino.png')
                                                    }
                                                    style={{ width: 50, height: 50, marginHorizontal: 10 }}
                                                />
                                            }
                                            style={styles.list_acc_style}
                                        >
                                            <View style={styles.list_container}>

                                                <View style={styles.divider} />
                                                {
                                                    item.subselections.map((obj, index2) => {
                                                        console.log("checked : ", availableExtras[index1].subselections[index2])
                                                        return (
                                                            <List.Item
                                                                title={obj.name}
                                                                key={obj._id}
                                                                titleStyle={{ color: 'white' }}
                                                                right={(props) =>
                                                                    <CheckBox
                                                                        center
                                                                        iconRight
                                                                        checkedIcon='check-circle'
                                                                        checkedColor="white"
                                                                        uncheckedIcon='circle-o'
                                                                        uncheckedColor="white"
                                                                        checked={availableExtras[index1].subselections[index2].checked}
                                                                        size={26}
                                                                        onPress={() => {
                                                                            onCheckboxChange(obj, index1, index2);
                                                                        }}
                                                                    />
                                                                }
                                                                style={styles.inner_element}
                                                            />
                                                        )
                                                    })
                                                }
                                            </View>
                                        </List.Accordion>
                                    </View>
                                )
                            })
                        )

                    }
                </View>
            </ScrollView>

            <Button mode="outlined"
                uppercase={false}
                color="white"
                style={styles.done_btn}
                onPress={() => {
                    store.dispatch({ type: 'SET_SELECTED_COFFEE_SUBSELECTIONS', newValue: availableExtras });

                    props.navigation.navigate('OrderCompleteScreen')
                }
                }
            >Done</Button>

        </Surface>
    )
}

export default SelectCoffeeExtrasScreen;

const styles = StyleSheet.create({
    divider: {
        width: 'auto',
        backgroundColor: 'white',
        height: 1,
        marginHorizontal: 30,
    },
    inner_element: {
        height: 70,
        width: screenWidth * 0.8,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: secondaryColor,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    done_btn: {
        backgroundColor: primaryColor,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 30,
        width: screenWidth * 0.92,
        height: 50,
        justifyContent: 'center',

    },
    list_acc_style: {
        height: 90,
        paddingHorizontal: 10,
        backgroundColor: primaryColor,
        justifyContent: 'center',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    divider: {
        width: 'auto',
        backgroundColor: 'white',
        height: 1,
        marginHorizontal: 20,
        marginBottom: 15
    },
    list_container: {
        backgroundColor: primaryColor,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 0,
        paddingVertical: 20
    }
})
