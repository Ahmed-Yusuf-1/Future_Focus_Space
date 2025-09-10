import { FontAwesome } from '@expo/vector-icons';
import {Tabs} from 'expo-router';

export default function TabLayout(){
  return(
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
          name="main"
          options={{ 
            title:"Home",
            tabBarIcon: ({color}) => <FontAwesome name="home" size={20} color={color}/>
          }}/>
          <Tabs.Screen
          name="calender"
          options={{ 
            title:"Calender",
            tabBarIcon: ({color}) => <FontAwesome name="calendar" size={20} color={color}/>
          }}/>
          <Tabs.Screen
          name="notyet"
          options={{ 
            title:"Updating...",
            tabBarIcon: ({color}) => <FontAwesome size={20} color={color}/>
          }}/>
          <Tabs.Screen
          name="settings"
          options={{ 
            title:"Settings",
            tabBarIcon: ({color}) => <FontAwesome name="cogs" size={20} color={color}/>
          }}/>
    </Tabs>
  )
}