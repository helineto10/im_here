import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },
    eventName: {
        marginTop: 48,
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
        fontWeight: 'thin',
    },
    form: {
        marginTop: 24,
        flexDirection: 'row',
        gap: 8,
        marginBottom: 24,
    },
    inputName: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FDFCFE',
        padding: 16,
        fontSize: 16,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#31CF67',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: '#FFF',
        fontSize: 24,
    },
    listTitle: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    emptyList: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center',
    },
})