/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import LoginScreen from './src/auth/LoginScreen';
import RegisterScreen from './src/auth/RegisterScreen';
import SettingsScreenDetail from './src/tabs/SettingsScreenDetail';
import SettingsScreen from './src/tabs/SettingsScreen';
import Notifications from './src/drawer/Notifications';
import HomeScreen from './src/tabs/HomeScreen.js';
import HomeScreenDetail from './src/tabs/HomeScreenDetail';
import CustomDrawerContent from './src/drawer/Customdrawer';
import {IMAGE} from './constants/Image'

function App(){


  const navOptionHandler = ()=>(
    {
      headerShown:false
    }
  )



const StackHome=createNativeStackNavigator();



function HomeStack(){
  return(
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} />
    </StackHome.Navigator>
  )
}

const StackSetting=createNativeStackNavigator()

function SettingsStack(){
return(
  <StackSetting.Navigator initialRouteName="Settings">  
  <StackSetting.Screen name="Settings" component={SettingsScreen} options={navOptionHandler}/>
  <StackSetting.Screen name="SettingsDetail" component={SettingsScreenDetail} />

  </StackSetting.Navigator>
)

}


const MenuBottomTabs=createBottomTabNavigator();

function MenuTabs(){

  return(

    <MenuBottomTabs.Navigator initialRouteName="Homestack"
    
    
    
    
    
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? IMAGE.ICON_HOME
            : IMAGE.ICON_HOME_BLACK;
        } else if (route.name === 'Settings') {
          iconName = focused ? 
         IMAGE.ICON_SETTINGS
          : IMAGE.ICON_SETTINGS_BLACK;
        }

        // You can return any component that you like here!
        return <Image source={iconName} style={{width:20,height:20}} 
        resizeMode='contain' />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    
    
    
    
    
    >
       <MenuBottomTabs.Screen name="Homestack" component={HomeStack} options={{headerShown:false}} />
       <MenuBottomTabs.Screen name="Settingsstack" component={SettingsStack} options={{headerShown:false}}/>

    </MenuBottomTabs.Navigator>
  )
}


const DrawerNav=createDrawerNavigator();





function DrawerNavigation({navigation}){
  return(
    <DrawerNav.Navigator initialRouteName ="MenuTab"
    drawerContent={()=><CustomDrawerContent navigation={navigation}/>} //hv to pass navigation prop explicitly here
    >
       
      <DrawerNav.Screen name="MenuTab" component={MenuTabs} options={navOptionHandler} />
      <DrawerNav.Screen name="Notifications" component={Notifications} options={navOptionHandler} />

    </DrawerNav.Navigator>
  )
}






const StackApp=createNativeStackNavigator();





return(
  <>
<NavigationContainer>

<StackApp.Navigator initialRouteName="Login" >

<StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}  />
<StackApp.Screen name="Register" component={RegisterScreen} />
<StackApp.Screen name="HomeApp"component={DrawerNavigation} options={navOptionHandler}/>







</StackApp.Navigator>

</NavigationContainer>

  </>

)

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
