import React from 'react';
import { TouchableOpacity,StyleSheet,Image} from 'react-native';

import {  Content, Card, CardItem, Thumbnail, Text, Left, Body, Right } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function ArticlesScreen( {route,navigation }) {
  
  const products = route.params.product;
  
    return (
      <Content>
      {products.map((product) => (
        <Card style={{flex: 0}}>
          <TouchableOpacity  onPress={() => navigation.navigate('DetailArticles',product)}>
          <CardItem >
            <Left>
              <Thumbnail source={{uri: product.images}} />
              <Body>
                <Text style={{ fontWeight: 'bold'}}>{product.title}</Text>
                <Text ></Text>
              </Body>
            </Left>
          </CardItem>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('DetailArticles',product)}>
          <CardItem  >
            <Body>
              <Image source={{uri: product.images}} style={{height: 200, width: 200, flex: 1}}/>
              <Text>
    
              </Text>
            </Body>
          </CardItem>
          </TouchableOpacity>
        </Card>
     ))}
      </Content>
    );
  }



  export default ArticlesScreen ;