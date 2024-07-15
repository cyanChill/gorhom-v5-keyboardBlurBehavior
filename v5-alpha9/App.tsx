import type { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [textContent, setTextContent] = useState("");

  return (
    <GestureHandlerRootView>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Pressable
          onPress={() => bottomSheetRef.current?.snapToIndex(0)}
          style={({ pressed }) => [
            styles.button,
            pressed ? { opacity: 0.75 } : undefined,
          ]}
        >
          <Text style={{ color: "#fff" }}>Open Modal</Text>
        </Pressable>

        <BottomSheet
          ref={bottomSheetRef}
          detached
          enablePanDownToClose
          enableDynamicSizing
          keyboardBehavior="interactive"
          keyboardBlurBehavior="restore"
          android_keyboardInputMode="adjustResize"
          backdropComponent={Backdrop}
          backgroundStyle={{
            backgroundColor: "#fff",
            marginHorizontal: 16,
            paddingBottom: 16,
          }}
          bottomInset={16}
        >
          <BottomSheetView style={styles.contentContainer}>
            <BottomSheetTextInput
              autoFocus
              value={textContent}
              onChangeText={(text) => setTextContent(text)}
              placeholder="Placeholder Text"
              style={styles.textInput}
            />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#1d4ed8",
  },
  contentContainer: {
    minHeight: 256,
    padding: 32,
  },
  textInput: {
    padding: 2,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});

/** @description Our version of `<BottomSheetBackdrop />`. */
function Backdrop(props: BottomSheetBackdropProps) {
  return (
    <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
  );
}
