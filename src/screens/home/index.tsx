import { Text, TouchableOpacity, View, Image, ScrollView, TouchableHighlight } from "react-native";
import { TextInput } from 'react-native-paper';
import { styles } from "./styles";
import Icon from  'react-native-vector-icons/Ionicons'
import * as React from 'react';
import RedditLogo from "../../assets/icons/reddit-logo.png"
import EmperorImage from "../../assets/images/emperor-image.jpeg"
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const Home = ({navigation}) => {
    const [isHomePress, setIsHomePress] = React.useState<boolean>(true);
    const [isPopularPress, setIsPopularPress] = React.useState<boolean>(false);

    const homeTouchProps = {
        activeOpacity: 1,
        underlayColor: 'transparent',
        style: isHomePress ? styles.buttonPress : styles.buttonNormal,
        onHideUnderlay: () => {if(isPopularPress) {setIsHomePress(false)}},
        onShowUnderlay: () => {setIsHomePress(true), setIsPopularPress(false)},
        onPress: () => console.log('hello'),
      };

      const popularTouchProps = {
        activeOpacity: 1,
        underlayColor: 'transparent',
        style: isPopularPress ? styles.buttonPress : styles.buttonNormal,
        onHideUnderlay: () => {if(isHomePress) {setIsPopularPress(false)}},
        onShowUnderlay: () => {setIsPopularPress(true), setIsHomePress(false)},
        onPress: () => console.log('hello'),
      };

    return <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
                <Icon name={'menu-outline'} color={'#a4a8a9'} size={35} />
            </TouchableOpacity>
            <TextInput style={styles.input} 
            theme={{ colors: { placeholder: "#a4a8a9" , text: "#a4a8a9"} }}
            mode={"outlined"} 
            label="Search"
            left={<TextInput.Icon name={() => <Icon name={'search-outline'} color={'#a4a8a9'} size={25} />}/>}
            outlineColor="transparent"
            activeOutlineColor="#a4a8a9"
            />
            <TouchableOpacity onPress={()=> navigation.navigate('Login') }>
            <Image source={RedditLogo} style={styles.logo}/>
            </TouchableOpacity>
        </View>

        <ScrollView>
            <View style={styles.buttonsContainer}>
                <TouchableHighlight {...homeTouchProps}>
                    <Text style={styles.btn}>Home</Text>
                </TouchableHighlight>
                <TouchableHighlight {...popularTouchProps}>
                    <Text style={styles.btn}>Popular</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.card} >
                <View style={styles.cardHeader} >
                    <Image source={RedditLogo} style={styles.logo}/>
                    <View style={styles.cardHeaderText} >
                        <Text style={styles.textTop} >r/StarWars</Text>
                        <View style={styles.cardHeaderBottom} >
                            <Text style={styles.textBottom} >u/Henryphillips29</Text>
                            <Icon name={'ellipse'} size={5} color={'#6a6e6f'} />
                            <Text style={styles.textBottom} >22h</Text>
                        </View>
                    </View>
                    <Icon name={'ellipsis-vertical'} size={20} color={'#6a6e6f'} />
                </View>

                <View style={styles.cardBody} >
                    <Text style={styles.cardBodyText} >Taika Waititi has potential to make his Star Wars film a great one. I'm sure Dave Filoni and Jon Favreau can do the same, but who else out there?</Text>
                </View>

                <View style={styles.cardFooter} >
                    <View style={styles.cardFooterButton} >
                        <TouchableOpacity style={styles.footerButton}>
                            <MaterialCommunityIcons name={'arrow-up-bold-outline'} color={'#6a6e6f'} size={25} />
                        </TouchableOpacity>
                        <Text style={{color:'#6a6e6f'}}>15</Text>
                        <TouchableOpacity style={styles.footerButton}>
                            <MaterialCommunityIcons name={'arrow-down-bold-outline'} color={'#6a6e6f'} size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cardFooterButton} >
                        <TouchableOpacity style={styles.footerButton}>
                            <Icon name={'chatbox-outline'} color={'#6a6e6f'} size={25} />
                        </TouchableOpacity>
                        <Text style={{color:'#6a6e6f'}}>57</Text>
                    </View>
                    <View style={styles.cardFooterButton} >
                        <TouchableOpacity style={styles.footerButton}>
                            <Icon name={'share-social-outline'} color={'#6a6e6f'} size={25} />
                        </TouchableOpacity>
                        <Text style={{color:'#6a6e6f'}}>Share</Text>
                    </View>
                    <TouchableOpacity style={styles.footerButton}>
                        <Icon name={'gift-outline'} color={'#6a6e6f'} size={25} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.card} >
                <View style={styles.cardHeader} >
                    <Image source={RedditLogo} style={styles.logo}/>
                    <View style={styles.cardHeaderText} >
                        <Text style={styles.textTop} >r/PrequelMemes</Text>
                        <View style={styles.cardHeaderBottom} >
                            <Text style={styles.textBottom} >u/picatostas</Text>
                            <Icon name={'ellipse'} size={5} color={'#6a6e6f'} />
                            <Text style={styles.textBottom} >13h</Text>
                            <Icon name={'ellipse'} size={5} color={'#6a6e6f'} />
                            <Text style={styles.textBottom} >i.redd.it</Text>
                        </View>
                    </View>
                    <Icon name={'ellipsis-vertical'} size={20} color={'#6a6e6f'} />
                </View>

                <View style={styles.cardBody} >
                    <Text style={styles.cardBodyText} >I beg you</Text>
                    <Image source={EmperorImage} style={styles.image} />
                </View>

                <View style={styles.cardFooter} >
                    <View style={styles.cardFooterButton} >
                        <TouchableOpacity style={styles.footerButton}>
                            <MaterialCommunityIcons name={'arrow-up-bold-outline'} color={'#6a6e6f'} size={25} />
                        </TouchableOpacity>
                        <Text style={{color:'#6a6e6f'}}>700</Text>
                        <TouchableOpacity style={styles.footerButton}>
                            <MaterialCommunityIcons name={'arrow-down-bold-outline'} color={'#6a6e6f'} size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cardFooterButton} >
                        <TouchableOpacity style={styles.footerButton}>
                            <Icon name={'chatbox-outline'} color={'#6a6e6f'} size={25} />
                        </TouchableOpacity>
                        <Text style={{color:'#6a6e6f'}}>15</Text>
                    </View>
                    <View style={styles.cardFooterButton} >
                        <TouchableOpacity style={styles.footerButton}>
                            <Icon name={'share-social-outline'} color={'#6a6e6f'} size={25} />
                        </TouchableOpacity>
                        <Text style={{color:'#6a6e6f'}}>Share</Text>
                    </View>
                    <TouchableOpacity style={styles.footerButton}>
                        <Icon name={'gift-outline'} color={'#6a6e6f'} size={25} />
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>

        <View style={styles.footerContainer}>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton}>
                    <Icon name={'home'} color={'#a4a8a9'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}>
                    <Icon name={'compass-outline'} color={'#a4a8a9'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}>
                    <Icon name={'add-outline'} color={'#a4a8a9'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}>
                    <Icon name={'chatbubble-ellipses-outline'} color={'#a4a8a9'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}>
                    <Icon name={'notifications-outline'} color={'#a4a8a9'} size={25} />
                </TouchableOpacity>
            </View>
        </View>

    </View>
}