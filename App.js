 'use strict';

import React, {Component} from "react";
import  { Router, Scene,Actions } from 'react-native-router-flux';
import Home from "./pages/Home";
import Category from "./pages/CategoryPage";
import AddShop from "./pages/AddShop";
import ProductListing from "./pages/ProductListing";


import Abcd from './pages/Abcd'

import {
    TouchableOpacity,
    Image,Platform, 
} from 'react-native';

let titleBarTopPadding = Platform.OS =='ios' ? 8 : 22;
let titleBarHeight = Platform.OS =='ios' ? 64 : 76;

export default class App extends Component {
    render() {
        return (

            <Router >
                <Scene key="root" >
                    <Scene key="home" component={Home} title={'Home'}  navigationBarStyle = {{ backgroundColor:'#9A096A', height:titleBarHeight, paddingTop:titleBarTopPadding, }} />
                     <Scene key="addshop" component={AddShop} title={'ADD MORE STORE'}  navigationBarStyle = {{ backgroundColor:'#9A096A', height:titleBarHeight, paddingTop:titleBarTopPadding, }} />
                      <Scene key="productlisting" component={ProductListing} title={'Raja Fashion Outlet'}  navigationBarStyle = {{ backgroundColor:'#9A096A', height:titleBarHeight, paddingTop:titleBarTopPadding, }} />
                    <Scene key="abcd" component={Abcd}  title={'ORDER SUMMARY'} navigationBarStyle = {{ backgroundColor:'#fff000', height:titleBarHeight, paddingTop:titleBarTopPadding}}/>
                    <Scene key="category" component={Category}  title={'Category Page'} navigationBarStyle = {{ backgroundColor:'#fff000', height:titleBarHeight, paddingTop:titleBarTopPadding}}/>
                    
                </Scene>

            </Router>
        );
    }
}