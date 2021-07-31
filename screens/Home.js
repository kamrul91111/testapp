import React, {useState} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Home = props => {
    const [count, setState] = useState(0)

    const increase = () => {
        setState(count + 1)
    }

    const decrease = () => {
        setState(count - 1)
    }

    return (
        <View style={styles.container}>
            <Text>Home page</Text>
            <Button 
                title='plus'
                onPress = {increase}
            />
            <Text style={{fontSize: 25, padding: 25}}>{count}</Text>
            <Button 
                title='Minus'
                onPress = {decrease}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 25,
        alignItems: 'center'
    }
})

export default Home
