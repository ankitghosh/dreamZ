
import React, {Component} from "react";
import {
    TouchableOpacity,
    Image,Platform,View,Text
} from 'react-native';
import  {Actions } from 'react-native-router-flux'

export default class Abcd extends Component {
    render() {
        return (
            <View>
            <TouchableOpacity onPress={Actions.category} >
            <Text> I am Here</Text>
            </TouchableOpacity>
            </View>
        );
    }
}