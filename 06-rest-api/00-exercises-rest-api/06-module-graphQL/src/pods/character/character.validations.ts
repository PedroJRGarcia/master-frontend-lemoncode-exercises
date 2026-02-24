import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    bestSentence: [Validators.required],
    status: [Validators.required],
    // episode: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
