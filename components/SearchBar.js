import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import {elementBackgroundColor } from '../colors'

export default class SearchBar extends React.Component {
    state = {
        value: "",
    }

    handleChangeText = text => {
        this.setState({
            value: text,
        })
        this.props.pushChanges(text)
    }

    render() {
        return (
                <TextInput
                    value={this.state.value}
                    onChangeText={this.handleChangeText}
                    placeholder="Search movies"
                    style={styles.searchbar} />
        )
    }
}

const styles = StyleSheet.create({
    searchbar: {
        width: "95%",
        margin: 10,
        marginBottom: 0,
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: elementBackgroundColor,
        backgroundColor: elementBackgroundColor,
        textAlign: "center",
    },
});