import { FlatList, SafeAreaView, Text, View } from "react-native"
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
        <SafeAreaView>        
            <View>                
                <DistanceSum  showWorkOut={showWorkOut} units={units}/>                
            </View>
            <View style={styles.flatListstyle}>
                <FlatList            
                    data={showWorkOut}
                    renderItem={({item}) => <Item showWorkOut={item} units={units}/>} 
                />
            </View>        
        </SafeAreaView>
    )
}

function Item({showWorkOut, units}) {

    const distanceInMi = units === 'mi' ? showWorkOut.distance / 1.6 : showWorkOut.distance

    return(
        <View style={styles.cardstyle}>
            <Card style={styles.cards}>
                <Card.Content>
                    <Icon source={showWorkOut.sport} size={20}/>
                    <Text >{showWorkOut.date}</Text>
                    <Text >{'Distance ' + distanceInMi + units}</Text>
                    <Text >{'Duration ' + showWorkOut.duration + ' min'}</Text>
                </Card.Content>
            </Card>
        </View>
    )
}

function DistanceSum({showWorkOut, units}) {

    /**
     * create an object for distance per sport
     * loop each workout, if sport already exist add distance to it, if not, add it to next sport
     * map distancesbysport and create a chip for every sport
     */

    const distanceBySport = {}

    showWorkOut.forEach(workout => {

        const {sport, distance} = workout

        if(distanceBySport[sport]) {
            distanceBySport[sport] += parseFloat(distance)
        } else {
            distanceBySport[sport] = parseFloat(distance)
        }
    })
    
    return(
        <View style={styles.sumDistances}>
            {Object.entries(distanceBySport).map(([sport, totalDistance], index) => (
                <Chip key={index} icon={sport} mode="outlined" style={styles.sumchips}>
                    {units === 'mi' ? totalDistance / 1.6 : totalDistance} {units}
                </Chip>
            ))}       
        </View>
    )
}