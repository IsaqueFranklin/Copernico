import {Text, View, Pressable} from 'react-native';
import {router, Link} from 'expo-router';

function WebsitePage(){
    return (
        <View>
            <Text>User Page</Text>
            <Link href="/">Back to home page.</Link>
            <Pressable onPress={() => router.push("/")}>
                <Text>Back to home page.</Text>
            </Pressable>
        </View>
    )
}

export default WebsitePage;
