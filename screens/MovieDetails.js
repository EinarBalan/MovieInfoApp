import React from "react"
import { View, Text, StyleSheet, Image, Linking } from "react-native"
import { elementBackgroundColor } from "../colors"
import StyledButton from "../components/StyledButton"
import { backgroundColor } from "../colors"

const MovieDetails = props => {
    props = props.route.params.props

    const openURL = () => {
        Linking.openURL(`https://www.imdb.com/title/${props.imdbID}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image source={{ uri: props.Poster }} style={styles.image} />
                <View style={styles.colContainer} >
                    <Text style={styles.title}>{props.Title}</Text>
                    <View style={[styles.spaceBetweenContainer, {width: "100%"}]}>
                        <Text>{props.Year}</Text>
                        <StyledButton onPress={openURL}/>
                    </View>

                </View>
            </View>

        </View>
    )
}

export default MovieDetails



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        padding: 10,
    },
    image: {
        width: 110.4,
        height: 160,
        borderWidth: 2,
        borderColor: elementBackgroundColor,
        borderRadius: 5,
        marginRight: 10,

    },
    rowContainer: {
        flexDirection: "row",
    },
    colContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
    },
    spaceBetweenContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 10,
    },
})
