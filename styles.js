import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2a2a2a',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: 60,
        width: 100,
        height: 100
    },
    button: {
        width: SCREEN_WIDTH - 50,
        marginBottom: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#2a2a2a',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#009688'
    },
    buttonText: {
        color: '#009688',
        textAlign: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1 // para munaog ang footer
    },
    footer: {
        height: 100
    }
});

export default Styles;