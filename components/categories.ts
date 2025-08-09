export interface Category {
    id: number;
    name: string;
    icon: string;
    color?: string;
}

export const categories: Category[] = [
    { id: 1, name: 'Food', icon: 'utensils', color: '#FF6B6B' },
    { id: 2, name: 'Drinks', icon: 'wine-glass-alt', color: '#4ECDC4' },
    { id: 3, name: 'Groceries', icon: 'shopping-basket', color: '#45B7D1' },
    { id: 4, name: 'Housing', icon: 'home', color: '#FFA07A' },
    { id: 5, name: 'Transport', icon: 'car', color: '#7FDBFF' },
    { id: 6, name: 'Entertainment', icon: 'film', color: '#FF9FF3' },
    { id: 7, name: 'Financial', icon: 'money-bill-wave', color: '#1DD1A1' },
];