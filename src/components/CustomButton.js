import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';

const CustomButton = ({title, type1 = false, type2 = false, onPress=()=> {} }) => {
  const {width} = Dimensions.get('window');
  return (
    <TouchableOpacity
      style={{
        height: (width - 70) / 4,
        width: (width - 70) / 4,
        backgroundColor: type1 ? '#191919' : type2 ? '#323232' : '#FF7433',
        borderRadius: (width - 70) / 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      }}
      activeOpacity={0.8} onPress={onPress} >
      <Text
        style={{
          color: type1 ? '#FF7433' : type2 ? 'white' : 'white',
          fontSize: 30,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
