import React from "react";
import {View,TextBox,Image,Text,StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native';


const LoginScreen=({navigation})=>{

return(

<>

<SafeAreaView style={{ flex: 1}}>
         
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                <Text style={{fontSize:20,fontWeight:"bold",fontFamily:"Calibri"}}>Login Screen</Text>
                <TouchableOpacity

                    style={{ marginTop: 20 }}
                   onPress={()=>navigation.navigate("HomeApp")}

                >
                    <Text>Login</Text>
                </TouchableOpacity>



                <TouchableOpacity
                    style={{ marginTop: 20 }}
                    onPress={()=>navigation.navigate("Register")}
                >
                    <Text>Register</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>


</>


)
}


export default LoginScreen;


const styles=StyleSheet.create({

    headerView:{
        flex:1,
        
        backgroundColor:"pink",
        textAlign:"center"
    },
    header:{
        color:"blue",
        fontSize:20
    }



})