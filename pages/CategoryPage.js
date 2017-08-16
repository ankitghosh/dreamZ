import React, {Component} from "react";
import {
    TouchableOpacity,
    Image,Platform,View,Text
} from 'react-native';
import  {Actions } from 'react-native-router-flux'

export default class Category extends Component {
    render() {
        return (
            <View>
            <TouchableOpacity onPress={Actions.home} >
            <Text> Category</Text>
            </TouchableOpacity>
            </View>
        );
    }
}
