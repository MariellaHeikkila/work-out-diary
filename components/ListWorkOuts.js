import { FlatList, Text, View } from "react-native"
import {styles} from '../styles/Styles'
import { AddWorkOutContext, UnitsContext } from "./Context"
import { useContext } from "react"
import { WorkOutData } from "./WorkOutData"
import { Card, Chip, Icon } from "react-native-paper"


export default function ListWorkOuts(){

    const {units} = useContext(UnitsContext)
    const {workOut} = useContext(AddWorkOutContext)

    let showWorkOut = [...WorkOutData,...workOut]

    return(
        <View>
            <View style={{marginTop: 30}}>
                
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

    

    return(
        <View style={{marginTop: 30}}>
                <Chip icon= {showWorkOut.sport}>{+ ' ' + units}</Chip>
            </View>
    )

}