import React, { Component } from 'react';
import { Node } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlightBase,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import StockButton from './StockButton'
import API from './api'

class Stock extends Component {
    constructor(props) {
        super(props);
        this.changeIndex = this.changeIndex.bind(this);
        this.state = {
            stockName: 'APPLE',
            stockCode: 'AAPL',
            stockIndex: '0.00',
            stockChangeRaw: '+0.00',
            stockChangePercent: '0.00%'
        }
        this.changeIndex('Apple', 'appl')
    }

    changeIndex(stockName, stockCode) {
        API(stockCode).then((data) => {
            this.setState({ ...data, stockName, stockCode });
        });
    }

    render() {
        let colorStyle = (this.state.stockChangeRaw && this.state.stockChangeRaw[0] == '+')
            ? styles.green
            : styles.red;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.stockName}>
                        {this.state.stockName}
                    </Text>
                    <Text style={styles.stockIndex}>
                        {this.state.stockIndex}
                    </Text>
                    <Text style={[styles.stockChange, colorStyle]}>
                        {this.state.stockChangeRaw}
                        ({this.state.stockChangePercent})
                    </Text>
                </View>

                <View style={styles.footer}>
                    <StockButton name="Apple" code="appl" onPress={this.changeIndex} />
                    <StockButton name="Google" code="goog" onPress={this.changeIndex} />
                    <StockButton name="Microsoft" code="msft" onPress={this.changeIndex} />
                    <StockButton name="Facebook" code="fb" onPress={this.changeIndex} />
                    <StockButton name="Alibaba" code="baba" onPress={this.changeIndex} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    stockName: {
        fontSize: 30
    },
    stockIndex: {
        fontSize: 80
    },
    stockChange: {
        fontSize: 40
    },
    footer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    green: {
        color: 'green'
    },
    red: {
        color: 'red'
    }
});

export default Stock;