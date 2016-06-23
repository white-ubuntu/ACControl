/**
 * Created by ijoy on 16-6-22.
 */
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default class Welcome extends React.Component{
    render(){
        return(
          <View style={styles.container}>
              <Text>
                  欢迎使用AC控制器智能应用软件系统 by ijoy
              </Text>
          </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});