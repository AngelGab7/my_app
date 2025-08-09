import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../constants/styles';

interface ExpenseChartProps {
    data: number[]; // Array of 7 numbers representing Sun-Sat
}

export default function ExpenseChart({ data }: ExpenseChartProps) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Today's Breakdown</Text>
            <View style={styles.emptyState}>
                <Text style={styles.emptyText}>No expenses to display</Text>
            </View>

            <View style={styles.divider} />

            <Text style={styles.header}>Last 7 Days</Text>
            <View style={styles.weekData}>
                {data.map((amount, index) => (
                    <Text key={index} style={styles.amount}>${amount}</Text>
                ))}
            </View>
            <View style={styles.daysContainer}>
                {days.map((day) => (
                    <Text key={day} style={styles.day}>{day}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: spacing.md,
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: spacing.sm,
    },
    emptyState: {
        backgroundColor: colors.cardBackground,
        borderRadius: 8,
        padding: spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.md,
        minHeight: 100,
    },
    emptyText: {
        color: colors.textSecondary,
    },
    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: spacing.md,
    },
    weekData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: spacing.sm,
    },
    amount: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    daysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    day: {
        fontSize: 12,
        color: colors.textSecondary,
    },
});