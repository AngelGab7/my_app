import { colors } from '@/constants/styles';
import { StyleSheet, Text, View } from 'react-native';

interface ExpenseChartProps {
    data: number[];
}

export default function ExpenseChart({ data }: ExpenseChartProps) {
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
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <Text key={day} style={styles.day}>{day}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 8,
    },
    emptyState: {
        backgroundColor: colors.cardBackground,
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        minHeight: 100,
    },
    emptyText: {
        color: colors.textSecondary,
    },
    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: 16,
    },
    weekData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
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