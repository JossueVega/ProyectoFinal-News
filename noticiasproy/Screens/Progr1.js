import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Progr() {
    return (
        <View style={styles.container}>
            <Text>Alumno: Jossue Vega</Text>
           <Text>Matricula: 17212936</Text>
           <Text>Carrera: Ing.Tics</Text>
          <Text>Contacto: 6643064546</Text>

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