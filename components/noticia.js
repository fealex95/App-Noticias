import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, Linking } from "react-native"
import React from 'react';
import { TouchableNativeFeedback } from "react-native-gesture-handler";


const Noticia = ({ titulo, resumo, url, urlItem }) => {
    return (
        <View>
            <TouchableNativeFeedback onPress={async () => {

                const suportted = await Linking.canOpenURL(urlItem)
                if (suportted) {
                    await Linking.openURL(urlItem)
                } else {
                    Alert.alert(`Impossivel abrir link: ${urlItem}`)
                }
            }}>
                <Image
                    source={{
                        uri: url,
                    }}
                    style={styles.imagem}
                />
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.texto}>{resumo}</Text>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 10,
        marginEnd: 10,
        marginStart: 10,
        color: 'black',
    },

    texto: {
        color: '#838383',
        paddingTop: 10,
        paddingBottom: 15,
        marginEnd: 10,
        marginStart: 10,
    },

    imagem: {
        flex: 1,
        height: 200,
        resizeMode: 'cover',

    },

    botao: {
        marginBottom: 10,
        fontWeight: 'bold',
    }
})

export default Noticia