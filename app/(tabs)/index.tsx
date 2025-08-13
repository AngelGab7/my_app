// app/(tabs)/index.tsx
import React, { useMemo, useState } from 'react';
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CategoryIcon from '../../components/CategoryIcon';
import DragDropArea from '../../components/DragDropArea';
import ExpenseChart from '../../components/ExpenseChart';
import { categories as CATS } from '../../constants/categories';
import { colors, spacing } from '../../constants/styles';

type Expense = {
  id: string;
  categoryId: number;
  amount: number;
  createdAt: string;
};

export default function BudgetScreen() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [amountText, setAmountText] = useState('');

  function openAddModal(catId: number) {
    setSelectedCategory(catId);
    setAmountText('');
    setModalVisible(true);
  }

  function addExpenseLocal() {
    if (!selectedCategory) return;
    const amount = parseFloat(amountText);
    if (isNaN(amount) || amount <= 0) {
      Alert.alert('Enter a valid amount');
      return;
    }
    const newExp: Expense = {
      id: String(Date.now()),
      categoryId: selectedCategory,
      amount,
      createdAt: new Date().toISOString(),
    };
    setExpenses(prev => [newExp, ...prev]);
    setModalVisible(false);
  }

  const todayTotal = useMemo(() => {
    const today = new Date().toDateString();
    return expenses
      .filter(e => new Date(e.createdAt).toDateString() === today)
      .reduce((s, e) => s + e.amount, 0);
  }, [expenses]);

  const breakdownToday = useMemo(() => {
    const today = new Date().toDateString();
    const byCat: Record<number, number> = {};
    expenses
      .filter(e => new Date(e.createdAt).toDateString() === today)
      .forEach(e => (byCat[e.categoryId] = (byCat[e.categoryId] || 0) + e.amount));
    return Object.entries(byCat).map(([catId, total]) => {
      const c = CATS.find(x => x.id === Number(catId))!;
      return { id: Number(catId), name: c?.name || 'Unknown', total };
    });
  }, [expenses]);

  // Last 7 days data for ExpenseChart
  const last7DaysData = useMemo(() => {
    const data = new Array(7).fill(0);
    const today = new Date();

    expenses.forEach(e => {
      const diffDays = Math.floor(
        (today.getTime() - new Date(e.createdAt).getTime()) / (1000 * 60 * 60 * 24)
      );
      if (diffDays >= 0 && diffDays < 7) {
        const dayIndex = (today.getDay() - diffDays + 7) % 7;
        data[dayIndex] += e.amount;
      }
    });

    return data;
  }, [expenses]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: spacing.md }}>
      <Text style={styles.header}>Visual Budget</Text>
      <Text style={styles.subheader}>Drag, Drop, and Track Your Expenses</Text>

      <DragDropArea />

      <View style={styles.row}>
        {CATS.map(cat => (
          <CategoryIcon
            key={cat.id}
            icon={cat.icon}
            name={cat.name}
            onPress={() => openAddModal(cat.id)}
          />
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.todayLabel}>Today's Expenses</Text>
        <View style={styles.todayAmountBox}>
          <Text style={styles.todayAmount}>${todayTotal.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Breakdown</Text>
        {breakdownToday.length === 0 ? (
          <Text style={{ color: colors.textSecondary, paddingTop: 8 }}>No expenses to display</Text>
        ) : (
          breakdownToday.map(b => (
            <View key={b.id} style={styles.breakdownRow}>
              <Text>{b.name}</Text>
              <Text style={styles.amount}>${b.total.toFixed(2)}</Text>
            </View>
          ))
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Last 7 Days</Text>
        <ExpenseChart data={last7DaysData} />
      </View>

      {/* Modal for adding */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalBackdrop}>
          <View style={styles.modal}>
            <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Add Expense</Text>
            <Text>Category: {CATS.find(c => c.id === selectedCategory)?.name}</Text>
            <TextInput
              keyboardType="decimal-pad"
              placeholder="Amount"
              value={amountText}
              onChangeText={setAmountText}
              style={styles.input}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginRight: 8 }}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={addExpenseLocal}>
                <Text style={{ color: colors.primary }}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.background },
  header: { fontSize: 40, fontWeight: 'bold', color: colors.textPrimary, textAlign: 'center' },
  subheader: { textAlign: 'center', color: colors.textSecondary, marginBottom: spacing.lg },
  row: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: spacing.lg },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  todayLabel: { color: colors.textSecondary, fontSize: 14 },
  todayAmountBox: { marginTop: 8, backgroundColor: colors.primaryLight, padding: 10, borderRadius: 6 },
  todayAmount: { fontSize: 24, fontWeight: 'bold', color: colors.primary },
  cardTitle: { fontWeight: '600', marginBottom: 8 },
  breakdownRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  amount: { fontWeight: '600' },
  modalBackdrop: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000066' },
  modal: { width: '85%', backgroundColor: 'white', padding: 16, borderRadius: 8 },
  input: { borderBottomWidth: 1, borderColor: '#eee', marginVertical: 12, padding: 8 },
});
