import React from 'react'
import {
    ToolbarAndroid,
    StyleSheet,
    View,
    Text,
    ToastAndroid,
} from 'react-native'

export default class ToolBar extends  React.Component{
    constructor(props){
        super(props);
    }
    _selectAction(index){
        switch (index){
            case 0: ToastAndroid.show('点击了消息',ToastAndroid.SHORT) ;return;
            case 1:   ToastAndroid.show('点击了模式一',ToastAndroid.SHORT) ;return;;
                default:ToastAndroid.show('点击了其他的',ToastAndroid.SHORT);
        }


    }
    render(){
        return(
            <View>
                <ToolbarAndroid
                    navIcon={require('../../img/menu.png')}
                    logo={require('../../img/company.png')}
                    title={this.props.menu.name}
                    actions={[{title:'message',icon:require('../../img/warning.png'),show:'always'}]}
                    onActionSelected={this._selectAction}
                    style={styles.Toolbar}
                />
                </View>

        );
    }
}
const styles=StyleSheet.create({
    Toolbar:{
        height:60,
        backgroundColor:'blue'

    }
});