import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CategoryIcon from '@/components/CategoryIcon';
import DragDropArea from '@/components/DragDropArea';
import ExpenseChart from '@/components/ExpenseChart';
import { categories } from '@/constants/categories';
import { colors } from '@/constants/styles';

export default function BudgetScreen() {
  const todayExpenses = 0;
  const lastWeekExpenses = [4, 3, 2, 1, 0];

  return (
    <ScrollView style={styles.container}>
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

      <ExpenseChart data={lastWeekExpenses} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 16,
  },
  currencyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  currencyText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  todayExpenses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.cardBackground,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  todayText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
