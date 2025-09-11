import React, { forwardRef, useMemo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo(() => ['50%'], []);
    return (
        <BottomSheetModal ref={ref} snapPoints={snapPoints}>
            <BottomSheetView style={styles.contentContainer}>
                <Text>BottomSheet</Text>
            </BottomSheetView>
        </BottomSheetModal>
    )
});

export default BottomSheet

const styles = StyleSheet.create({
    contentCointainer: {
        alignItems : "center",
        height : "100%",
    },
})