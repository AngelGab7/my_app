import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#5E72E4',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Budget',
          tabBarIcon: ({ color }) => <FontAwesome5 size={24} name="wallet" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome5 size={24} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}