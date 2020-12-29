import React from 'react'
import { FlatList, StyleSheet, Keyboard } from 'react-native'
import SearchBar from "../components/SearchBar"
import MovieSearchItem from "../components/MovieSearchItem"
import { searchDB } from "../api"

export default class MovieList extends React.Component {
    state = {
        search: "",
        data: [],
    }

    key = 0

    componentDidMount() {
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidHide = () => {
        if (this.state.search.length > 0)
            searchDB(this.state.search, this.updateState("data"))
    }

    updateState = key => value => {
        this.setState({
            [key]: value,
        })
    }

    openMovieDetails = props => {
        this.props.navigation.navigate("Movie Details", {
            props: props,
        })
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={obj =>
                    <MovieSearchItem {...(obj.item)} openMovieDetails={this.openMovieDetails} />
                }
                keyExtractor={() => (this.key++).toString()}
                style={styles.listContainer}
                ListHeaderComponent={<SearchBar pushChanges={this.updateState("search")} />}
            />
        )
    }
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        paddingBottom: 10,
    }
});