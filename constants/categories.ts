export type Category = {
    id: number;
    name: string;
    icon: string;
    color: string;
};

export const categories: Category[] = [
    { id: 1, name: 'Food', icon: 'utensils', color: '#FF6B6B' },
    { id: 2, name: 'Drinks', icon: 'wine-glass-alt', color: '#4ECDC4' },
    // ... keep all your categories
];