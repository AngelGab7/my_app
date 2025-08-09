import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/styles';

export default function DragDropArea() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Drop Category Here</Text>
            <Text style={styles.subtitle}>
                Drag a category icon to this area to add an expense
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.primary,
        borderStyle: 'dashed',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        marginVertical: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.primary,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: colors.textSecondary,
        textAlign: 'center',
    },
});