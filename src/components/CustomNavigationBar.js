import { NavigationContainer } from "@react-navigation/native";
import { Appbar, Menu } from "react-native-paper"; 
import React from "react";

export default function Navbar({navigation, back}){
    
    const [visible, setVisible] = React.useState(false); 
    const openMenu = ()=> setVisible(true); 
    const closeMenu = () => setVisible(false); 

    return(
        <Appbar.Header>
            <Appbar.BackAction onPress={navigation.goBack} />
            <Appbar.Content title = "Enew-Learning"/>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor = {
                    <Appbar.Action icon = "menu" color= "gold" onPress={openMenu} />
                }>
                <Menu.Item icon = 'tablet-dashboard'onPress={()=>navigation.navigate('Dashboard')} title ='Tableau de bord' />
                <Menu.Item icon = 'book-variant'onPress={() => navigation.navigate('Cours')} title = 'Cours' />
                <Menu.Item icon = 'bell-ring'onPress={() => navigation.navigate('Notification')} title = 'Notification' />
                <Menu.Item icon = 'counter'onPress={()=>navigation.navigate('Notes')} title = 'Notes' />
                <Menu.Item icon = 'logout'onPress={()=>navigation.navigate('StartScreen') } title = 'Deconnection' />
            </Menu>
            

        </Appbar.Header>
    )
}
