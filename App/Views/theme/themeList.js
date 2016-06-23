/**
 * Created by ijoy on 16-6-22.
 */
/**
 * Created by ijoy on 16-6-22.
 */
import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableNativeFeedback,
} from 'react-native'

export default class ThemeList extends React.Component{
       constructor(props){
           super(props);
       }
        render(){
            return(
                <View>
                    <TouchableNativeFeedback onPress={()=>this.props.onClickMenu({name:'AC控制系统',url:'main'})}>
                    <View style={styles.mainItem}>
                        <Text style={{fontSize:15}}>首页</Text>
                    </View>
                        </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>this.props.onClickMenu({name:'AC管理',url:'ac'})}>
                        <View style={styles.Item}>
                            <Text>AC管理</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>this.props.onClickMenu({name:'AP管理',url:'ap'})}>
                    <View style={styles.Item}>
                        <Text>AP管理</Text>
                    </View>
                        </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={()=>this.props.onClickMenu({name:'快速配置',url:'quickConfig'})}>
                    <View style={styles.Item}>
                        <Text>快速配置</Text>
                    </View>
                        </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>this.props.onClickMenu({name:'特定配置',url:'detailConfig'})}>
                    <View style={styles.Item}>
                        <Text>特定配置</Text>
                    </View>
                        </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>this.props.onClickMenu({name:'安全检测',url:'security'})}>
                    <View style={styles.Item}>
                        <Text>安全检测</Text>
                    </View>
                        </TouchableNativeFeedback>
                </View>
            )   ;
        }
}

const styles=StyleSheet.create({
    mainItem:{
        height:40,
        borderWidth:2,
        borderColor:'gray',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },
    Item:{
        height:30,
        borderBottomWidth:1,
        borderColor:'black',
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems:'center',
        marginTop:5
    }
});