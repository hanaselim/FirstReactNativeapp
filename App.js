import React , {useState} from 'react';
import { StyleSheet, Text, View, FlatList , Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import Sandbox from "./components/SandBox";

export default function App() {
  const[todo, setTodo]=useState([
    {text:"buy coffee", key:'1'},
    {text:"create an app", key:'2'},
    {text:"play on the switch", key:'3'},
    {text:"get my certificate", key:'4'},

  ]);


const pressHandler = (key) => {
  setTodo((prevTodo) => {
    return prevTodo.filter(todo => todo.key != key)
  })
}

const submitHandler = (text) => {

if(text.length > 3){
  setTodo((prevTodo) => {
    return [
      {text:text,key:Math.random().toString() },
      ...prevTodo
    ];
  });
}
else {
Alert.alert('OOPS!',"The text must be over 3 characters long",[
  {text:"Done",onPress:() => console.log("alert closed")}
]);
}

}

  return (
///      <Sandbox />
  
   <TouchableWithoutFeedback onPress={() => {
     Keyboard.dismiss();
     //console.log("dismissed keyboard")
    }
  }> 
    <View style={styles.container}>
    <Header />
    <View style={styles.content}>
    <AddTodo submitHandler={submitHandler} />
      <View style={styles.list}>
        <FlatList 
        data={todo}
        renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
        )}
        />
      </View>
    </View>
    
    </View>
    </TouchableWithoutFeedback>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex:1,
    
    padding:40,
  },
  list:{
    flex:1,
    marginTop:20,
 
  }
 
   
});
