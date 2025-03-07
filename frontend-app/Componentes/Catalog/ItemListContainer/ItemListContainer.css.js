// ItemListContainer.css.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 60,
        justifyContent: 'center',
        width: "100%",
    },
    loader: {
        marginTop: 20,
    },
    columnWrapper:{
        justifyContent: 'space-around',
        padding: 5,
    }
});

export default styles;
