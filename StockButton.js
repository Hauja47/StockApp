import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

class StockButton extends Component {
    render() {
        console.log(this.props.name);
        console.log(this.props.code);
        console.log(this.props.onPress);

        return (
            <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                    this.props.onPress(
                        this.props.name,
                        this.props.code
                    )
                }} >
                <Text>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 20
    },
    button: {
        margin: 10,
        borderWidth: 1,
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey'
    }
})

export default StockButton