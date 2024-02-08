import { StatusBar, StyleSheet } from 'react-native';
import { MD3LightTheme } from 'react-native-paper';

export const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight + 5,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    segmentButtons: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 20
    },
    textInputView:{
      margin: 10,
    },
    textInput:{
      marginTop: 10,
      padding: 10,
      width: 200,
      backgroundColor: '#ebf5f8',
    },
    modal:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    calendar: { 
      borderWidth: 3,     
      borderColor: '#ebf5f8',
    },
    button: {
      marginTop: 10,
      padding:10,
      backgroundColor: '#ebf5f8',
    },
    flatListstyle: {
      height: '70%',      
      marginHorizontal: 10
    },
    cardstyle:{
      flex:1,
      padding: 10,
      alignItems: 'stretch',
      justifyContent: 'center',      
    },
    cards: {
      backgroundColor: '#ebf5f8',
    },
    sumDistances: {
      marginTop: 100,
      marginBottom: 30, 
      flexDirection: 'row',
      padding: 5,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    sumchips: {
      padding: 5
    },
    settingsview: {
      borderColor: '#394E55',
      borderWidth: 1,
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 10,
      padding: 30,
      backgroundColor: '#ebf5f8'
    },
    settingsHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20
    },
    settingbuttonview: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    settingsText: {
      fontSize: 20,      
      marginTop: 20
    }
  });
  
  export const MyTheme = {
    ...MD3LightTheme,
    roundness: 2,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#394E55', //btn txt,icon color
      secondaryContainer: '#B1CCD4', //bottomnav active bg, chips bg flat mode, segmentedbtns bg
      onSecondaryContainer: '#394E55', //selected segmenbtn txt+icon
      background: '#e7ecee', //app bg color
      surface: '#B1CCD4', //chips bg outlined mode
      onSurface: '#394E55', // icon colors, inputText txt color, txt color
      onSurfaceVariant: '#407180', //inputtxt label, inactive icons, chips txt, inactive radiobutton
      outline: '#407180', //outlines inputtxt, segmentexbtns, chips   
    }
  } 