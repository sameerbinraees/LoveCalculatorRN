import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';

import DisplayResult from './Components/DisplayResult';


class App extends React.Component {

  state = {
    fname:"",
    sname:"",
    output:""
  }

  fetchResult(){
    this.setState({
      output:"Fetching"
    })
     fetch(`http://10.7.0.103:8080/person/delete/14`,{
      "method": "DELETE",
       headers:{
         
         //"x-rapidapi-key": "1f9b8788eamsh86abff4e68abb2fp14b3b9jsnebce603a0fa0"
         "content-type": "application/json"
       },
      //  body: JSON.stringify({
      //   personName: "Dad"
      //  })
     }
    )
    .then(data=>data.text())
    .then(data2=>{
      console.log(data2)
      this.setState({
        output:data2
        
      })
      
    })
  }

  render(){
  return (


    <View style={styles.container}>
    
      <Appbar.Header>
        <Appbar.Content
          style={{alignItems:"center"}}
          title="Love Percentage Calculator"
          
        />
      </Appbar.Header>
     
      <TextInput
        style={{marginTop:10}}
        label='First Person Name'
        value={this.state.fname}
        onChangeText={text => this.setState({ fname:text })}
      />

      <TextInput
        style={{marginTop:10}}
        label='Second Person Name'
        value={this.state.sname}
        onChangeText={text => this.setState({ sname:text })}
      />

      <Button 
       icon="cards-heart" 
       mode="contained" 
       style={{margin:10}}
       onPress={this.fetchResult.bind(this)}>
        Press me
      </Button>

      {/* <DisplayResult data={this.state.output}/> */}

    </View>
  );
}
}
export default App; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
