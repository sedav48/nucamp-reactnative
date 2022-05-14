import React, { Component } from 'react';
import { ScrollView } from 'react-native';

class Contact extends Component {
    
    render() {
        return (
            
                    <ScrollView>
                     <Card
                        title = "Contact Information"
                        wrapperStyle={{margin: 20}} >
                        <Text> 1 Nu camp Way </Text>
                        <Text> Seattle, WA 98001 </Text>
                        <Text style={{marginBottom: 10}}> U.S.A. </Text>
                        <Text> Phone: 1-206-555-1234</Text>
                        <Text> Email: campsites@nucamp.co </Text>
                    </Card>
                    </ScrollView>
           
        );
    }
    
static navigationOptions = {
    title: 'Contact Us'
}

}

export default Contact;
    
