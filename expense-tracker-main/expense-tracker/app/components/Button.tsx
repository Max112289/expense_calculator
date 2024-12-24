import React from 'react'
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'

interface Props {
    title?: string;
    onPress?: () => void;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
}

const Button: React.FC<Props> = ({
    title,
    iconRight,
    iconLeft,
    onPress,
    buttonStyle,
    textStyle
}) => {
    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            {iconLeft && iconLeft}
            {title && <Text style={[styles.buttonText, textStyle]}>{title}</Text>}
            {iconRight && iconRight}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: '#082',
        padding: 12,
        borderRadius: 7,
        elevation: 10,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 7,
        shadowColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Balsamiq',
        fontSize: 16,
        textAlign: 'center',
        color: '#fff'
    }
})

export default Button
