import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Layout () {

    return (
        <Tabs>
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => 
                        <MaterialIcons size={28} name="alarm-add" color={color} />,
                        tabBarActiveTintColor: '#f22473',
                        headerTitleStyle: {
                            color: '#f22473',
                            fontWeight: "bold",
                        }
                }}
            />
            <Tabs.Screen 
                name="exercises"
                options={{
                    title: "Exercises",
                    tabBarIcon: ({ color }) => 
                        <MaterialIcons size={28} name="9mp" color={color} />,
                        tabBarActiveTintColor: '#f22473',
                        headerTitleStyle: {
                            color: '#f22473',
                            fontWeight: "bold",
                        }
                }}
            />
        </Tabs>
    )
}