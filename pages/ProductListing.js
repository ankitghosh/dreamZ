import React, {Component} from "react";
import { StyleSheet, Text, AppRegistry, ScrollView, Image, NavigatorIOS, Dimensions, Platform, Button, View,TouchableOpacity, hidden, TextInput } from 'react-native';
import  {Actions } from 'react-native-router-flux';
import MyStyle from './../style/MyStyle'
import FloatingButtonFilter from './../shopping_page_modules/FloatingButtonFilter'
const {width, height, scale} = Dimensions.get("window"),
halfWidth = (width-17)/2;
halfCard = (width-42)/2

export default class ProductListing extends Component {
    render() {
        return (
            <View style={MyStyle.body}>

            <ScrollView showsVerticalScrollIndicator={false} >

            <View style={MyStyle.mytextAlignRight}>  
             <Text style={MyStyle.pageHeadingTime}>12/04/2017</Text>
            </View>

<View style={{width:halfWidth, "flexDirection":"row",}}>

        <View style={{width:halfWidth, }}>

                <View style={MyStyle.halfCard}>
                 <Image style={{width:halfCard, height:173, borderTopLeftRadius:4, borderTopRightRadius:4, borderBottomLeftRadius:0, borderBottomRightRadius:0}} source={require('./../images/s1.jpeg') }/>
                <View style={ MyStyle.nameBox}>
                <Text style={MyStyle.price}>Rs. 3199</Text>
                <Text style={MyStyle.name}>Adidas</Text>
                </View>
                </View>


                 <View style={MyStyle.halfCard}>
                 <Image style={{width:halfCard, height:181, borderTopLeftRadius:4, borderTopRightRadius:4, borderBottomLeftRadius:0, borderBottomRightRadius:0}} source={require('./../images/t1.jpeg') }/>
                <View style={ MyStyle.nameBox}>
                <Text style={MyStyle.price}>Rs. 850</Text>
                <Text style={MyStyle.name}>Tommy Hilfiger (Men)</Text>
                </View>
                </View>


                 <View style={MyStyle.halfCard}>
                 <Image style={{width:halfCard, height:165, borderTopLeftRadius:4, borderTopRightRadius:4, borderBottomLeftRadius:0, borderBottomRightRadius:0}} source={require('./../images/w2.jpeg') }/>
                <View style={ MyStyle.nameBox}>
                <Text style={MyStyle.price}>Rs. 3199</Text>
                <Text style={MyStyle.name}>Diesel</Text>
                </View>
                </View>


             

        </View>

<View style={{width:halfWidth, }}>

                <View style={MyStyle.halfCard}>
                 <Image style={{width:halfCard, height:220, borderTopLeftRadius:4, borderTopRightRadius:4, borderBottomLeftRadius:0, borderBottomRightRadius:0}} source={require('./../images/t2.png') }/>
                <View style={ MyStyle.nameBox}>
                <Text style={MyStyle.price}>Rs. 1850</Text>
                <Text style={MyStyle.name}>Puma(Men)</Text>
                </View>
                </View>


                 <View style={MyStyle.halfCard}>
                 <Image style={{width:halfCard, height:165, borderTopLeftRadius:4, borderTopRightRadius:4, borderBottomLeftRadius:0, borderBottomRightRadius:0}} source={require('./../images/w1.jpeg') }/>
                <View style={ MyStyle.nameBox}>
                <Text style={MyStyle.price}>Rs. 1850</Text>
                <Text style={MyStyle.name}>Puma(Men)</Text>
                </View>
                </View>

                    <View style={MyStyle.halfCard}>
                 <Image style={{width:halfCard, height:124, borderTopLeftRadius:4, borderTopRightRadius:4, borderBottomLeftRadius:0, borderBottomRightRadius:0}} source={require('./../images/s3.jpeg') }/>
                <View style={ MyStyle.nameBox}>
                <Text style={MyStyle.price}>Rs. 4500</Text>
                <Text style={MyStyle.name}>Nike</Text>
                </View>
                </View>
</View>
</View>

<View style={MyStyle.mytextAlignRight}>  
             <Text style={MyStyle.pageHeadingTime}>11/04/2017</Text>
            </View>

<View style={{width:halfWidth, "flexDirection":"row",}}>

        <View style={{width:halfWidth, }}>

                <View style={MyStyle.halfCard}>
                 <Image style={{width:halfCard, height:173, borderTopLeftRadius:4, borderTopRightRadius:4, borderBottomLeftRadius:0, borderBottomRightRadius:0}} source={require('./../images/s3.jpeg') }/>
                <View style={ MyStyle.nameBox}>
                <Text style={MyStyle.price}>Rs. 3199</Text>
                <Text style={MyStyle.name}>Adidas</Text>
                </View>
                </View>


                 <View style={MyStyle.halfCard}>
                 <Image style={{width:halfCard, height:181, borderTopLeftRadius:4, borderTopRightRadius:4, borderBottomLeftRadius:0, borderBottomRightRadius:0}} source={require('./../images/s5.jpeg') }/>
                <View style={ MyStyle.nameBox}>
                <Text style={MyStyle.price}>Rs. 850</Text>
                <Text style={MyStyle.name}>Tommy Hilfiger (Men)</Text>
                </View>
                </View>


                 <View style={MyStyle.halfCard}>
                 <Image style={{width:halfCard, height:165, borderTopLeftRadius:4, borderTopRightRadius:4, borderBottomLeftRadius:0, borderBottomRightRadius:0}} source={require('./../images/w3.jpeg') }/>
                <View style={ MyStyle.nameBox}>
                <Text style={MyStyle.price}>Rs. 3199</Text>
                <Text style={MyStyle.name}>Diesel</Text>
                </View>
                </View>


             

        </View>

<View style={{width:halfWidth, }}>

                <View style={MyStyle.halfCard}>
                 <Image style={{width:halfCard, height:294, borderTopLeftRadius:4, borderTopRightRadius:4, borderBottomLeftRadius:0, borderBottomRightRadius:0}} source={require('./../images/p1.png') }/>
                <View style={ MyStyle.nameBox}>
                <Text style={MyStyle.price}>Rs. 450</Text>
                <Text style={MyStyle.name}>Louis Philippe</Text>
                </View>
                </View>


                 <View style={MyStyle.halfCard}>
                 <Image style={{width:halfCard, height:165, borderTopLeftRadius:4, borderTopRightRadius:4, borderBottomLeftRadius:0, borderBottomRightRadius:0}} source={require('./../images/w4.jpeg') }/>
                <View style={ MyStyle.nameBox}>
                <Text style={MyStyle.price}>Rs. 1850</Text>
                <Text style={MyStyle.name}>Puma(Men)</Text>
                </View>
                </View>

                    <View style={MyStyle.halfCard}>
                 <Image style={{width:halfCard, height:124, borderTopLeftRadius:4, borderTopRightRadius:4, borderBottomLeftRadius:0, borderBottomRightRadius:0}} source={require('./../images/s6.jpeg') }/>
                <View style={ MyStyle.nameBox}>
                <Text style={MyStyle.price}>Rs. 4500</Text>
                <Text style={MyStyle.name}>Nike</Text>
                </View>
                </View>
</View>
</View>

<View style={{ height:100,}}>

</View>
            </ScrollView >


             <FloatingButtonFilter  /> 

            </View>
        );
    }
}
