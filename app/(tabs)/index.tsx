import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CategoryIcon from '../../components/CategoryIcon';
import DragDropArea from '../../components/DragDropArea';
import ExpenseChart from '../../components/ExpenseChart';
import { categories } from '../../constants/categories';
import { colors, spacing } from '../../constants/styles';

export default function BudgetScreen() {
  // Sample data for the last 7 days (Sun-Sat)
  const weeklyExpenses = [15, 20, 12, 8, 25, 10, 5];
  const todayExpenses = 18; // Today's total expenses

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: spacing.md }}
    >
      <Text style={styles.header}>Visual Budget</Text>
      <Text style={styles.subheader}>Drag, Drop, and Track Your Expenses</Text>

      <DragDropArea />

      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <CategoryIcon
            key={category.id}
            icon={category.icon}
            name={category.name}
          />
        ))}
      </View>

      <View style={styles.currencyContainer}>
        <Text style={styles.currencyText}>Display $USD</Text>
        <Text style={styles.currencyText}>Currency: USD</Text>
      </View>

      <Text style={styles.sectionHeader}>Overview</Text>

      <View style={styles.todayExpenses}>
        <Text style={styles.todayText}>Today's Expenses</Text>
        <Text style={styles.amountText}>${todayExpenses.toFixed(2)}</Text>
      </View>

      <ExpenseChart data={weeklyExpenses} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  subheader: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: spacing.md,
    gap: 12,
  },
  currencyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: spacing.md,
  },
  currencyText: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  todayExpenses: {
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  todayText: {
    color: colors.textSecondary,
    marginBottom: 4,
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
});