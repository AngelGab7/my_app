import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CategoryIcon from '../../components/CategoryIcon';
import DragDropArea from '../../components/DragDropArea';
import ExpenseChart from '../../components/ExpenseChart';
import { categories } from '../../constants/categories';
import { colors, spacing } from '../../constants/styles';

export default function BudgetScreen() {
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

      <View style={styles.currencyRow}>
        <Text style={styles.currencyText}>Display $USD</Text>
        <Text style={styles.currencyText}>Currency: USD</Text>
      </View>

      <Text style={styles.sectionHeader}>Overview</Text>

      <View style={styles.todayContainer}>
        <Text style={styles.todayLabel}>Today's Expenses</Text>
        <Text style={styles.todayAmount}>$0.00</Text>
      </View>

      <ExpenseChart data={[0, 0, 0, 0, 0, 0, 0]} />
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
    marginBottom: 4,
  },
  subheader: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: spacing.md,
  },
  currencyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  currencyText: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  todayContainer: {
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  todayLabel: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  todayAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
});