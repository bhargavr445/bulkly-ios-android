import React, { useEffect, useState } from "react";
import { Formik } from 'formik'
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';
 import * as Yup from "yup";
import axiosInstance from "../../interceptors/req-interceptor";
import { emailAvailabilityCheckUrl } from "../../constants/api-constants";
import { useDebounce } from "../../hooks/useDebounce";



export default function ContactForm() {

    const [emailCheckInProgress, setEmailCheckInProgress] = useState(false);

    const checkIfEmailExists = async (emailId) => {
        setEmailCheckInProgress(true);
        const response = await axiosInstance.post(emailAvailabilityCheckUrl, { emailId });
        setEmailCheckInProgress(false);
        return response;
    }

    const contactFormSchema = Yup.object().shape({
        name: Yup.string()
            .required('This is a required Field'),
        email: Yup.string()
            .email('Invalid email format')
            .required('This is a required Field')
            .test('email_check', 'This email exists', async (value, _context) => {
                const resp = await checkIfEmailExists(value);
                return !resp.data;
            }),
        subject: Yup.string()
            .required('This is a required Field')
    })
    return (
        <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validationSchema={contactFormSchema}
            
            onSubmit={(values) => console.log(values)}>
            {({ handleBlur, handleChange, handleSubmit, values, errors, setFieldError,  }) => {
                const debouncedEmail = useDebounce(values.email, 500);
                useEffect(() => {
                }, [debouncedEmail])
                return (<View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Name *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Your name"
                            onBlur={handleBlur('name')}
                            onChangeText={handleChange('name')}
                            placeholderTextColor="#94A3B8"
                            value={values.name}
                        />
                        {errors.name ? <Text>{errors.name}</Text>: null}
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Email *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="your.email@example.com"
                            onBlur={handleBlur('email')}
                            onChangeText={handleChange('email')}
                            placeholderTextColor="#94A3B8"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={values.email}
                        />
                        {emailCheckInProgress ? <Text>checking</Text> : errors.email ? <Text>{errors.email}</Text>: null}
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Subject *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="How can we help?"
                            onBlur={handleBlur('subject')}
                            onChangeText={handleChange('subject')}
                            placeholderTextColor="#94A3B8"
                            value={values.subject}
                        />
                        {errors.subject ? <Text>{errors.subject}</Text>: null}
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Message</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Tell us more about your inquiry..."
                            onBlur={handleBlur('message')}
                            onChangeText={handleChange('message')}
                            placeholderTextColor="#94A3B8"
                            multiline
                            textAlignVertical="top"
                        />
                    </View>

                    <Pressable style={styles.submitBtn} onPress={handleSubmit}>
                        <Text style={styles.submitText}>Send Message</Text>
                    </Pressable>
                </View>)
                }}

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