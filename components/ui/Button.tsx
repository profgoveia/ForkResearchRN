import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    loading?: boolean;
    ghost?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, ghost, loading = false }) => {
    return (
        <Pressable style={[styles.button, ghost && styles.ghost]} onPress={onPress} disabled={loading}>
            {loading ? (
                <ActivityIndicator color="white" />
            ) : (
                <Text style={[styles.text, ghost && styles.ghostText]}>{title}</Text>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    ghost: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#007AFF',
    },
    ghostText: {
        color: '#007AFF',
    }
});

export default Button;