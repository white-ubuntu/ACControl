/**
 * Created by ijoy on 16-6-22.
 */
import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    ListView,
} from 'react-native'
import UserInfo from './userInfo';
import ThemeList from './themeList'
export default class Theme extends React.Component{
    constructor(props){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        super(props);
        this.state={
            dataSource:ds.cloneWithRows(['row 1', 'row 2'])
        }
    }
    render(){
        return(

                <View style={styles.container}>
                    <UserInfo/>
                    <ThemeList onClickMenu={this.props.onClickMenu} />
               </View>
            );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },

});