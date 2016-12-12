import * as React from "react";
import {
    Text,
    View,
    Button
} from 'react-native';

export class TestView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Text"
        };

        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText() {
        this.setState ({
            titleText: "Text changed"
        });
    }

    render() {
        return (
            <View>
                <Text>{this.state.titleText}</Text>
                <Button
                    onPress={ this.onChangeText }
                    title="change"
                />
            </View>
        );
    }
}
