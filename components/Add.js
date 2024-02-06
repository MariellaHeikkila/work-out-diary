import { Alert, Modal, SafeAreaView, View } from "react-native"
import {styles} from '../styles/Styles'
import { SegmentedButtons, TextInput, Text, Button } from "react-native-paper"
import { useContext, useState } from "react"
import { AddWorkOutContext, UnitsContext } from "./Context"
import { Calendar } from "react-native-calendars"


export default function Add(){

    const [ sport, setSport] = useState('')
    const [ distance, setDistance] = useState('')
    const [ duration, setDuration] = useState('')

    const [ date, setDate] = useState()
    const [visible, setVisible] = useState(false)

    const { units } = useContext(UnitsContext) 
    const { setWorkOut } = useContext(AddWorkOutContext)

    //let chosenUnit = units ? units : 'km'
    let datePicked = date ? date?.dateString : 'Select date'
    let distanceLabel = 'distance (' + units + ')'

    function handleDistanceInput() {

        const numericDis = parseFloat(distance)
        if (numericDis < 0 || isNaN(numericDis)) {
            Alert.alert('Value can´t be negative or empty')
            setDistance('')
        }
    }
    
    function handleDurationInput() {

        const numericDur = parseFloat(duration)
        if (numericDur < 0 || isNaN(numericDur)) {
            Alert.alert('Value can´t be negative or empty')
            setDuration('')
        }
    }

    function dateSelected(day) {
        setVisible(false)
        setDate(day)
    }

    function addWorkOut(){

        const distanceInKm = units === 'mi' ? distance * 1.6 : distance

        setWorkOut( prev => [...prev, {sport, distance: distanceInKm, duration, date: date?.dateString}])
        setSport('')
        setDistance('')
        setDuration('')
        setDate('')
        Alert.alert('Workout succesfully added.')
    }

    return(
        <SafeAreaView style={styles.container}>            
            <SegmentedButtons 
            value={sport} 
            onValueChange={setSport}
            buttons={[
                {
                    value: 'walk',
                    label: 'Walk',
                    icon: 'walk',
                },
                {
                    value: 'run-fast',
                    label: 'Run',
                    icon: 'run-fast'
                },
                {
                    value: 'bike-fast',
                    label: 'Bike',
                    icon: 'bike-fast'
                }
            ]}
            />            
            <View style={styles.textInputView}>
                <TextInput 
                style={styles.textInput}
                mode='outlined' 
                label={distanceLabel} 
                value={distance} 
                onChangeText={setDistance}
                keyboardType="number-pad"
                onBlur={handleDistanceInput}
                />
                <TextInput 
                style={styles.textInput}
                label={'duration (min)'} 
                value={duration} 
                onChangeText={setDuration}
                keyboardType="number-pad"
                onBlur={handleDurationInput}
                />
            </View>
            <View>
                <Modal  visible={visible} >
                    <View style={styles.modal}>
                        <Calendar style={styles.calendar} onDayPress={dateSelected}/>
                    </View>
                </Modal>                
                <Button 
                style={styles.button}
                mode='elevated' 
                icon='calendar-month' 
                onPress={()=>setVisible(true)}>{datePicked}</Button>
                <Button 
                style={styles.button}
                mode='elevated' 
                icon='note-plus' 
                onPress={addWorkOut}>Add Workout</Button>
            </View>            
        </SafeAreaView>
    )
}
