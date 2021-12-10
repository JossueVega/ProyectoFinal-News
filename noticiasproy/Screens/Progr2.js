import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Progr2() {
    return (
        <View style={styles.container}>
            <Text>Alumno: Pedro Esquerra</Text>
           <Text>Matricula: 17212919</Text>
           <Text>Carrera: Ing.Tics</Text>
          <Text>Contacto: 6645471607</Text>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0ffff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  