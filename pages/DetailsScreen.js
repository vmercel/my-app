// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
//import MySearchBar from "../components/searchbar";
import { Searchbar } from 'react-native-paper';
import MediaCard from '../components/MediaCard';

const API_URL = "https://www.omdbapi.com?apikey=db447031";



const DetailsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);




    return (

        < SafeAreaView style = {
            { flex: 1 }
        } >
        <View style = {
            { flex: 1, padding: 16 }
        } >
        < Searchbar placeholder = "Search"
        onChangeText = { onChangeSearch }
        value = { searchQuery }
        />

        <View style = {
            {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }
        } >
        
        <MediaCard media = { "100", "2021", "N/A", "Text", "More Text" }/>
        
        <MediaCard media = { "100", "2021", "N/A", "Text", "More Text" }/> 
        <Text style = {
            {
                fontSize: 25,
                textAlign: 'center',
                marginBottom: 16,
            }
        } >
        You are on Details Screen 
        </Text> 
        </View> 
        <Text style = {
            { fontSize: 18, textAlign: 'center', color: 'grey' }
        }>
        React Native Bottom Navigation 
        </Text> 
        <Text style = {
            { fontSize: 16, textAlign: 'center', color: 'grey' }
        }>
        www.aboutreact.com 
        </Text>

        </View> 
        </SafeAreaView >
    );
};

const styles = {
    mainContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    containerStyle: {
        padding: 10,
        backgroundColor: 'white',
        borderWidth: 0,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#808080',
        marginTop: 50,
        elevation: 10
    }
}

export default DetailsScreen;