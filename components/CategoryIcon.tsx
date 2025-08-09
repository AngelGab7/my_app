import { colors } from '@/constants/styles';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CategoryIconProps {
    icon: string;
    name: string;
    onPress?: () => void;
}

export default function CategoryIcon({ icon, name, onPress }: CategoryIconProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.iconContainer}>
                <FontAwesome name={icon} size={20} color={colors.primary} />
            </View>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        alignItems: 'center',
        marginBottom: 16,
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#E9F0FF',
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