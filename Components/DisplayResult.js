import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

const DisplayResult = (prop)=>{

if(prop.data=="Fetching"){
    return <Text style={styles.text}>Fetching...</Text>
}
else if(prop.data.message){
    return <Text style={styles.text}>Something went wrong. Try again please</Text>
}
else if(prop.data.percentage){
    return(
        <View>
            <Text style={styles.text}>{prop.data.percentage}%</Text>
            <Text style={styles.text}>{prop.data.result}</Text>
        </View>
    
        )
    }
else{
    return(
        <View>
        </View>
    )
}
}
export default DisplayResult; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text:{
    textAlign:'center',
    fontSize:20
  }
});