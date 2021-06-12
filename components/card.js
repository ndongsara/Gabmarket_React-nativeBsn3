import React, { Component } from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

import { createStackNavigator } from '@react-navigation/stack';
import Anatomy from './anatomy';
const Stack = createStackNavigator();
import data from '../data.json'


function Cardshow  ({ name }) {
    return (
      

              <Card style={{flex: 1,height: 100, width: 100,}}>
                
                
                  
                  <Image
                    style={{height: 200, width: 200, flex: 1}}
                    source={require('../assets/meche.png')}/> 
                    <Text>
                      
                      {name}
                     
                    </Text>
                  
                
              </Card>
     
      
    );
  }
  export default Cardshow ;