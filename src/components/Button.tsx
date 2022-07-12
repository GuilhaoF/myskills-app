import React from "react";

import { TouchableOpacity,TouchableOpacityProps, Text ,StyleSheet} from "react-native";

//tipar o button 
//todas as propiedades que o button receber eu posso receber ou puxar pela {...rest}

interface ButtonProps extends TouchableOpacityProps{
    title:string
}


export function Button({title,...rest}:ButtonProps) {
    return (
        <TouchableOpacity {...rest} activeOpacity={0.8} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 15

    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'

    },
})