import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './BatLabelStyles';

interface BatLabelProps {
    labelName: string
    keyType?: 'phone-pad' | 'default'
}

export function BatLabel({ labelName, keyType }: BatLabelProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.labelName}>{labelName}</Text>
        <TextInput style={styles.labelInput} placeholder={`Enter ${labelName == 'Note' ? 'a' : 'your'} ${labelName}`} keyboardType={keyType ? keyType : 'default'}/> 
    </View>
  );
}

