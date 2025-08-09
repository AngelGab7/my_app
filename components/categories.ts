export interface Category {
    id: number;
    name: string;
    icon: string;
}

export const categories: Category[] = [
    { id: 1, name: 'Food', icon: 'utensils' },
    { id: 2, name: 'Drinks', icon: 'wine-glass-alt' },
    { id: 3, name: 'Groceries', icon: 'shopping-basket' },
    { id: 4, name: 'Housing', icon: 'home' },
    { id: 5, name: 'Transport', icon: 'car' },
    { id: 6, name: 'Entertainment', icon: 'film' },
    { id: 7, name: 'Financial', icon: 'money-bill-wave' },
];