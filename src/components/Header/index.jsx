import { styles } from "./styles";
import { SafeAreaView, Text} from "react-native";

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Página Header</Text>
    </SafeAreaView>
  )
}