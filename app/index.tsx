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

            <Link href="/website/1">Go to website 1</Link>
            <Pressable onPress={() => router.push("/website/2")}>
                <Text>Go to website 2</Text>
            </Pressable>
        </View>
    )
}

export default HomePage;