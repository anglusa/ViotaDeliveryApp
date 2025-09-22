import React, { forwardRef, useMemo, useCallback } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { BottomSheetBackdrop, useBottomSheetModal, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router'

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo(() => ['50%'], []);
    const renderBackdrop = useCallback((props: any) =>
        <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, [])
    const { dismiss } = useBottomSheetModal();

    return (
        <BottomSheetModal ref={ref} snapPoints={snapPoints} backdropComponent={renderBackdrop} overDragResistanceFactor={0} handleIndicatorStyle={{ display: 'none' }} backgroundStyle={{ backgroundColor: Colors.lightGrey, borderRadius: 0 }}>
            <BottomSheetView style={styles.contentCointainer}>
                <View style={styles.toggle}>
                    <TouchableOpacity style={[styles.toggleButton, styles.toggleActive]}>
                        <Text style={styles.activeText}>Entrega</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.toggleButton, styles.toggleInactive]}>
                        <Text style={styles.inactiveText}>Retirada</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.subheader}>Minha Localização</Text>
                <Link href={'/'} asChild>
                    <TouchableOpacity style={styles.item}>
                        <Ionicons name='location-outline' size={20} color={Colors.medium} />
                        <Text style={{ flex: 1 }}>Localização atual</Text>
                        <Ionicons name='chevron-forward' size={20} color={Colors.primary} />
                    </TouchableOpacity>
                </Link>

                <Text style={styles.subheader}>Tempo para entrega</Text>
                <Link href={'/'} asChild>
                    <TouchableOpacity style={styles.item}>
                        <Ionicons name='stopwatch-outline' size={20} color={Colors.medium} />
                        <Text style={{ flex: 1 }}>agora</Text>
                        <Ionicons name='chevron-forward' size={20} color={Colors.primary} />
                    </TouchableOpacity>
                </Link>

                <TouchableOpacity onPress={() => dismiss()}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
            </BottomSheetView>
        </BottomSheetModal>
    )
});

export default BottomSheet

const styles = StyleSheet.create({
    contentCointainer: {
        paddingHorizontal: 16,
        height: "100%",
    },
    toggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 32,
    },
    toggleButton: {
        padding: 4,
        paddingHorizontal: 30,
        borderRadius: 32,
    },
    toggleActive: {
        backgroundColor: Colors.primary,
    },
    activeText: {
        color: '#fff',
        fontWeight: '700',
    },
    toggleInactive: {},
    inactiveText: {
        color: Colors.primary
    },
    subheader: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
    item: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        padding: 16,
        borderColor: Colors.grey,
        borderWidth: 1,
        marginBottom: 16,
    },
    button:{
        backgroundColor: Colors.primary,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})