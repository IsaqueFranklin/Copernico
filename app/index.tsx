import {Pressable, Text, View} from 'react-native'
import {Link, router} from 'expo-router'

function HomePage(){
    return (
        <View>
            <Text>Home Page</Text>
            <Link href="/users/1">Go to user 1</Link>
            <Pressable onPress={() => router.push("/users/2")}>
                <Text>Go to user 2</Text>
            </Pressable>
        </View>
    )
}

export default HomePage;