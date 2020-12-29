import React from "react"
import { StyleSheet, View, Keyboard } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { backgroundColor } from "../colors"
import MovieList from "../components/MovieList"

export default class Home extends React.Component {
    key = 0

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.homeContainer}>
                    <MovieList navigation={this.props.navigation}/>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    homeContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: backgroundColor,
        alignItems: "center",
        justifyContent: "flex-start",
    }
});