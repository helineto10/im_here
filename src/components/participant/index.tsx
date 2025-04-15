import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";


type Props = {
    name: string
    onRemove: () => void
}
export function Participant({name, onRemove}: Props) {
    return (
        <View style={s.form}>
            <Text style={s.name}>{name}</Text>
            <TouchableOpacity onPress={onRemove} style={s.button}>
                <Text style={s.buttonTitle}>-</Text>
            </TouchableOpacity>
        </View>
    )
}