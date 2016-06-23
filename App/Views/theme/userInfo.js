/**
 * Created by ijoy on 16-6-22.
 */
import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    ListView,
    Image,
} from 'react-native'

export default class UserInfo extends React.Component{
    render(){
        return(
          <View style={styles.container}>
           <Image  style={styles.image} source={require('../../img/timg.jpg')}></Image>
              <Text style={styles.name}>李大超</Text>
          </View>
        );
    }
}
const styles=StyleSheet.create({
   container:{
       height:120,
       backgroundColor:'green',
       alignItems:'center',
       justifyContent:'center',
   },
    name:{
        fontSize:18,
        marginTop:10,
        marginBottom:5
    },
    image:{
        height:80,
        width:80,
        borderRadius:40,
    }
});