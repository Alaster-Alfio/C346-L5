import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    TouchableOpacity,
    Image,
    Button,
} from 'react-native';

// Pokémon data
const datasource = [
    {
        title: '⚡ ELECTRIC',
        backgroundColor: '#FFFF00', // Yellow
        data: [
            {
                name: 'Pikachu',
                cardImage:
                    'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH1/SWSH1_EN_65.png',
            },
            {
                name: 'Voltorb',
                cardImage:
                    'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SM35/SM35_EN_30.png',
            },
        ],
    },
    {
        title: '🔥 FIRE',
        backgroundColor: '#FF4500', // Orange-Red
        data: [
            {
                name: 'Charmander',
                cardImage:
                    'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SV3PT5/SV3PT5_EN_168.png',
            },
            {
                name: 'Growlithe',
                cardImage:
                    'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SV06/SV06_EN_181.png',
            },
        ],
    },
    {
        title: '💧 WATER',
        backgroundColor: '#87CEEB', // Light Blue
        data: [
            {
                name: 'Squirtle',
                cardImage:
                    'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BW7/BW7_EN_29.png',
            },
            {
                name: 'Lapras',
                cardImage:
                    'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SM9/SM9_EN_31.png',
            },
        ],
    },
];

// Main App
export default function App() {
    // Handle clicking a Pokémon card
    const handleCardPress = (pokemonName) => {
        alert(`You selected ${pokemonName}!`);
    };

    // Render Pokémon cards
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => handleCardPress(item.name)}
        >
            <Text style={styles.cardName}>{item.name}</Text>
            <Image source={{ uri: item.cardImage }} style={styles.cardImage} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Add Pokemon Button */}
            <View style={styles.buttonContainer}>
                <Button title="Add Pokemon" onPress={() => alert('Coming Soon!')} />
            </View>

            {/* SectionList for Pokémon */}
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, backgroundColor } }) => (
                    <View
                        style={[
                            styles.sectionHeader,
                            { backgroundColor: backgroundColor || '#f0f0f0' },
                        ]}
                    >
                        <Text style={styles.sectionTitle}>{title}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => `${item.name}-${index}`}
            />
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 10,
    },
    buttonContainer: {
        marginBottom: 10,
        alignItems: 'center',
    },
    sectionHeader: {
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    cardName: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#333',
    },
    cardImage: {
        width: 70,
        height: 100,
        resizeMode: 'contain',
    },
});
