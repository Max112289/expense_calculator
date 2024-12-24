import React, { FC, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import Button from './Button';
import ToggleButton from './ToggleButton';

interface Props {
    title?: string;
}

const ImageField: FC<Props> = ({title}) => {
    const [imageUri, setImageUri] = useState<string | null>(null);

    const pickImage = async () => {
        // Запросить разрешения и выбрать изображение из галереи
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={pickImage}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                ) : (
                    <View style={styles.placeholder}>
                        <MaterialIcons name="image" size={48} color="#aaa" />
                    </View>
                )}
            </TouchableOpacity>

            {title && <Text style={styles.text}>{title}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    text: {
        fontFamily: 'Balsamiq',
        fontSize: 16,
        flex: 1,
        color: '#082'
    },
    placeholder: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ImageField;
