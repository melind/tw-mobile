import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';


const img = 'https://i.ytimg.com/vi/4bHRyCE1N5s/maxresdefault.jpg';

const H = () => {

return (
            <View style={styles.container}>
            <ImageBackground blurRadius={2} source={{uri: img}} style={styles.background}>
                <Text style={styles.title}>
                                    Welcome from h!
                                </Text>


             </ImageBackground>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
     background: {
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              },
    title: {
            fontSize: 40,
            color: '#fff',
            marginBottom: 30,
        }
});

export default H;