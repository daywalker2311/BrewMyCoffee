import React from 'react';
import { Image } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import { primaryColor } from '../constants';

const CoffeeElementItem = ({ title, ...otherProps }) => {

    return (
        <List.Item
            title={title}
            left={otherProps =>
                <Image
                    source={
                        title === 'Cappuccino' ? require('../assets/cappuccino.png') :
                            (title === 'Espresso' ? require('../assets/espresso.png') :
                                (title === 'Large' ? require('../assets/large.png') :
                                    (title === 'Venti' ? require('../assets/medium.png') :
                                        require('../assets/small.png')
                                    )
                                )
                            )
                    }
                    style={{ width: 50, height: 50, }}
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
