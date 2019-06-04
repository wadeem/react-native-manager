import React from "react";
import {View, Text} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers"
import firebaseConfig from "./config/firebase.js";
import firebase from "firebase";

export default class App extends React.Component {

    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return <Provider store={createStore(reducers)}>
            <View>
                <Text>This is a text message</Text>
            </View>
        </Provider>

    }
}