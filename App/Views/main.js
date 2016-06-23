/**
 * Created by ijoy on 16-6-22.
 */

import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ListView,
    ScrollView,
    Dimensions
} from 'react-native'
var VCArrays=[{name:"护士107AC",color:'green'},{name:"护士107AC",color:'green'},{name:"护士107AC",color:'green'},{name:"检验207AC",color:'green'},{name:"ICU707AC",color:'green'},{name:"住院901AC",color:'green'},{name:"急诊304AC",color:'green'}];
export default class Main extends React.Component{
    constructor(){
        super();

    }
    createRow(item,i){
        return(
            <View style={styles.item}>
                <Text>{item.name}</Text>
            </View>
        );
    }
    render(){
        return(
           <View>
               <View style={{height:Dimensions.get('window').height}}>
                   <ScrollView
                       ref={(scrollView) => { _scrollView = scrollView; }}
                       automaticallyAdjustContentInsets={false}
                       onScroll={() => { console.log('onScroll!'); }}
                       scrollEventThrottle={200}
                       style={styles.scrollView}>
                           <View style={styles.showTip}>
                                <Text style={{fontSize:18}}>系统运行正常</Text>
                           </View>
                           <View style={styles.ACRunPiecontainer}>
                                <Text>AC运行正常的所占的比例扇形</Text>
                           </View>
                           <View style={styles.ACConnectBarcontainer}>
                               <Text>AC连接AP,wifi,电脑的条形图</Text>
                           </View>

                   {VCArrays.map(this.createRow)}
               </ScrollView>
                   </View>
           </View>
        );
    }
}

const styles=StyleSheet.create({
    showTip:{
        height:30,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',

    },
    ACRunPiecontainer:{
        backgroundColor:'red',
        height:100,
        margin:5
    },
    ACConnectBarcontainer:{
        backgroundColor:'blue',
        height:120,
        margin:20,
    },
    item:{
        height:60,
        margin:5,
        backgroundColor:'red',
    }
});