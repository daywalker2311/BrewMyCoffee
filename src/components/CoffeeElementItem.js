import React from 'react';
import { Image } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import { primaryColor } from '../constants';

const CoffeeElementItem = ({ title, ...otherProps }) => {

    const getImageByTitle = (title) => {
        switch (title) {
            case 'Cappuccino':
                return require('../assets/cappuccino.png');
            case 'Espresso':
                return require('../assets/espresso.png');
            case 'Large':
                return require('../assets/large.png')
            case 'Venti':
                return require('../assets/medium.png')

            default:
                return require('../assets/small.png')
        }
    }
    return (
        <List.Item
            title={title}
            titleStyle={{ color: 'white' }}
            left={otherProps =>
                <Image
                    source={
                        getImageByTitle(title)
                    }
                    style={{ width: 50, height: 50, marginHorizontal: 10 }}
                />
            }
            {...otherProps}
            style={{
                height: 90,
                paddingHorizontal: 10,
                backgroundColor: primaryColor,
                marginVertical: 3,
                borderRadius: 4,
                justifyContent: 'center',

            }}
        />
    )
}

export default CoffeeElementItem;
