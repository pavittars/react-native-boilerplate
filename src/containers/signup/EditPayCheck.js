/* eslint-disable react-native/no-color-literals */
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../../components/common/Layout';

export default class EditPayCheckScreen extends Component {
    render() {
        return (
            <Layout>
                <View style={styles.container}>
                    <View>
                        <Text style={{ fontFamily: 'Cera Basic', fontSize: 15, lineHeight: 19, color: '#000000' }}>
                            Paycheck Name
                        </Text>
                        <Text style={{ fontFamily: 'Cera Basic', fontSize: 20, lineHeight: 25, color: '#000000', opacity: 0.4 }}>
                            Some Great Paycheck
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'Cera Basic', fontSize: 15, lineHeight: 19, color: '#000000' }}>
                            Paycheck Amount
                        </Text>
                        <Text style={{ fontFamily: 'Cera Basic', fontSize: 20, lineHeight: 25, color: '#53B263' }}>
                            £1,400.00
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'Cera Basic', fontSize: 15, lineHeight: 19, color: '#000000' }}>
                            I get paid
                        </Text>
                        <Text style={{ fontFamily: 'Cera Basic', fontSize: 20, lineHeight: 25, color: '#000000', opacity: 0.4 }}>
                            Twice a month
                        </Text>
                    </View>
                </View>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40
    }
});
