import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class second extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>
                <Button
                    title='first'
                    onPress={() => Actions.FIRST_SCREEN()}
                />
            </View>
        );
    }
}
