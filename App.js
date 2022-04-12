import React,{Component} from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity } from 'react-native';
import Gameboard from './Gameboard'



export default class APP extends Component {
    constructor(props){
          super(props)
          this.state = {
           bMatrix:[[0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0]]
          }
          this.operation=['L','R','UP','Down','NewGame']
          this.generateR()
          this.generateR()
          
    }
 moveL(){
    var i =0
    var j = 0
    while(i<4){
      bMatrix == 0
      while(j<4){
          if (this.operation==0){
            bMatrix = bMatrix-1
            return true
          }
          j++
          if (bMatrix == 0){
            bmatrix = bmatrix + 1
          }
          else if(bmatrix == bmatrix+1){
            continue
          }
          else if (bmatrix != 0){
            bmatrix = 3
          }
      }
      i++
    }
} 
    moveR(){
      const {operation} = this.state
        var i =0
        var j = 0
        while(i<4){
         bMatrix == 0
      while(j<4){
          if (this.operation==0){
            bMatrix = bMatrix-1
            return true
          }
          j++
          if (bMatrix == 0){
            bmatrix = bmatrix + 1
          }
           else if(bmatrix == bmatrix+1){
            continue
          }
           else if (bmatrix != 0){
            bmatrix = 3
          }
      }
      i++

    }
     
    } 
    moveUp(){
       var i =0
       var j = 0
      while(i<4){
      bMatrix == 0
      while(j<4){
          if (this.operation==0){
            bMatrix = bMatrix-1
            return true
          }
          j++
          if (bMatrix == 0){
            bmatrix = bmatrix - 1
          }
           else if(bmatrix == bmatrix+1){
            continue
          }
           else if (bmatrix != 0){
            bmatrix = 3
          }
      }
      i++

    }
     
    } 
    moveDown(){
      var i =0
    var j = 0
    while(i<4){
      bMatrix == 0
      while(j<4){
          if (this.operation==0){
            bMatrix = bMatrix-1
            return true
          }
          j++
          if (bMatrix == 0){
            bmatrix = bmatrix + 1
          }
           else if(bmatrix == bmatrix+1){
            continue
          }
           else if (bmatrix != 0){
            bmatrix = 3
          }
      }
      i++

    }
     
    } 

generateR = () => {
       const   {bMatrix} = this.state
       const   row = Math.floor(Math.random() * 4)
       const   col = Math.floor(Math.random() * 4)
       const   cValue = Math.random() < 0.5 ? 2 : 4
       bMatrix[row][col] = cValue
       this.setState({bMatrix: bMatrix})
    }




 reStart  (){
  const {operation} = this.operation.NewGame
  if(this.operations.NewGame)
  return false
     
}


render(){

          return(
            
           <View style={{marginTop:'25px',flex:1,}}>
            
           <View ><Text style={{marginTop:'45px',
                               fontFamily: "time-newroma",
                               fontWeight: "900",
                               fontSize: 50,
                               color: "#777",}}>2048</Text>
           <TouchableOpacity style={styles.buttons} onPress ={() => this.operate(this.operations['NewGame'])} >
           <Text> NewGame </Text>
           </TouchableOpacity>
           </View>

           <View style={styles.stylec}>
           <Gameboard matrix= {this.state.bMatrix}/>
           </View>
           <View style={styles.styleb}>
           <TouchableOpacity style={styles.buttons} onPress={() => this.operate(this.operations['L'])}>
           <Text> L </Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttons} onPress={() => this.operate(this.operations['R'])}>
           <Text> R </Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttons} onPress={() => this.operate(this.operations['UP'])}>
           <Text> UP </Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttons} onPress={() => this.operate(this.operations['Down'])}>
           <Text> Down </Text>
           </TouchableOpacity>
           </View>
           </View>
       
            );
    }
}
const styles = StyleSheet.create({

stylec:{    
                 flex:2,
},
styleb:{
              flex:1,
              bordercolor:"#ffff",
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'center',
},
buttons:{    
             
             borderRadius:8,
             borderWidth:5,
             bordercolor:"#ffff",
             backgroundColor:"#888",
             width:'20%',
},


});
