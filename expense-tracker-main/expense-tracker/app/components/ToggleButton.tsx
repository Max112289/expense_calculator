import React, { FC } from 'react'
import Button from './Button'
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Props {
    title?: string;
    onPress?: () => void;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;

    isTogled: boolean
    buttonToggledStyle?: ViewStyle;
    textToggledStyle?: TextStyle;
}
                                    
const ToggleButton: FC<Props> = (
    {
        title,
        onPress,
        buttonStyle,
        textStyle,
        iconRight,
        iconLeft,
        isTogled,
        buttonToggledStyle,
        textToggledStyle
    }
) => {
    return (
        <Button
            title={title}
            buttonStyle={{
                ...styles.defaultButtonStyles,
                ...buttonStyle,
                ...(isTogled && buttonToggledStyle),
            }}
            textStyle={{
                ...textStyle,
                ...(isTogled && textToggledStyle)
            }}
            iconRight={iconRight}
            iconLeft={iconLeft}
            onPress={onPress}    
        />
    )
}

const styles = StyleSheet.create({
    defaultButtonStyles: {
        flex: 1,
        backgroundColor: '#0000',
        gap: 10
    }
})

export default ToggleButton
