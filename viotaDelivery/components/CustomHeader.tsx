import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useRef } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import BottomSheet from './BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet'

const SearchBar = () =>
    <View style={styles.searchContainer}>
        <View style={styles.searchField}>
            <Ionicons style={styles.searchIcon} name="search" size={25} color={Colors.medium} />
            <TextInput style={styles.input} placeholder='Restaurante, lanchonetes, pratos' />
        </View>
        <Link href={'/'} asChild>
            <TouchableOpacity style={styles.optionButton}>
                <Ionicons name="options-outline" size={25} color={Colors.primary} />
            </TouchableOpacity>
        </Link>
    </View>

export default function CustomHeader() {

    const bottomSheetRef = useRef<BottomSheetModal>(null);

    const openModal = () => {
        bottomSheetRef.current?.present();
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <BottomSheet ref={bottomSheetRef} />
            <View style={styles.container}>
                <TouchableOpacity onPress={openModal}>
                    <Image style={styles.bike} source={require('@/assets/images/bike.png')} />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Entregando</Text>
                    <TouchableOpacity style={styles.location} onPress={openModal}>
                        <Text style={styles.subtitle}>Barra Bonita, SP</Text>
                        <Ionicons name='chevron-down' size={25} color={Colors.primary}></Ionicons>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.profileButton}>
                    <Ionicons name='person-outline' size={25} color={Colors.primary}></Ionicons>
                </TouchableOpacity>
            </View>
            <SearchBar />
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
    searchContainer: {
        height: 60,
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    searchField: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        color: Colors.mediumDark,
    },
    searchIcon: {
        paddingLeft: 10,
    },
    optionButton: {
        padding: 10,
        borderRadius: 50,
    }
});