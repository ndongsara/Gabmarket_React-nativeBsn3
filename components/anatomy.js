import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Icon ,Left, Right, Body, Button, Text } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ArticlesScreen from './articles';
import DetailArticlesScreen from './detailsarticles';
import HomeScreen from './home';
const Stack = createStackNavigator();



export default class Anatomy extends Component {
  render() {
    return (
      <Container>
        <Header>
        
          <Left>
            <Button transparent>
              <Icon name='menu' />
              
            </Button>
          </Left>
          <Body>
            <Title></Title>
 
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{flex:1}}>
        <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Gabmarket"  style={{ width: 50, height: 50 }}>
        
        < Stack.Screen name="Home" component={HomeScreen} />
        
        <Stack.Screen name="Articles" component={ArticlesScreen} />
        <Stack.Screen name="DetailArticles" component={ DetailArticlesScreen} />
      </Stack.Navigator>
      
      </NavigationContainer>

        </Content>
        <Footer>
          <FooterTab>
            <Button >
              <Text>Gabmarket@2021</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}