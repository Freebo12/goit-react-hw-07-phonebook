import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from 'components/Redux/operations';
import { Field, Form, BtnSubmit, ErrorMessage } from './PhoneBook.styled';

const PhoneBookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(4, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  filter: '',
});

export const PhoneBook = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '', filter: '' }}
        validationSchema={PhoneBookSchema}
        onSubmit={(values, actions) => {
          dispatch(addContact({ ...values }));
          console.log(values);
          actions.resetForm();
        }}
      >
        <Form>
          <label htmlFor="name" type="text" name="name"></label>
          <Field
            htmlFor="name"
            placeholder="Name"
            id="name"
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="number" type="tel" name="number" id="number"></label>
          <Field
            htmlFor="number"
            id="number"
            placeholder="Number"
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
          <BtnSubmit type="submit">Add Contacts</BtnSubmit>
        </Form>
      </Formik>
    </>
  );
};
