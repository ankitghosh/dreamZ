import React, {Component} from "react";
import { TouchableOpacity, Image,Platform,View,Text, StyleSheet, StatusBar } from 'react-native';
import  {Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-ui';
import MyStyle from './../style/MyStyle'

export default class ShopCard extends Component {
    render() {
        return (
            <View style={MyStyle.body}>

			<Text style={MyStyle.pageHeadingSmall}>110019 (GOVINDPURI)</Text>

           
	            <View style={MyStyle.card}>

<TouchableOpacity onPress={Actions.productlisting} >

	            	<Text style={MyStyle.lastUpdateTime}> 12/10/2017 </Text>

		            <View  style={MyStyle.cardContent}>
						<View   style={MyStyle.profilePicBox}>
		            	<Image style={MyStyle.profilePic} source={require('./../images/4.png') }/>
                        </View>
			            <View style={ MyStyle.cardTextBox}>
				            <View >
				                <Text style= {MyStyle.cardHeading}>{'Raja fashion outlet '.toUpperCase()} </Text>
				            </View>

				            <View >
				                <Text style={ MyStyle.addressText }>+91 9278032235 </Text>
				 				<Text style={ MyStyle.addressText }> GOVINDPURI, PIN : 110019</Text>
				            </View>

		          		</View>
		          		<View style={MyStyle.notificationBox }>
						<Text style={MyStyle.notificationText}>11 </Text>
						</View>
		            </View>

					<View style={ MyStyle.productImageBox}>
		            <Image style={MyStyle.productImageOnCard}  source={require('./../images/s1.jpeg') }/>
		            <Image style={MyStyle.productImageOnCard} source={require('./../images/w1.jpeg') }/>
		            <Image style={MyStyle.productImageOnCard} source={require('./../images/t1.jpeg') }/>
		            <Image style={MyStyle.productImageOnCard} source={require('./../images/s2.jpeg') }/>
					</View>

 </TouchableOpacity>

					 <TouchableOpacity onPress={Actions.category} >
					<View style={ MyStyle.cardBottomBox}>
				      <Text style={ MyStyle.cardBottomLink}>ADD THIS </Text>
				    </View>
				    </TouchableOpacity>
	            </View>



	             <View style={MyStyle.card}>

	            	<Text style={MyStyle.lastUpdateTime}> 12/10/2017 </Text>

		            <View  style={MyStyle.cardContent}>
		            	<View   style={MyStyle.profilePicBox}>
		            	<Image style={MyStyle.profilePic} source={require('./../images/fashion_hut.png') }/>
                        </View>
			            <View style={ MyStyle.cardTextBox}>
				            <View >
				                <Text style= {MyStyle.cardHeading}>{'fashion hut'.toUpperCase()} </Text>
				            </View>

				            <View >
				                <Text style={ MyStyle.addressText }>+91 9278032235 </Text>
				 				<Text style={ MyStyle.addressText }> GOVINDPURI, PIN : 110019</Text>
				            </View>

		          		</View>
		          		 <View style={MyStyle.notificationBox }>
						<Text style={MyStyle.notificationText}>11 </Text>
						</View>
		            </View>

					<View style={{ flexDirection:'row', marginTop:20,}}>
		            <Image style={MyStyle.productImageOnCard}  source={require('./../images/w2.jpeg') }/>
		            <Image style={MyStyle.productImageOnCard} source={require('./../images/s3.jpeg') }/>
		            <Image style={MyStyle.productImageOnCard} source={require('./../images/w4.jpeg') }/>
		            <Image style={MyStyle.productImageOnCard} source={require('./../images/s5.jpeg') }/>
					</View>
					 <TouchableOpacity onPress={Actions.category} >
					<View  style={ MyStyle.cardBottomBox}>
				      <Text style={ MyStyle.cardBottomLink}>ADD THIS </Text>
				    </View>
				    </TouchableOpacity>
	            </View>
            

 <View style={MyStyle.card}>

	            	<Text style={MyStyle.lastUpdateTime}> 12/10/2017 </Text>

		            <View  style={MyStyle.cardContent}>
		            	<View   style={MyStyle.profilePicBox}>
		            	<Image style={MyStyle.profilePic} source={require('./../images/shop3.jpeg') }/>
                        </View>
			            <View style={ MyStyle.cardTextBox}>
				            <View >
				                <Text style= {MyStyle.cardHeading}>{'lourel fashion store'.toUpperCase()} </Text>
				            </View>

				            <View >
				                <Text style={ MyStyle.addressText }>+91 9278032235 </Text>
				 				<Text style={ MyStyle.addressText }> GOVINDPURI, PIN : 110019</Text>
				            </View>
				            
		          		</View>
		          		<View style={MyStyle.notificationBox }>
						<Text style={MyStyle.notificationText}>11 </Text>
						</View>
		            </View>

					<View style={{ flexDirection:'row', marginTop:20,}}>
		            <Image style={MyStyle.productImageOnCard}  source={require('./../images/s6.jpeg') }/>
		            <Image style={MyStyle.productImageOnCard} source={require('./../images/s7.jpeg') }/>
		            <Image style={MyStyle.productImageOnCard} source={require('./../images/w3.jpeg') }/>
		            <Image style={MyStyle.productImageOnCard} source={require('./../images/w4.jpeg') }/>
					</View>
					 <TouchableOpacity onPress={Actions.category} >
					<View  style={ MyStyle.cardBottomBox}>
				      <Text style={ MyStyle.cardBottomLink}>ADD THIS </Text>
				    </View>
				    </TouchableOpacity>
	            </View>


<View style={{ height:100,}}>

</View>

            </View>
        );
    }
}