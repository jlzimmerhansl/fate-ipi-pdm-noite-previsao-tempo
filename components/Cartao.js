import React from 'react';
import { View, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Cartao = (props) => {
    return (
      <View style={{...styles.cartao, ...props.styles}}>
        {props.children}
      </View>
    );
}

const styles = StyleSheet.create({
    cartao: {
        alignItems: 'center',
        shadowColor: 'black',
        textShadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.32,
        elevation: 4,
        padding: 12,
        borderRadius: 12
    }
});

export default Cartao;  