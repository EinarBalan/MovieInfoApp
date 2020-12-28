import React from "react"
import { Text, StyleSheet, TouchableHighlight } from "react-native"
import { accentColor, accentColorShade, backgroundColor } from "../colors"

const StyledButton = props => (
    <TouchableHighlight onPress={props.onPress} style={styles.button} underlayColor={accentColorShade}>
        <Text style={styles.text}>IMDB</Text>
    </TouchableHighlight>
)

export default StyledButton

const styles = StyleSheet.create({
    button: {
        width: "100%",
        padding: 10,
        backgroundColor: accentColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    text: {
        fontWeight: "bold",
        fontSize: 17,
        color: backgroundColor,
    },
})