import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";

export default function BookScanScreen() {
  const device = useCameraDevice("back");
  const { hasPermission, requestPermission } = useCameraPermission();

  if (!hasPermission) {
    let isGranted = requestPermission();
    if (!isGranted) {
      console.log("Permission not granted");
      return <></>;
    }
  }

  /* if (!hasPermission) return <PermissionsPage />;
  if (device == null) return <NoCameraDeviceError />; */
  return (
    <View>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device!}
        isActive={true}
      />
    </View>
  );
  /* return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan QR Code</Text>
    </View>
  ); */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
