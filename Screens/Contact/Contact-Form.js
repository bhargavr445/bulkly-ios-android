import React from "react";
import { Formik } from 'formik'
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native'

export default function ContactForm() {
    return (
        <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            onSubmit={(values) => console.log(values)}>
            {({ handleBlur, handleChange, handleSubmit, values }) => (
                <View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Name *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Your name"
                            onBlur={handleBlur('name')}
                            onChange={handleChange('name')}
                            placeholderTextColor="#94A3B8"
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Email *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="your.email@example.com"
                            onBlur={handleBlur('email')}
                            onChange={handleChange('email')}
                            placeholderTextColor="#94A3B8"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Subject *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="How can we help?"
                            onBlur={handleBlur('subject')}
                            onChange={handleChange('subject')}
                            placeholderTextColor="#94A3B8"
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Message</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Tell us more about your inquiry..."
                            onBlur={handleBlur('message')}
                            onChange={handleChange('message')}
                            placeholderTextColor="#94A3B8"
                            multiline
                            textAlignVertical="top"
                        />
                    </View>

                    <Pressable style={styles.submitBtn} onPress={handleSubmit}>
                        <Text style={styles.submitText}>Send Message</Text>
                    </Pressable>
                </View>
            )}

        </Formik>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 44,
        borderWidth: 1,
        borderColor: "#DDE8F3",
        borderRadius: 10,
        paddingHorizontal: 12,
        fontSize: 16,
        backgroundColor: "#FFFFFF",
        color: "#0F172A",
        width: "100%"
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: "#334155",
        marginBottom: 2,
    },
    field: {
        marginBottom: 18,
    },
    textArea: {
        height: 80,
        paddingTop: 14,
        paddingBottom: 14,
    },

    submitBtn: {
        marginTop: 10,
        height: 40,
        borderRadius: 999,
        backgroundColor: "#0B1526",
        alignItems: "center",
        justifyContent: "center",

        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 10 },
        elevation: 4,
    },

    submitText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "400",
        letterSpacing: 0.3,
    },
});