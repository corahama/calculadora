import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';


const App = () => {
  let [number, setNumber] = useState('');

  const clickEvent = (symPressed) => {
    if (!isNaN(symPressed)) {
      setNumber(number += symPressed);
    } else {
      switch(symPressed) {
        case 'Delete':
          setNumber(number.slice(0,-1));
          break;
        case '.':
          if (number.indexOf('.') === -1 ) {
            setNumber(number += '.');
          }
      }
    };
  }

  const CalculatorButton = ({letter}) => {
    return (
      <View 
        style={{
          flex:1,
          borderColor:'white',
          borderWidth:1,
          justifyContent: 'center',
          alignItems:'center',
        }}
        onTouchEnd={(e) => {
            const children = e.target._internalFiberInstanceHandleDEV.memoizedProps.children;
            clickEvent(typeof children === 'string' ? children : children.props.children);
          }
        }
      >
        <Text style={{color:'white'}}>{letter}</Text>
      </View>
    )
  }

  return (
    <View 
      style={{
        flex:1,
        backgroundColor:'gray',
      }}
    >
      {/* Panel View */}
      <View 
        style={{
          flex:2,
          padding: 20,
          justifyContent:'center',
          alignItems:'flex-end'
        }}
      >
        <Text style={{fontSize:50}}>{number}</Text>
      </View>


      {/* Keyboard View */}
      <View style={{flex:4, backgroundColor:'black'}}>

        <View style={{flex:1, flexDirection:'row'}}>
          <CalculatorButton letter={'c'}></CalculatorButton>
          <CalculatorButton letter={'/'}></CalculatorButton>
          <CalculatorButton letter={'x'}></CalculatorButton>
          <CalculatorButton letter={'Delete'}></CalculatorButton>
        </View>

        <View style={{flex:1, flexDirection:'row'}}>
          <CalculatorButton letter={'7'}></CalculatorButton>
          <CalculatorButton letter={'8'}></CalculatorButton>
          <CalculatorButton letter={'9'}></CalculatorButton>
          <CalculatorButton letter={'-'}></CalculatorButton>
        </View>

        <View style={{flex:1, flexDirection:'row'}}>
          <CalculatorButton letter={'4'}></CalculatorButton>
          <CalculatorButton letter={'5'}></CalculatorButton>
          <CalculatorButton letter={'6'}></CalculatorButton>
          <CalculatorButton letter={'+'}></CalculatorButton>
        </View>

        <View style={{flex:1, flexDirection:'row'}}>
          <CalculatorButton letter={'1'}></CalculatorButton>
          <CalculatorButton letter={'2'}></CalculatorButton>
          <CalculatorButton letter={'3'}></CalculatorButton>
          <CalculatorButton letter={'%'}></CalculatorButton>
        </View>

        <View style={{flex:1, flexDirection:'row'}}>
          <CalculatorButton letter={'0'}></CalculatorButton>
          <CalculatorButton letter={'0'}></CalculatorButton>
          <CalculatorButton letter={'.'}></CalculatorButton>
          <CalculatorButton letter={'='}></CalculatorButton>
        </View>

      </View>
    </View>
  );
}

export default App;
