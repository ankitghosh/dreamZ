import React, {Component} from "react";
import { TouchableOpacity, Image,Platform,View,Text, StyleSheet, StatusBar } from 'react-native';
import  {Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-ui';
import MyStyle from './../style/MyStyle'

export default class FloatingButtonFilter extends Component {
    render() {
        return (
            <View style={{backgroundColor:"transparent", position: 'absolute', bottom: 0, right:0,}}>
               <TouchableOpacity onPress={Actions.addshop} >
				<View style={MyStyle.flotingButtonBg}>
 				<Image style={MyStyle.flotingButtonIcon} source={require('./../images/icons/filter.png') }/>
				</View>
</TouchableOpacity>
            </View>
        );
    }
}