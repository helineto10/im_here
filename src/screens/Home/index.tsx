import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { s } from './styles'
import { Participant } from '../../components/participant'

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    function handleAddParticipant() {
        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
    }

    function handleRemoveParticipant(name: string) {
        Alert.alert("Remover",`Deseja remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={s.container}>
            <Text style={s.eventName}>Nome do Evento</Text>
            <Text style={s.eventDate}>Segunda, 14 de Abril de 2025</Text>

            <View style={s.form}>
                <TextInput
                    style={s.inputName}
                    onChangeText={setParticipantName}
                    value={participantName}
                />
                <TouchableOpacity onPress={handleAddParticipant} style={s.button}>
                    <Text style={s.buttonTitle}>+</Text>
                </TouchableOpacity>
            </View>

            <Text style={s.listTitle}>
                Participantes: {participants.length}
            </Text>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleRemoveParticipant(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={s.emptyList}>
                        Ninguém chegou no evento ainda?
                        Adicione participantes a sua lista de presença.
                    </Text>
                )}

            />

        </View>
    )
}