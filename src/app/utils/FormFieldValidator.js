// in case we go to settle out to get all field for validation from common field file
export const requiredCommonValdation = values => {
    const errors = {};
    // case to get all field what should beenn passing to validation 
    const requiredFields = ['email', 'password'];
    requiredFields.forEach(field => {
        if(values[field] === undefined) {
            errors[field] = 'Reqired'
        };
    })   
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    } 
    return errors
  }

  // to ciertain validation for some specific fields 
export const required = value => (value ? undefined : 'Required');
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const email = value => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
};