import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#080808',
       
    },
    header: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0e0e0e',
        width: '100%',
        paddingTop: Platform.OS === 'ios' ? 60 : 40,
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    input: {
        backgroundColor:'#181818',
        color:'#a4a8a9',
        width:'75%',
    },
    buttonNormal: {
        height: 30,
        width: 100,
        alignItems: 'center',
      },
      buttonPress: {
        borderBottomColor: '#01559b',
        borderBottomWidth: 2,
        height: 30,
        width: 100,
        alignItems: 'center',
      },
      btn: {
        color: '#a4a8a9',
        fontSize: 15
      },
      buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: '#0e0e0e',
      },
    footer: {
        backgroundColor: '#0e0e0e',
       justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center',
        paddingHorizontal: 10
    },
    footerContainer: {
        justifyContent: 'flex-end',
    },
    footerButton: {
        padding: 10,
        
    },
    logo: {
        alignItems: 'center',
        width: 40, 
        height: 40
    },
    cardHeader: {
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    cardHeaderBottom: {
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardBody: {
        justifyContent: 'space-between'
    },
    cardFooter: {
       justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center',
        paddingHorizontal: 10
    },
    card: {
        paddingTop: 10,
        backgroundColor: '#0e0e0e',
        marginBottom: 7
    },
    cardHeaderText: {
        justifyContent: "space-between",
        paddingRight: 195
    },
    cardBodyText: {
        fontSize: 20,
        color: '#a5a9a8',
        paddingHorizontal: 20
    },
    textTop: {
        color: '#a5a9a8',
        fontSize: 16,
        paddingLeft: 5,
        
    },
    textBottom: {
        color: '#6a6e6f',
        fontSize: 13,
        paddingHorizontal: 5
    },
    cardFooterButton: {
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 390,
        height: 460,
        marginTop: 10
    }
})