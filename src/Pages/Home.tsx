
import React, { useState } from "react";

//components do react native 
import { Text, StyleSheet, SafeAreaView, TextInput, FlatList } from 'react-native'


//components da aplicacao
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";


//representacao de dados 
//obs aqui eu so tipei os dados 
interface SkillData {
    id: string,
    name: string
}

export function Home() {

    const [newSkill, setNewSkill] = useState('')
    /** myskill que e o array de dados ,
        recebe o tipo da interface (representacao de dados e 
        ainda recebe atributo de que ele e um array de tipo da interface)
    */
    const [mySkills, setMySkills] = useState<SkillData[]>([])

    //funcao de adicionar a skill
    function handleAddNewSkill() {
        //objeto a ser adicionado
        //criei o tipo de objeto a ser adicionado 
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }
        setMySkills(oldState => [...oldState, data])
    }
    function handleRemoveSkill(id:string){
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id 
        ))

    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome,Luis Felipe</Text>
            <TextInput
                style={styles.input}
                placeholder='New Skill'
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
            />
            <Button onPress={handleAddNewSkill} title='Add Skill' />
            <Text style={[styles.title, { marginTop: 50 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}//array
                keyExtractor={item => item.id}//key da flatlist
                renderItem={({ item }) => ( //item a ser renderizado
                    <SkillCard skill={item.name}//componente que foi renderizado
                    onPress={()=> handleRemoveSkill(item.id)}//passou a funcao no onpress com param item.id(string definido na interface)
                    />
                )}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        color: '#fff',
        backgroundColor: '#1f1e25',
        marginTop: 30,
        padding: 15,
        borderRadius: 7
    },

})


