import React, { Component, PropTypes } from 'react';
import { StyleSheet, NavigatorIOS, Text, View, Dimensions, Platform,  } from 'react-native';

const {width, height, scale} = Dimensions.get("window"),
cardsWidth = width-32;
ScrollcardsWidth = (width-24)/2.2;;
fullCard = width;
cardsWidthSearch = width-24;
searchFeild = width-80; 
categoryBanner = width-180;
searchline = width-32;
halfCard = (width-42)/2



export default StyleSheet.create({

body:{

  "paddingLeft":8,
  "paddingRight":8,
  
},

 pageHeadingSmall:{

    "fontSize":15,
    "fontWeight":"500",
    "marginLeft":8,
    "marginBottom":5,
    "marginTop":12,
  },

   pageHeadingTime:{

    "fontSize":12,
    "fontWeight":"500",
    "marginLeft":8,
    "marginBottom":5,
    "marginTop":12,
    "marginRight":8,
  },


lastUpdateTime:{
  "fontSize":11,

   
},


profilePicBox:{
"width":71,
"height":71,
"borderRadius":(Platform.OS === 'ios') ? 15 : 65,
"marginTop":10,
"marginRight":0,
"borderColor":"#9A096A",
"borderWidth":1,
"flexDirection":"row",
"alignItems": 'center',
"justifyContent": 'center',

},

profilePic: {
"width":65,
"height":65,
"borderRadius":(Platform.OS === 'ios') ? 12 : 65,
"marginRight":0,
"flexDirection":"row"

},

cardNameHeading: {
  "fontSize":16,
  "color":"#9A096A",
  "fontWeight":"600",
},



 cardHeading:{

    "fontSize":16,
    "color":"#9A096A",
    "fontWeight":"600",
    "marginBottom":3,

  },
mytextAlignRight:{ alignItems: "flex-end", justifyContent: "flex-end",},
cardContent:{"flexDirection": "row",},
addressText:{fontSize:13, marginBottom:3,},
productImageBox:{flexDirection:'row', marginTop:20,},
productImageOnCard:{ width:63, height:80, marginRight:16},
cardTextBox:{flexDirection:'column', marginLeft:10, marginTop:10,},
cardBottomBox:{  alignItems: "flex-end", justifyContent: "flex-end",  },
cardBottomLink:{fontSize:14, fontWeight:"600", marginTop:20, marginBottom:8, color:"#95C11F"},
notificationBox:{width:25, height:25, backgroundColor:"#E85018", marginTop:8,  borderRadius:25, marginLeft:5,},
notificationText:{marginTop:4,  backgroundColor:'transparent', marginLeft:6, color:'#fff', fontWeight:'600' },
flotingButtonBg:{ width:72, height:72, borderRadius:72, backgroundColor:"#9A096A", elevation:2, shadowColor: "#000", shadowOffset: {width: 0, height: 1}, 
shadowOpacity: 0.6, margin:20,},
flotingButtonIcon:{width:24, height:24, alignItems: "center", justifyContent: "center", marginTop:24, marginLeft:24,},
searchBox:{marginTop:20, marginLeft:8,},
addShopSearch:{paddingBottom:4, paddingLeft:8, fontSize:16,},
searchBottomLine:{height:2, width:searchline, backgroundColor:"#5A6871"},
buttonArea:{alignItems: "center", justifyContent: "center", width:fullCard, backgroundColor:"transparent", marginBottom:20,},
buttonBox:{marginTop:20, minWidth:212, height:43, backgroundColor:"#9A096A",borderRadius:4, alignItems: "center", justifyContent: "center",},
buttonText:{color:"#fff", fontSize:16, fontWeight:"600", paddingLeft:75, paddingRight:75,},
nameBox:{padding:10,},
price:{marginBottom:4, fontWeight:"600", fontSize:14,},
name:{marginBottom:2, fontWeight:"600", fontSize:14,},



  card: {
    "backgroundColor": "#fff",
       "width": cardsWidth,
       "marginTop": 8,
       "marginBottom":8,
       "justifyContent": "flex-start",
       "borderRadius": 4,
       "borderWidth":0.5,
       "borderColor":"#dbdbdb",
       "shadowColor": "#000",
       "shadowOffset": {width: 0, height: 1},
       "shadowOpacity": 0.2,
       "shadowRadius": 0.5,
       "padding":12,
       "elevation":2,
  },



halfCard:{"backgroundColor": "#fff",
       "width": halfCard,
       "margin": 8,
       "justifyContent": "flex-start",
       "borderRadius": 4,
       "borderWidth":0.5,
       "borderColor":"#dbdbdb",
       "shadowColor": "#000",
       "shadowOffset": {width: 0, height: 1},
       "shadowOpacity": 0.2,
       "shadowRadius": 0.5,
       "elevation":2,
       "overflow":"hidden"

     },


  Scrollcard: {
    "backgroundColor": "#fff",
       "width": ScrollcardsWidth,
       "marginTop": 8,
       "marginLeft":8,
       "justifyContent": "flex-start",
       "borderRadius": 4,
       "borderWidth":0.5,
       "borderColor":"#dbdbdb",
       "shadowColor": "#000",
       "shadowOffset": {width: 0, height: 0},
       "shadowOpacity": 0.2,
       "shadowRadius": 0.5,
       "padding":12,
       "flexDirection": 'row',
       "height":150,

  },

   fullCard: {
    "backgroundColor": "#fff",
       "width": fullCard,
       "marginTop": 0,
       "marginLeft":0,
       "justifyContent": "flex-start",
       "borderWidth":0.5,
       "borderColor":"#dbdbdb",
       "shadowColor": "#000",
       "shadowOffset": {width: 0, height: 0},
       "shadowOpacity": 0.2,
       "padding":12,
       "flexDirection": 'column',
       
  },

     

    searchFeild: {"width":searchFeild, "marginLeft":10, "marginRight" :10,  },
    mainBanner:{"width":width, "height":200,"marginTop":16,},
    categoryBanner:{ "width":191,"height":160,"marginTop":16, "marginLeft":16, "marginBottom":8, },


 

 




});