import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';

// Recipes data
const datasource = [
    {
        title: '🍳 Breakfast Recipes',
        backgroundColor: '#FFE4B5', // Light orange
        data: [
            {
                name: 'Avocado Toast',
                description: 'Whole-grain bread with smashed avocado and toppings.',
                image:
                    'https://www.rootsandradishes.com/wp-content/uploads/2017/08/avocado-toast-with-everything-bagel-seasoning-4-1024x1536.jpg',
            },
            {
                name: 'Smoothie Bowl',
                description: 'Blended fruits topped with granola and fresh fruits.',
                image:
                    'https://www.rootsandradishes.com/wp-content/uploads/2022/09/simple-saute%CC%81ed-apples-10-1024x1536.jpg',
            },
        ],
    },
    {
        title: '🥗 Lunch Recipes',
        backgroundColor: '#98FB98', // Light green
        data: [
            {
                name: 'Grilled Chicken Salad',
                description:
                    'Grilled chicken breast with fresh greens and a light dressing.',
                image:
                    'https://www.rootsandradishes.com/wp-content/uploads/2021/09/chicken-salad-with-grapes-and-pecans-7-1-720x1080.jpg',
            },
            {
                name: 'Quinoa Bowl',
                description:
                    'Nutritious quinoa with roasted vegetables and a drizzle of olive oil.',
                image:
                    'https://www.rootsandradishes.com/wp-content/uploads/2018/03/spicy-turkey-taco-quinoa-bowls-7.jpg',
            },
        ],
    },
];

// Main App
export default function App() {
    // Handle clicking a recipe
    const handleCardPress = (recipeName) => {
        Alert.alert(`You selected ${recipeName}!`);
    };

    // Render recipe items
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => handleCardPress(item.name)}
        >
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* SectionList for Recipes */}
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
    sectionHeader: {
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    cardContainer: {
        flexDirection: 'row',
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
    cardContent: {
        flex: 1,
        marginLeft: 10,
    },
    cardName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    cardDescription: {
        fontSize: 14,
        color: '#777',
    },
    cardImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
});
