import { Text } from "react-native";
import HiHello from "./components/Hello/Hi";
import {SafeAreaView,SafeAreaProvider} from "react-native-safe-area-context";
export default function App() {
  return (
    <>

    <SafeAreaProvider>
      <SafeAreaView>
      <Text>Hi</Text>
      </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
