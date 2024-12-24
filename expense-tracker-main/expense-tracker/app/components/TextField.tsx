import React from 'react'
import { StyleSheet, TextInput, TextStyle } from 'react-native'

interface Props {
    value?: string;
    onChangeText?: (text: string) => void
    placeholder?: string;
    secureTextEntry?: boolean;
    style?: TextStyle;
}

const TextField: React.FC<Props> = ({
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    style
}) => {
    return (
        <TextInput
            style={[styles.textField, style]}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            autoCapitalize='none'
        />
    )
}

const styles = StyleSheet.create({
    textField: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 7,
        elevation: 10,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 7,
        shadowColor: '#000',
    },
})

export default TextField
