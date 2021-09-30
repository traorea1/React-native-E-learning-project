import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { useState } from 'react'
// obtenir le nom depuis la page enregistrement et l'afficher ici. 

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Enew - Learning</Header>
      <Paragraph>
        Notre mission: Mise en place d'un apprentissage par étudiant.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Connexion
      </Button>
      <Button
        mode="outlined"
        //onPress={() => navigation.navigate('RegisterScreen')}
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Enregistrement
      </Button>
    </Background>
  )
}
