type Values = {
    [key: string]: any;
};

export const setValue = (name: string, value: any) => ({
    type: 'SET_VALUE',
    payload: {
        name,
        value,
    },
});

export const setValues = (values: Values) => ({
    type: 'SET_VALUES',
    payload: values,
});

export const validationInProgress = (isValidating: boolean) => ({
    type: 'SET_VALIDATION_STATUS',
    payload: isValidating,
});

export const resetError = (fieldName: string) => ({
    type: 'RESET_FIELD_ERROR',
    payload: fieldName,
});

export const setErrors = (errors: any) => ({
    type: 'SET_ERRORS',
    payload: errors,
});

export const setExternalErrors = (errors: any) => ({
    type: 'SET_EXTERNAL_ERRORS',
    payload: errors,
});

export const setSubmissionStatus = (isSubmitting: boolean) => ({
    type: 'SET_SUBMISSION_STATUS',
    payload: isSubmitting,
});
