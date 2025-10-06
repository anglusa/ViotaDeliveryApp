import { Stack } from "expo-router";
import CustomHeader from "@/components/CustomHeader"
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Platform, TouchableOpacity } from 'react-native';
import Colors from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ header: () => <CustomHeader /> }}
          />
          <Stack.Screen name="(modal)/filter"
            options={({ navigation }) =>
            ({
              headerTitle: 'Filtro',
              headerTitleAlign: 'center',
              headerBackVisible: false,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="close-outline" size={30} color={Colors.primary} />
                </TouchableOpacity>
              ),
              headerStyle : {
                backgroundColor: Colors.lightGrey, 
              },
              presentation: 'modal',
              animation: Platform.OS == 'ios' ? 'default': 'slide_from_bottom',
              
            })
            }
          />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
