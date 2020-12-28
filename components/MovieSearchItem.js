import React from "react"
import { Text, StyleSheet, View, Image, TouchableHighlight } from "react-native"
import { elementBackgroundColor } from '../colors'

export default class MovieSearchItem extends React.Component {

    handlePress = () => {
        this.props.openMovieDetails(this.props)
    }

    render() {
        return (
            <TouchableHighlight onPress={ this.handlePress } underlayColor={elementBackgroundColor} style={styles.touchable}>
                <View style={styles.itemContainer}>
                    <Image source={{ uri: this.props.Poster }}
                        style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{this.props.Title}</Text>
                        <Text>{this.props.Year}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}


const styles = StyleSheet.create({
    touchable: {
        borderWidth: 2,
        borderColor: elementBackgroundColor,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        marginBottom: 0,
    },
    itemContainer: {
        flexDirection: "row",
        flex: 1,
    },
    image: {
        width: 86.25,
        height: 125,
        borderWidth: 2,
        borderColor: elementBackgroundColor,
        borderRadius: 5,
        marginRight: 10,

    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
    }
})