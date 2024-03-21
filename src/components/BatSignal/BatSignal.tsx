import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './BatSignalStyles';
import BatLogo from '../../../assets/bat-logo-black-300.png'
import BatIcon from '../../../assets/bat-logo-black-100.png'
import { BatLabel } from '../BatLabel/BatLabel';

export function BatSignal() {
  const [signal, setSignal] = useState(false)

  function renderForm() {
    return (
        <View style={styles.formContainer}>
            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Image source={BatIcon}></Image>
                <Text style={{ fontSize: 20, fontWeight: 'bold'}}> Bat Form</Text>
            </View>
            <View style={styles.labelContainer}>
                <BatLabel labelName='Name'/>
                <BatLabel labelName='Phone number' keyType='phone-pad'/>
                <BatLabel labelName='Location'/>
                <BatLabel labelName='Note'/>
            </View>
            <TouchableOpacity onPress={() => setSignal(false)}>
                <Text style={styles.text}>Send</Text>
            </TouchableOpacity>
        </View>
    )
  }

  function renderSignal() {
    return(
        <View style={styles.signalContainer}>
            <Image source={BatLogo} />
            <TouchableOpacity onPress={() => setSignal(true)}>
                <Text style={styles.text}>activate bat signal</Text>
            </TouchableOpacity>
        </View>
    )
  }

  return (
    <View style={styles.mainContainer}>
        { signal ? renderForm() : renderSignal()}
    </View>
  );
}
// 