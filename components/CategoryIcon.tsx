import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/styles';

export default function CategoryIcon({
    icon,
    name
}: {
    icon: string;
    name: string
}) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconContainer}>
                <FontAwesome name={icon} size={24} color={colors.primary} />
            </View>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 8,
        width: 80,
    },
    iconContainer: {
        backgroundColor: '#E9F0FF',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        color: colors.textPrimary,
        textAlign: 'center',
    },
});