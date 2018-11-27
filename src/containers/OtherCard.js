import React, { Component } from 'react';
import {
    Text, TextInput, StyleSheet,
    View, TouchableOpacity, Dimensions, FlatList
} from 'react-native';
import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import WordForm from './../components/WordForm'

const data = [
    {
        mean: 'đỏ',
        word: 'red',
        remembered: false
    },
    {
        mean: 'xanh dương',
        word: 'blue',
        remembered: true
    },
    {
        mean: 'xanh lá',
        word: 'green',
        remembered: true
    },
    {
        mean: 'vàng',
        word: 'yellow',
        remembered: false
    },
    {
        mean: 'xanh dương',
        word: 'blue',
        remembered: true
    },
    {
        mean: 'xanh lá',
        word: 'green',
        remembered: true
    },
    {
        mean: 'vàng',
        word: 'yellow',
        remembered: false
    }
]

class OtherCard extends Component {
    state = {
        isLike: false
    }

    renderTitle = () => (
        <View style={{ marginTop: 10, width: Dimensions.get("window").width * 0.95 }}>
            <Text style={styles.title}>Title</Text>
        </View>
    )

    renderLanguage = () => (
        <View style={{  marginTop: 5, width: Dimensions.get("window").width -60 }}>
            <Text style={styles.title}>Language</Text>
        </View>
    )

    renderList = (data) => {
        return <WordForm item={data.item} />
    }

    renderAddButton = () => (
        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.textButton}>Add</Text>
            <Icon name="plus" size={30} color={'white'} />
        </TouchableOpacity>
    )

    render() {
        return (
            <View style={styles.container}>
                {this.renderTitle()}
                {this.renderLanguage()}
                <TouchableOpacity
                    style={{ marginVertical: 15 , flexDirection: 'row'}}
                    onPress={() => this.setState({ isLike: !this.state.isLike })}>
                    <Icon name="heart" size={20} style={{ color: this.state.isLike ? primaryColorCore : 'gray' }} />
                    <Text style={{marginHorizontal:9}}>9</Text>
                </TouchableOpacity>
                <FlatList
                    style={{ flexGrow: 0, height: Dimensions.get("window").height * 0.45, width: Dimensions.get("window").width * 0.95 }}
                    data={data}
                    renderItem={this.renderList}
                    keyExtractor={item => item.toString()}
                />
                {this.renderAddButton()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        padding: 10,
        borderWidth: 2,
        borderColor: secondaryColorCore,
        marginHorizontal: 20,
        fontSize: 15
    },
    addButton: {
        width: 200,
        height: 50,
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: primaryColorCore,
        borderRadius: 15,
        elevation: 2
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default OtherCard;