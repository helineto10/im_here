import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    form: {
        marginBottom: 12,
        flexDirection: 'row',
    },
    name: {
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
        backgroundColor: '#E23C44',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: '#FFF',
        fontSize: 24,
    },
})