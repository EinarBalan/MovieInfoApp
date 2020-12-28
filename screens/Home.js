import React from "react"
import { StyleSheet, View, Keyboard, FlatList } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import SearchBar from "../components/SearchBar"
import MovieSearchItem from "../components/MovieSearchItem"
import { search } from "../mockData"
import { backgroundColor } from "../colors"

export default class Home extends React.Component {

    state = {
        search: "",
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

    key = 0
    searchBar = <SearchBar pushChanges={this.updateState("search")}/>

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.appContainer}>
                    <FlatList
                        data={search.filter( movie => {
                            return movie.Title.toLowerCase().includes(this.state.search.toLowerCase())
                        })}
                        renderItem={ obj =>
                            <MovieSearchItem {...(obj.item)} openMovieDetails={this.openMovieDetails } />
                        }
                        keyExtractor={() => (this.key++).toString()}
                        style={styles.listContainer}
                        ListHeaderComponent={this.searchBar}
                    />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}


const styles = StyleSheet.create({
    appContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: backgroundColor,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    listContainer: {
        width: "100%",
        paddingBottom: 10,
    }
});