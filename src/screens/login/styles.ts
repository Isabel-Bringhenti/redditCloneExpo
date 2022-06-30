import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#0e0e0e',
        paddingTop: Platform.OS === 'ios' ? 60 : 40,
        paddingHorizontal: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: 'center',
            alignItems: 'center'
    },
    icons: {
        tintColor: "#a4a8a9",
        width: 30, 
        height: 30,
        marginRight: 18
    },
    logo: {
        alignItems: 'center',
        width: 40, 
        height: 40
    },
    textHeader: {
        color:"#a4a8a9",
        fontSize:14,
        fontWeight: 'bold'
    },
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        paddingTop: 35,
        paddingBottom: 45
    },
    button: {
        borderColor: '#fff',
        padding: 13,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        borderWidth: 1.5,
        marginTop: 5,
        marginBottom: 5
    },
    logoGoogle: {
        width: 20, 
        height: 20,
        marginLeft: 5
    },
    logoApple: {
        width: 16, 
        height: 20,
        marginLeft: 5
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    lineContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20

    },
    line: {
        width: 130,
        height: 1.3,
        backgroundColor: '#1c1c1c'
    },
    lineText: {
        color: '#a4a8a9',
        fontSize: 12,
    },
    input: {
        backgroundColor:'#0e0e0e',
        color:'#a4a8a9',
        fontWeight: 'bold'
    }, 
    text1: {
        fontSize: 14,
        color: '#C14D2F'
    },
    text1Button: {
        marginTop: 30,
        marginBottom:10
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    text2: {
        color: '#a4a8a9',
        fontSize: 14
    },
    text3: {
        fontSize: 14,
        color: '#C14D2F',
        textDecorationLine: "underline"
    },
    continueButton: {
        backgroundColor:'#98331C',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10
    },
    continueText: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#D2B4AD'
    }
});