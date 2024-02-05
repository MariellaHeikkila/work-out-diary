import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      //marginTop: StatusBar.currentHeight + 5,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modal:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    calendar: { 
      borderWidth: 3,     
      borderColor: '#f3d1d1'
    }
  });
  