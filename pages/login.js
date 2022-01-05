// Import modules.
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function Login({ navigation }) {

    // Merge this.
    Object.mergify(this, StyleSheet.create({
        main: { flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center', },
        title: { fontWeight: 'bold', fontSize: 40, color: '#A9A9A9', marginBottom: 20 },
        subtitle: { fontSize: 15, color: '#FEFEFE', marginBottom: 10, textAlign: 'left', width: '80%' },
        input: { width: "80%", backgroundColor: "#333333", borderRadius: 5, height: 50, marginBottom: 15, justifyContent: "center", padding: 20 },
        textbox: { height: 50, fontWeight: 'bold', color: "#FFFFFF" },
        forgot: { color: "#ffffff", textDecorationLine: 'none', fontSize: 11 },
        login: { width: "80%", backgroundColor: "#333333", borderRadius: 5, height: 50, alignItems: "center", justifyContent: "center", marginTop: 40, marginBottom: 10 },
        options: { color: "#ffffff" }
    }))

    // Return content.
    return (
        <View style={this.main}>
            {/* Login page title. */}
            <Text style={this.title}> Login </Text>

            {/* Email textbox. */}
            <Text style={this.subtitle}> Enter your email: </Text>
            <View style={this.input}>
                <TextInput
                    style={this.textbox}
                    placeholder="example@gmail.com"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={text => global.Login.username = text}
                />
            </View>

            {/* Password textbox. */}
            <Text style={this.subtitle}> Enter your password: </Text>
            <View style={this.input} >
                <TextInput
                    secureTextEntry
                    style={this.textbox}
                    placeholder="Your super secret password"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={text => global.Login.password = text}
                />
            </View>

            {/* Forgot password button (Does nothing). */}
            <Pressable>
                <Text style={this.forgot}>Forgot Password?</Text>
            </Pressable>

            {/* Login button. */}
            <Pressable title="login" style={this.login} onPress={_ => navigation.navigate('Home')}>
                <Text style={this.options}>LOGIN</Text>
            </Pressable>

            {/* Signup button (Does nothing). */}
            <Pressable>
                <Text style={this.options}>Signup</Text>
            </Pressable>
        </View>
    )
}
