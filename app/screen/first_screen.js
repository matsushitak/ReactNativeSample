import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class first extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>
                <Button
                    title='second'
                    onPress={() => Actions.SECOND_SCREEN()}
                />
            </View>
        );
    }
}