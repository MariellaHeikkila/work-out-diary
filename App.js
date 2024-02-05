import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { BottomNavigation, MD3LightTheme, PaperProvider } from 'react-native-paper';
import Add from './components/Add';
import ListWorkOuts from './components/ListWorkOuts';
import Settings from './components/Settings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AddWorkOut, UnitsContext } from './components/Context';

export default function App() {

  const [units, setUnits] = useState('km')
  const [workOut, setWorkOut] = useState([])

  return (
    <SafeAreaProvider>
      <UnitsContext.Provider value={{units, setUnits}}>
        <AddWorkOut.Provider value={{workOut, setWorkOut}}>
          <PaperProvider theme={MD3LightTheme}>
            <BottomNav/>
          </PaperProvider>
        </AddWorkOut.Provider>
      </UnitsContext.Provider>
    </SafeAreaProvider>    
  );
}

function BottomNav() {

  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'Add', title: 'Add', focusedIcon: 'weight-lifter'},
    { key: 'List', title: 'List', focusedIcon: 'format-list-text'},
    { key: 'Settings', title: 'Settings', focusedIcon: 'cog-outline'},
  ])

  const scene = BottomNavigation.SceneMap({
    Add: Add,
    List: ListWorkOuts,
    Settings: Settings,
  })

  return (    
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={scene}
    />    
  );
}



// npm install react-native-paper
// npm install react-native-safe-area-context