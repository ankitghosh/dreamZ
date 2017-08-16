import React, {Component} from "react";
import { TouchableOpacity, Image,Platform,View,Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import  {Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-ui';
import MyStyle from './../style/MyStyle'
import ShopCard from './../shopping_page_modules/ShopCard'
import FloatingButton from './../shopping_page_modules/FloatingButton'




export default class App extends Component {
    render() {
        return (
            <View style={MyStyle.body}>

            <ScrollView showsVerticalScrollIndicator={false}>
				<ShopCard />

			</ScrollView >
              <FloatingButton  />
            </View>
        );
    }
}
