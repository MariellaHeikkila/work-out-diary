import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      //marginTop: StatusBar.currentHeight + 5,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInputView:{
      margin: 10,
    },
    textInput:{
      marginTop: 10,
      padding: 10,
      width: 200,
    },
    modal:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    calendar: { 
      borderWidth: 3,     
      borderColor: '#f3d1d1',
    },
    button: {
      marginTop: 10,
      padding:10,
    },
    cardstyle:{
      flex:1,
      padding: 10,
      alignItems: 'stretch',
      justifyContent: 'center',
    },

  });
  