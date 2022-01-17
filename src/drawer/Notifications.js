import React from "react";
import {Text,View,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native';


function Notifications ({navigation}) {




    return (
        <SafeAreaView style={{ flex: 1}}>
        <View style={{flex:1,justifyContent:"center" ,alignItems:'center'}}>
        <Text style={{fontSize:30}}> Hello Notifications</Text>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        style={{marginTop:20}}
        
        >
         <Text>Go Back</Text> 
        </TouchableOpacity>
        </View>
      </SafeAreaView>
      );
   
}


export default Notifications;