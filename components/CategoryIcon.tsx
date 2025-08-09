import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/styles';

export default function CategoryIcon({ icon, name }: { icon: string; name: string }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconBackground}>
                <FontAwesome name={icon} size={20} color={colors.primary} />
            </View>
            <Text style={styles.label}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        alignItems: 'center',
        marginBottom: 16,
    },
    iconBackground: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.primaryLight,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    label: {
        fontSize: 14,
        color: colors.textPrimary,
    },
});