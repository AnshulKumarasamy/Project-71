import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class WritingStory extends React.Component{

    constructor(){
        super();
        this.state={
            
        }
    }

    submitStory = async ()=>{

    }

    render(){
        return(
            <View>
                <Header
                    backgroundColor={'#9c8210'}
                    centerComponent={{
                        text: 'Story Hub',
                        style: { color: '#fff', fontSize: 20 },
                    }}
                />

                <TextInput
                    style={styles.inputBox}
                />

                <TextInput
                    style={styles.inputBox}
                />

                <TextInput
                    style={styles.inputBox}
                    multiline={true}
                />

                <TouchableOpacity
                    onPress={this.submitStory}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputBox: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
});