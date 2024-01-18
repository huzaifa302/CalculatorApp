import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';

const buttons = [
  [
    {title: 'AC', type: 'type1'},
    {title: 'DL', type: 'type1'},
    {title: '%', type: 'type1'},
    {title: '÷', type: 'type1'},
  ],
  [
    {title: '7', type: 'type2'},
    {title: '8', type: 'type2'},
    {title: '9', type: 'type2'},
    {title: '×', type: 'type1'},
  ],
  [
    {title: '4', type: 'type2'},
    {title: '5', type: 'type2'},
    {title: '6', type: 'type2'},
    {title: '-', type: 'type1'},
  ],
  [
    {title: '1', type: 'type2'},
    {title: '2', type: 'type2'},
    {title: '3', type: 'type2'},
    {title: '+', type: 'type1'},
  ],
  [
    {title: '.', type: 'type2'},
    {title: '0', type: 'type2'},
    {title: '00', type: 'type2'},
    {title: '=', type: 'type3'},
  ],
];
const Standard = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'black',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assest/Icon/menu.png')}
            style={{height: 20, width: 20, tintColor: 'white'}}
          />
          <Text style={{color: 'white', fontSize: 20, paddingLeft: 20}}>
            Standard
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            source={require('../assest/Icon/history.png')}
            style={{height: 20, width: 20, tintColor: 'white'}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <Text style={{color: 'white', fontSize: 25}}>
          {expression.replace('*', 'x').replace('/', '÷')}
        </Text>
        <Text style={{color: 'white', fontSize: 40}}> {result} </Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: 'white',
          marginVertical: 10,
        }}></View>
      {buttons.map(item => {
        return (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {item?.map(innerItem => {
              return (
                <CustomButton
                  onPress={() => {
                    if (innerItem.title == 'AC') {
                      setResult('');
                      setExpression('');
                    } else if (
                      ['+', '-', '*', '/', '%'].includes(
                        expression[expression.length - 1],
                      )
                    ) {
                    } else if (innerItem.title == '=') {
                      const result = eval(expression);
                      setResult(result);
                    } else if (innerItem.title == 'DL') {
                      const newExpression = expression.slice(
                        0,
                        expression.length - 1,
                      );
                      setExpression(newExpression);
                    } else if (innerItem.title == '×') {
                      setExpression(expression + '*');
                    } else if (innerItem.title == '÷') {
                      setExpression(expression + '/');
                    } else {
                      setExpression(expression + innerItem.title);
                    }
                  }}
                  title={innerItem.title}
                  type1={innerItem.type == 'type1'}
                  type2={innerItem.type == 'type2'}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default Standard;
