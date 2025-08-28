import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';

export default function CustomHeader() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
            <Image style={styles.bike} source={require('@/assets/images/bike.png')}/>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Entregando</Text>
            <TouchableOpacity style={styles.location}>
                <Text style={styles.subtitle}>Barra Bonita, SP</Text>
                <Ionicons name='chevron-down' size={25} color={Colors.primary}></Ionicons>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.profileButton}>
            <Ionicons name='person-outline' size={25} color={Colors.primary}></Ionicons>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    container: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    bike: {
        width: 35,
        height: 35,
    },
    titleContainer: {
        flex: 1,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
        color: Colors.medium,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 5,
    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50,
    },
});