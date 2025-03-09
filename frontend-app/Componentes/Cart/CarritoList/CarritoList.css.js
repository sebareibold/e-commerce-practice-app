import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cartContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ffffff'
    },
    cartlist: {
        flex: 1
    },
    emptyCart: {
        textAlign: "center",
        marginTop: 20
    },
    cartButtons: {
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
});

export default styles;