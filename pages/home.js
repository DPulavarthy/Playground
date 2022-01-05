// Import modules.
import { StyleSheet, Text, View } from 'react-native'

// Homepage
export default function Home({ navigator }) {

    // Merge styles.
    Object.mergify(this, StyleSheet.create({
        main: { flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center' },
        label: { fontWeight: 'bold', fontSize: 20, color: '#FEFEFE' }
    }))

    // Return content.
    return (
        <View style={this.main}>
            {/* Show email. */}
            <Text style={this.label}>Your email is: {global.Login.username}</Text>

            {/* Show password. */}
            <Text style={this.label}>Your password is: {global.Login.password}</Text>
        </View>
    )
}
