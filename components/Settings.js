import { View } from "react-native"
import {styles} from '../styles/Styles'
import { RadioButton, Text } from "react-native-paper"
import { useContext } from "react"
import { UnitsContext } from "./Context"


export default function Settings(){

    const { units, setUnits } = useContext(UnitsContext)

    

    return(
        <View style={styles.container}>
            <Text>Choose preferred units</Text>
            <RadioButton.Group onValueChange={newValue => setUnits(newValue)} value={units}>
                <View>
                    <RadioButton value='km'/>
                    <Text>Kilometers</Text>
                </View>
                <View>
                    <RadioButton value='mi'/>
                    <Text>Miles</Text>
                </View>
            </RadioButton.Group>
            <Text>{units === 'km' ? 'kilometers' : 'miles'} is chosen.</Text>
        </View>
    )
}