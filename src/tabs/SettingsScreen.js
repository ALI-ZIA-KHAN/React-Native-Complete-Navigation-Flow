import React from "react";
import {Text,View,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native';
import CustomHeader from "../../CustomHeader";

function SettingsScreen ({navigation}) {




    return (
        <SafeAreaView style={{ flex: 1}}>
             <CustomHeader title="Home" isHome={true} navigation={navigation}/>
        <View style={{flex:1,justifyContent:"center" ,alignItems:'center'}}>
   
      <Text>Settings Screen</Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate("SettingsDetail")}
        style={{marginTop:20}}
     
        >
          <Text style={{fontSize:30}}> Go to Settings Details!</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
      );
   
}



    export default  SettingsScreen ;