import { useState } from 'react';
import { BottomNavigation, PaperProvider } from 'react-native-paper';
import Add from './components/Add';
import ListWorkOuts from './components/ListWorkOuts';
import Settings from './components/Settings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AddWorkOutContext, UnitsContext } from './components/Context';
import { MyTheme } from './styles/Styles';

export default function App() {

  const [units, setUnits] = useState('km')
  const [workOut, setWorkOut] = useState([])

  return (
    <SafeAreaProvider>
      <UnitsContext.Provider value={{units, setUnits}}>
        <AddWorkOutContext.Provider value={{workOut, setWorkOut}}>
          <PaperProvider theme={MyTheme}>
            <BottomNav/>
          </PaperProvider>
        </AddWorkOutContext.Provider>
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
      barStyle={{backgroundColor: '#ebf5f8'}}    
    />    
  );
}



// npm install react-native-paper
// npm install react-native-safe-area-context