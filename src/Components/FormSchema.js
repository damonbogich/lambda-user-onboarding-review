import * as yup from 'yup';

export const formSchema = yup.object().shape({
    Name: yup.string().required("name is a required field"),
    Email: yup.string().email().required("must include your email"),
    Password: yup.string().required("Must include your password"),
    Terms: yup.boolean().oneOf([true], "please agree to the terms")
})