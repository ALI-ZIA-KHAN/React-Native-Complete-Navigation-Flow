import React from "react";
import {Text,View,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native';
import CustomHeader from "../../CustomHeader";

function HomeScreen ({navigation}) {




    return (
        <SafeAreaView style={{ flex: 1}}>

<CustomHeader title="Home" isHome={true} navigation={navigation}/>
        <View style={{flex:1,justifyContent:"center" ,alignItems:'center'}}>
   
      <Text>Home Screen</Text>
        <TouchableOpacity
        
        style={{marginTop:20}}
       onPress={()=>navigation.navigate("HomeDetail")}
        >
          <Text style={{fontSize:30}}> Go to Home Details!</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
      );
   
}


export default HomeScreen;