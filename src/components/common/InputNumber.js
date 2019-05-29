import React from 'react'
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';
const InputNumber = (props) => {
    return (
        <View>
            <Text style={{fontSize: 20, lineHeight: 25, fontWeight:'500'}}>{props.label}</Text>
            <TextInput keyboardType='numeric' maxLength={10} style={{height:30, fontSize:20, marginTop:16, paddingBottom:8, borderBottomWidth:1, borderColor: '#DBDAEA'}} placeholderTextColor="#999999" placeholder={props.placeholder} value={props.value} onChangeText={(text)=>props.onMutate(text)} />
        </View>
    )
}

InputNumber.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onMutate: PropTypes.func.isRequired,
}

export default InputNumber;