import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class Contact extends Component {
    render() {
        return (
            <ScrollView>
            </ScrollView>
        );
    }
    
static navigationOptions = {
    title: 'Contact Us'
}

}

const ContactNavigator = createStackNavigator (
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#563DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)


const MainNavigator = createDrawerNavigator (
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

export default Contact;
    
