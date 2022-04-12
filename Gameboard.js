import React,{Component} from 'react';
import { Text, View, StyleSheet} from 'react-native';
export default class APP extends Component {

render(){
  
  const {matrix}=this.props

 return(
    <View style={styles.gameboard}>
       {matrix.map((value,index) =>{return(<View style={styles.rows}>{value.map((cValue,cIndex) =>{return(<View style={styles.clomn}>{cValue !=0 ? <Text style ={styles.chesse}>{cValue}</Text>:null}</View>)})}</View>)})}
    </View>
 )
}

}
const styles = StyleSheet.create({

gameboard:{
              backgroundColor:'#a0a8a2',
              height:'95%',
              marginTop:'45px',

},
rows:{
     borderWidth:3,
     borderColor:'#84c8db',
     height:'25%',
     flexDirection:'row'
},

clomn:{
     borderWidth:2,
     borderRadius:8,
     borderColor:'#84c8db',
     alignItems:'center',
     justifyContent:'center',
     width:'25%'
},
chesse:{
  fontFamily:'time-newroma',
  fontSize:20,
  fontWeight: "400",
}

});