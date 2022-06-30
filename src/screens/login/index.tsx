import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { TextInput } from 'react-native-paper';
import { styles } from "./styles";
import Icon from  'react-native-vector-icons/Ionicons'

import LeftArrow from "../../assets/icons/left-arrow.png"
import RedditLogo from "../../assets/icons/reddit-logo.png"
import GoogleLogo from "../../assets/icons/google-logo.png"
import AppleLogo from "../../assets/icons/apple-logo.png"
import { ScrollView } from "react-native-gesture-handler";

export const Login = ({navigation}) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordVisible, setPasswordVisible] = useState<boolean>(true);

    return <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image source={LeftArrow} style={styles.icons}/>
            </TouchableOpacity>
            <Image source={RedditLogo} style={styles.logo}/>
            <TouchableOpacity>
                <Text style={styles.textHeader}>Sign up</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.title}>
            Log in to Reddit 
        </Text>

        <TouchableOpacity style={styles.button}>
            <Image source={GoogleLogo} style={styles.logoGoogle}/>
            <Text style={styles.textButton}>Continue with Google</Text> 
            <View style={styles.logoGoogle}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Image source={AppleLogo} style={styles.logoApple}/>
            <Text style={styles.textButton}>Continue with Apple</Text> 
            <View style={styles.logoApple}></View>
        </TouchableOpacity>

        <View style={styles.lineContainer}>
            <View style={styles.line}></View>
            <Text style={styles.lineText}>OR</Text>
            <View style={styles.line}></View>
        </View>

        <TextInput style={styles.input}
        theme={{ colors: { placeholder: "#a4a8a9" , text: "#a4a8a9"} }}
            label="Username"
            value={username}
            activeUnderlineColor="#336ea0"
            underlineColor="#1c1c1c"
            onChangeText={(e)=>setUsername(e)}
        />

        <TextInput style={styles.input}
        theme={{ colors: { placeholder: "#a4a8a9" , text: "#a4a8a9"} }}
            label="Password"
            value={password}
            secureTextEntry={passwordVisible}
            right={<TextInput.Icon name={passwordVisible ? () => <Icon name={'eye-outline'} size={25} color={'#a4a8a9'} /> : () => <Icon name={'eye-outline'} size={25} color={'#336ea0'} /> } onPress={() => setPasswordVisible(!passwordVisible)} />}
            underlineColor="#1c1c1c"
            activeUnderlineColor="#336ea0"
            onChangeText={(e)=>setPassword(e)}
        />

        <TouchableOpacity style={styles.text1Button}>
            <Text style={styles.text1}>Forgot password</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
            <Text style={styles.text2}>
                By continuing, you agree to our <Text style={styles.text3}>User Agreement</Text> and <Text style={styles.text3}>Privacy Policy</Text>
            </Text>

            <TouchableOpacity style={styles.continueButton} onPress={()=> navigation.navigate('Home') } >
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
        </View>

    </View>
}