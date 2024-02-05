import { Modal, SafeAreaView, View } from "react-native"
import {styles} from '../styles/Styles'
import { SegmentedButtons, TextInput, Text, Button } from "react-native-paper"
import { useContext, useState } from "react"
import { UnitsContext } from "./Context"
import { Calendar } from "react-native-calendars"


export default function Add(){

    const [ sport, setSport] = useState('')
    const [ distance, setDistance] = useState('')
    const [ duration, setDuration] = useState('')

    const [ date, setDate] = useState()
    const [visible, setVisible] = useState(false)

    const {units} = useContext(UnitsContext) 

    //let chosenUnit = units ? units : 'km'
    let datePicked = date ? date?.dateString : 'Select date'
    let distanceLabel = 'distance (' + units + ')'

    function dateSelected(day) {
        setVisible(false)
        setDate(day)
    }

    return(
        <SafeAreaView style={styles.container}>            
            <SegmentedButtons
            buttons={[
                {
                    value: 'walk',
                    label: 'Walk',
                    icon: 'walk',
                },
                {
                    value: 'run',
                    label: 'Run',
                    icon: 'run-fast'
                },
                {
                    value: 'cycle',
                    label: 'Bike',
                    icon: 'bike-fast'
                }
            ]}
            />            
            <View >
                <TextInput mode='outlined' label={distanceLabel} value={distance} onChangeText={setDistance}/>
                <TextInput label={'duration (min)'} value={duration} onChangeText={setDuration}/>
            </View>
            <View>
                <Modal  visible={visible} >
                    <View style={styles.modal}>
                        <Calendar style={styles.calendar} onDayPress={dateSelected}/>
                    </View>
                </Modal>                
                <Button mode='elevated' icon='calendar-month' onPress={()=>setVisible(true)}>{datePicked}</Button>
                <Button mode='elevated' icon='note-plus'>Add Workout</Button>
            </View>            
        </SafeAreaView>
    )
}
