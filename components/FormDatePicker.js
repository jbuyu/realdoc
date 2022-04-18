 
 import DatePicker from 'react-datepicker'
 import 'react-datepicker/dist/react-datepicker.css'
 import {  Field } from "formik";
 const FormDatePicker = (props) => {
    return (
      <Field name="dateOfBirth">
        {({ field, meta, form: { setFieldValue } }) => {
          return (
            <DatePicker
            className="font-sm rounded-md bg-gray-200 p-2 text-sm text-black outline-none"
              {...field}
              selected={field.value || null}
              onChange={(val) => {
                setFieldValue(field.name, val);
              }}
            />
          );
        }}
      </Field>
    );
  };
  export default FormDatePicker;