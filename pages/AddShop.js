import React, {Component} from "react";
import { StyleSheet, Text, AppRegistry, ScrollView, Image, NavigatorIOS, Dimensions, Platform, Button, View,TouchableOpacity, hidden, TextInput } from 'react-native';
import  {Actions } from 'react-native-router-flux';
import MyStyle from './../style/MyStyle'
import ShopCard from './../shopping_page_modules/ShopCard'
import FloatingButton from './../shopping_page_modules/FloatingButton'


export default class AddShop extends Component {
    render() {
        return (
            <View style={MyStyle.body}>
           
            <View style={MyStyle.searchBox} >
            <TextInput underlineColorAndroid='transparent' placeholder="PIN Code or Area Name " style={MyStyle.addShopSearch} />
            <View style={MyStyle.searchBottomLine}></View>
            </View>

<View style={MyStyle.buttonArea}>
            <View style={MyStyle.buttonBox}>
<Text style= {MyStyle.buttonText}> SEARCH </Text>
            </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom:100,}}>
                <ShopCard />

            </ScrollView >

              

            </View>
        );
    }
}
