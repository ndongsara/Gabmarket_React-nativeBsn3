import React from 'react';

import {  ImageBackground, SafeAreaView, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import {  Card, CardItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


function DetailArticlesScreen({route,navigation }) {
  const product = route.params;
 
    return (
      

      
      <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={style.backgroundImageContainer}>
          <ImageBackground style={style.backgroundImage} source={{uri:product.images}}>
            <View style={style.header}>
            </View>
          </ImageBackground>
        </View>

        <View style={style.detailsContainer}>
         
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {product.title}
            </Text>

          </View>

         
          <Text style={{marginTop: 20, color: "grey"}}>
            {product.description}
          </Text>

          
          <View style={style.footer}>
            <View>
              <Text
                style={{fontSize: 12, fontWeight: 'bold'}}>
               Prix :
              </Text>
              <Text
                style={{color: "blue", fontWeight: 'bold', fontSize: 18}}>
                {product.prix} € 
              </Text>
            </View>
            
            <Button style={style.commandeNowBtn}>
              <Text style={{color: "white",fontSize:8, fontWeight: 'bold'}}>contacter le vendeur</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
   
      
    );
  }
  const style = StyleSheet.create({
    backgroundImageContainer: {
      elevation: 20,
      marginHorizontal: 20,
      marginTop: 20,
      alignItems: 'center',
      height: 350,
    },
    backgroundImage: {
      height: '100%',
      width: '100%',
      borderRadius: 20,
      overflow: 'hidden',
    },
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    headerBtn: {
      height: 50,
      width: 50,
      backgroundColor: "white",
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    footer: {
      height: 70,
      backgroundColor: "light",
      borderRadius: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    commandeNowBtn: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#3f51b5",
      borderRadius: 30 ,
      paddingHorizontal: 20,
    },
    detailsContainer: {flex: 1, paddingHorizontal: 20, marginTop: 40},
    facility: {flexDirection: 'row', marginRight: 15},
    facilityText: {marginLeft: 5, color: "grey"},
  });
  export default DetailArticlesScreen ;