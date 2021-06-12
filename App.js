
import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

import { Container } from 'native-base';

import Anatomy from './components/anatomy';

import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import ArticlesScreen from './components/articles';

import DetailArticlesScreen from './components/detailsarticles';



export default function App() {
  return (
    
    <Container>
    
      <Image
      style={{ width: 50, height: 50 }}
      source={require('../saraApp/assets/panier.svg')}/>

      <Anatomy> </Anatomy>
      


      </Container>
     
  );
}


