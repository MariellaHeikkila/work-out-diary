import { FlatList, Text, View } from "react-native"
import {styles} from '../styles/Styles'
import { AddWorkOutContext, UnitsContext } from "./Context"
import { useContext } from "react"
import { WorkOutData } from "./WorkOutData"
import { Card, Chip, Icon } from "react-native-paper"

export default function ListWorkOuts(){

    const {units} = useContext(UnitsContext)
    const {workOut} = useContext(AddWorkOutContext)

    let showWorkOut = [...WorkOutData, ...workOut]

    return(
        <View>
            <View style={{marginTop: 30}}>
                <SumDistances showWorkOut={showWorkOut} units={units}/>
            </View>
            <FlatList
                data={showWorkOut}
                renderItem={({item}) => <Item showWorkOut={item} units={units}/>} 
            />
        </View>
    )
}

function Item({showWorkOut, units}) {

    const distanceInMi = units === 'mi' ? showWorkOut.distance / 1.6 : showWorkOut.distance

    return(
        <View style={styles.cardstyle}>
        <Card >
            <Card.Content>
                <Icon source={showWorkOut.sport}/>
                <Text >{showWorkOut.date}</Text>
                <Text >{'Distance ' + distanceInMi + units}</Text>
                <Text >{'Duration ' + showWorkOut.duration + ' min'}</Text>
            </Card.Content>
        </Card>
        </View>
    )
}

function SumDistances({showWorkOut, units}) {

    let run = 0
    let walk = 0
    let bike = 0

    showWorkOut.forEach(workout => {
            
        if(workout.sport == 'walk') {
            walk += parseFloat(workout.distance)
        } else if (workout.sport == 'run-fast') {
            run += parseFloat(workout.distance)
        } else if (workout.sport == 'bike-fast') {
            bike += parseFloat(workout.distance)
        }

    });

    const walkInMi = units === 'mi' ? walk / 1.6 : walk
    const runInMi = units === 'mi' ? run / 1.6 : run
    const bikeInMi = units === 'mi' ? bike / 1.6 : bike

    return(
        <View style={{marginTop: 30, flexDirection: 'row'}}>
            <Chip icon='walk'>{walkInMi + ' ' + units}</Chip>
            <Chip icon='run-fast'>{runInMi + ' ' + units}</Chip>
            <Chip icon='bike-fast'>{bikeInMi + ' ' + units}</Chip>
        </View>
    )

}