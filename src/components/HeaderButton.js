import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { IonIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../../constants/Colors';

const CustomHeaderButton = props => {
  return <HeaderButton {...props}
    IconComponent={FontAwesome}
    iconSize={23}
    color={Colors.primaryColor}/>
}
