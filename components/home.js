import React from 'react';
import {   View, Title,TouchableOpacity,StyleSheet, Image } from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import data from '../data.json'


const Stack = createStackNavigator();
function HomeScreen({ navigation  }) {
  return (
    
    <Content>
    {data.categories.map((category) => (
      <Card style={{flex: 0}}>
        <TouchableOpacity  onPress={() => navigation.navigate('Articles',category)}>
        <CardItem >
          <Left>
            <Thumbnail source={{uri: 'Image URL'}} />
            <Body>
              <Text style={styles.titre} >{category.title}</Text>
              
            </Body>
          </Left>
        </CardItem>
        </TouchableOpacity>
        <TouchableOpacity  Button={true} onPress={() => navigation.navigate('Articles')}>
        <CardItem >
          <Body>
            <Image source={{uri: category.images}} style={{height: 200, width: 200, flex: 1}}/>
            <Text>
              {category.title}
            </Text>
          </Body>
        </CardItem>
        </TouchableOpacity>
      </Card>
   ))}
    </Content> 
  );
}
const styles = StyleSheet.create({
  titre: {
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },

});

  
  export default HomeScreen ;