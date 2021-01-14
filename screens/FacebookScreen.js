import React, { Component } from 'react'
import {ToucableOpacity, StyleSheet, TextInput, Button} from 'react-native'

export default class FacebookScreen extends Component(){
    constructor(){
        super()
        this.state={}
    }
    render(){
        return(
    <View>
    <TouchableOpacity onPress={() => this.props.navigation.navigate('FacebookScreen')}>
        <Text></Text>
    </TouchableOpacity>
    
    <TouchableOpacity>
        <Text></Text>
    </TouchableOpacity>
    
    <TouchableOpacity><Text></Text>
    </TouchableOpacity>
    
    <TouchableOpacity><Text></Text>
    </TouchableOpacity>
    
    <TouchableOpacity><Text></Text>
    </TouchableOpacity>
    </View>
    
    )
    }
    }
