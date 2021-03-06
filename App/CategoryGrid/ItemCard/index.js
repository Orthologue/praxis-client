// external imports
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Animated, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import { Card, CardAction } from '../../../quark'
import { gql } from 'react-apollo'
import { createFragment } from 'apollo-client'
// local imports
import ItemSummary from './ItemSummary'
import styles from './styles'
import { setView } from '../../../store'

const animationDuration = 100

class ItemCard extends PureComponent {
    _onPress() {
        this._root.measure((_, __, width, height, x, y) => {
            this.props.openEditor({
                id: this.props.item.id,
                category: this.props.category,
                origin: {
                    width,
                    height,
                    x,
                    y
                },
            })
        })

    }

    render() {
        // grab used components
        const {style, children, item, openEditor, ...unused} = this.props

        return (
            <Card style={[styles.container, style]} {...unused}>
                <View style={{flex: 1}} ref={ele => this._root = ele}>
                    <ItemSummary item={item}/>
                </View>
                <View style={styles.actions}>
                    <CardAction onPress={this._onPress.bind(this)} >
                        special
                    </CardAction>
                </View>
            </Card>
        )
    }
}

ItemCard.fragments = {
    item: `
        ... on Item {
            id
            ${ItemSummary.fragments.item}
        }
    `
}

export default ItemCard
