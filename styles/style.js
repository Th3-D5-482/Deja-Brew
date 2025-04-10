import { StyleSheet } from "react-native";
import { Colors } from '@/components/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 32,
    },
    text: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        maxWidth: 80,
    }
});