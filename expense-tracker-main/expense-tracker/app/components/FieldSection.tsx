import { FC, ReactNode } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
    title?: string
    children?: ReactNode
}

const FieldSection: FC<Props> = ({children, title}) => {
    return (
        <View style={[styles.containerData, styles.separator]}>
            {title && <View>
                <Text style={styles.textContainer}>{title}</Text>
            </View> }
            <View style={{flexDirection: 'row', gap: 20, justifyContent: 'center', alignItems: 'center'}}>
                {/* <Image style={{width: 100, height: 100, borderRadius: 50}} source={{uri: ''}} /> */}
                <View style={{gap: 10, flexDirection: 'column', flex: 1}}>
                    {children}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        fontFamily: 'Balsamiq',
        fontSize: 16,
        fontWeight: 100,
        color: '#a3a',
        marginBottom: 10
    },
    containerData: {
        gap: 10,
        padding: 20,
    },
    separator: {
        borderBottomWidth: 3,
        borderColor: '#a3a3'
    },
})

export default FieldSection
