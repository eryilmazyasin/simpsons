/* eslint-disable */
import React from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { Form, Field } from 'react-final-form';

// Validations
const required = value => !value && 'Lütfen boş bırakmayınız';

// Custom Components
const CustomTextInput = ({ placeholder, input, meta, label }) => (
  <View style={styles.container}>
    {label && <Text style={styles.labelTitle}>{label}</Text>}
    <TextInput style={styles.textInput} {...input} placeholder={placeholder} />
    {meta.error && meta.touched && (
      <Text style={styles.errorTitle}>{meta.error}</Text>
    )}
  </View>
);

const Button = ({ handleSubmit }) => (
  <TouchableOpacity
    style={[styles.button, styles.container]}
    onPress={handleSubmit}>
    <Text style={styles.buttonTitle}>Add Character</Text>
  </TouchableOpacity>
);

const CustomField = ({ name, placeholder, label, validate }) => {
  return (
    <Field
      {...{ name, validate }}
      render={({ input, meta }) => (
        <>
          <CustomTextInput {...{ input, meta, label, placeholder }} />
        </>
      )}
    />
  );
};

const initialValues = { fullname: '', job: '', about: '', image: '' };

const AddCharacterScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Form
        initialValues={initialValues}
        onSubmit={values => alert(JSON.stringify(values))}
        render={({ handleSubmit }) => {
          return (
            <>
              <CustomField
                name="fullname"
                validate={required}
                placeholder="Blahblah Blah"
                label="Name Surname"
              />
              <CustomField
                name="job"
                validate={required}
                placeholder="Blahoper"
                label="Job Title"
              />
              <CustomField
                name="about"
                validate={required}
                placeholder=""
                label="About Him/Her"
              />
              <CustomField
                name="image"
                placeholder="https://placeholder.com/150"
                label="Image Link"
              />

              <Button {...{ handleSubmit }} />
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default AddCharacterScreen;

const styles = {
  safeArea: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    margin: 12,
  },
  textInput: {
    borderBottomColor: '#787878',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    color: 'gray',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#143543',
    padding: 12,
    borderRadius: 8,
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
  },
  errorTitle: {
    fontSize: 13,
    color: 'red',
    marginTop: 8,
  },
  labelTitle: {
    marginBottom: 8,
    fontSize: 16,
  },
};
