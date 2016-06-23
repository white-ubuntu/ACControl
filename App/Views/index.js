/**
 * Created by ijoy on 16-6-23.
 */
/**
 * Created by ijoy on 16-6-22.
 */

import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    DrawerLayoutAndroid,
    TouchableNativeFeedback,
} from 'react-native'
import Main from './main'
import AC from './ac'
import Theme from './theme'
import Icon from 'react-native-vector-icons/FontAwesome'
import ToolBar from '../Component/ToolbarAndroid'
export default class Views extends React.Component{
    constructor(){
        super();
        this.state={
            menu:{name:'AC控制系统',url:'main'}
        }
    }
    onClickMenu(menu){
        this.drawer.closeDrawer();
        this.setState({menu:menu});
    }
    _renderContent(){
        switch(this.state.menu.url){
            case 'main':return <Main />;
            case 'ac':return <AC />;
            default :return <Main/>;
        }
    }
    render(){
        return(
            <DrawerLayoutAndroid
                ref={(drawer) => { this.drawer = drawer; }}
                drawerWidth={260}
                keyboardDismissMode="on-drag"
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={()=><Theme onClickMenu={(menu)=>this.onClickMenu(menu)} />}>
                <View style={{flex:1}}>
                    <ToolBar closeDrawer={this.closeDrawer} menu={this.state.menu}/>
                  {this._renderContent()}
                </View>

            </DrawerLayoutAndroid>

        );
    }
}