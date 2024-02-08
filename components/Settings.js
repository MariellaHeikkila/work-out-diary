import { View } from "react-native"
import {styles} from '../styles/Styles'
import { RadioButton, Text } from "react-native-paper"
import { useContext } from "react"
import { UnitsContext } from "./Context"


export default function Settings(){

    const { units, setUnits } = useContext(UnitsContext)

    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>Settings</Text>
            <View style={styles.settingsview}>
            <Text style={styles.settingsHeader} >Choose preferred units</Text>
            <RadioButton.Group onValueChange={newValue => setUnits(newValue)} value={units}>
                <View style={styles.settingbuttonview}>
                    <RadioButton value='km'/>
                    <Text>Kilometers</Text>
                </View>
                <View style={styles.settingbuttonview}>
                    <RadioButton value='mi'/>
                    <Text>Miles</Text>
                </View>
            </RadioButton.Group>
            <Text style={styles.settingsText}>{units === 'km' ? 'Kilometers' : 'Miles'} is chosen.</Text>
            </View>
        </View>
    )
}