import React, {
    useCallback,
    useEffect,
    useMemo,
    useReducer,
    useRef,
} from 'react';
import { Provider } from './context';
// import formReducer, { initialState } from './reducer';
import formReducer from './reducer';
import * as actions from './actions';
import { ErrorsObject, FormState, FormProps, ValuesObject } from './types';

export const initialState: FormState = Object.freeze({
    errors: undefined,
    externalErrors: undefined,
    isSubmitting: false,
    isValidating: false,
    values: {},
});

const Form: React.FC<FormProps> = ({
    children,
    id,
    initialValues = {},
    onMount,
    onUnmount,
    onUpdate,
    onSubmit,
    validation,
}) => {
    const form = useRef<any>(null);
    const isMounted = useRef(null);

    const [state, dispatch] = useReducer(formReducer, {
        ...initialState,
        values: initialValues,
    });

    const setValue = useCallback((property: string, value: any) => {
        dispatch(actions.setValue(property, value));
    }, []);

    const setValues = useCallback((values) => {
        dispatch(actions.setValues(values));
    }, []);

    const setErrors = useCallback((errors: ErrorsObject) => {
        dispatch(actions.setErrors(errors));
    }, []);

    const setExternalErrors = useCallback((errors: ErrorsObject) => {
        dispatch(actions.setExternalErrors(errors));
    }, []);

    const setSubmissionStatus = useCallback((isSubmitting: boolean) => {
        dispatch(actions.setSubmissionStatus(isSubmitting));
    }, []);

    const validationInProgress = useCallback((isValidating: boolean) => {
        dispatch(actions.validationInProgress(isValidating));
    }, []);

    const resetError = useCallback((fieldName: string) => {
        dispatch(actions.resetError(fieldName));
    }, []);

    const resetValues = useCallback(
        (forceEmpty) => {
            // forceEmpty makes sure all values are completely nulled instead of being set to their initialValues
            setValues(forceEmpty ? {} : initialValues);
        },
        [initialValues, setValues]
    );

    const isInvalid = useCallback(
        (fieldName: string) =>
            (state.errors && state.errors[fieldName]) || false,
        [state.errors]
    );

    const validate = useCallback(async () => {
        if (typeof validation !== 'function') {
            return true;
        }

        validationInProgress(true);
        try {
            const errors = await validation({ values: state.values });
            if (!errors || Object.keys(errors).length === 0) {
                return true;
            }

            setErrors(errors);
            return false;
        } catch (error) {
            setExternalErrors(error.message);
            return false;
        } finally {
            validationInProgress(false);
        }
    }, [
        setErrors,
        setExternalErrors,
        state.values,
        validation,
        validationInProgress,
    ]);

    const submit = useCallback(async () => {
        if (typeof onSubmit !== 'function' || state.isSubmitting === true) {
            return;
        }
        const isValid = await validate();

        if (!isValid) {
            return;
        }

        setSubmissionStatus(true);
        try {
            await onSubmit({
                errors: state.errors,
                externalErrors: state.externalErrors,
                form,
                id,
                initialValues,
                resetValues,
                setValue,
                setValues,
                values: state.values,
            });
        } catch (error) {
            console.error('error', error);
            setExternalErrors(error.message);
        } finally {
            setSubmissionStatus(false);
        }
    }, [
        id,
        initialValues,
        onSubmit,
        resetValues,
        setExternalErrors,
        setSubmissionStatus,
        setValue,
        setValues,
        state.errors,
        state.externalErrors,
        state.isSubmitting,
        state.values,
        validate,
    ]);

    const submitHandler = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log('SUBMITTED');
            submit();
        },
        [submit]
    );

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            e.persist();
            const { name, type, value } = e.target;

            if (!name && process.env.NODE_ENV === 'development') {
                console.warn(
                    `Change event with value '${value}' happened for an element without name prop. This is probably by mistake.`
                );
            }

            // TODO: figure out if this is really such a good idea
            resetError(name);

            // TODO: make this more flexible (see the work that has been done in array-parser.js for more)
            if (e.target instanceof HTMLInputElement && type === 'checkbox') {
                const { checked } = e.target;
                const values = state.values;

                // Changed field name does not yet exist. We're setting it as string here
                if (!values[name] && checked) {
                    return setValue(name, value || 'on');
                }

                // Changed field name exists and is the only value, thus string or boolean
                if (
                    values[name] &&
                    (typeof values[name] === 'string' ||
                        typeof values[name] === 'boolean')
                ) {
                    return setValue(
                        name,
                        checked
                            ? [values[name]].concat(value || 'on')
                            : undefined
                    );
                }

                // Changed field name already exists in values
                if (Array.isArray(values[name])) {
                    if (checked) {
                        const addCheckedValue = (values: any) =>
                            (Array.isArray(values[name])
                                ? values[name]
                                : []
                            ).concat(value || 'on');

                        return setValue(name, addCheckedValue(values));
                    }

                    const removeUncheckedValue = (values: any) =>
                        (Array.isArray(values[name])
                            ? values[name]
                            : []
                        ).filter((item: any) => item !== value);

                    const nextValues = removeUncheckedValue(values);

                    return setValue(
                        name,
                        nextValues.length === 1 ? nextValues[0] : nextValues
                    );
                }
            }

            return setValue(name, value);
        },
        [resetError, setValue, state.values]
    );

    // set isMounted on unmount _before_ the onUnmount cleanup effect function is run
    useEffect(() => () => (isMounted.current = false), []);

    // run each onMount/onUnmount only once per component lifetime
    useEffect(() => {
        const params = {
            errors: state.errors,
            externalErrors: state.externalErrors,
            form,
            id,
            initialValues,
            resetValues,
            setValue,
            setValues,
            values: state.values,
        };

        if (typeof onMount === 'function' && isMounted.current === null) {
            onMount(params);
        }

        return () => {
            if (
                typeof onUnmount === 'function' &&
                isMounted.current === false
            ) {
                onUnmount(params);
            }
        };
    }, [
        id,
        initialValues,
        onMount,
        onUnmount,
        resetValues,
        setValue,
        setValues,
        state.errors,
        state.externalErrors,
        state.values,
    ]);

    // set isMounted to true on mount _after_ the onMount effect function is run
    useEffect(() => {
        isMounted.current = true;
    }, []);

    useEffect(() => {
        if (typeof onUpdate === 'function') {
            onUpdate({
                errors: state.errors,
                externalErrors: state.externalErrors,
                form,
                id,
                initialValues,
                resetValues,
                setValue,
                setValues,
                values: state.values,
            });
        }
    }, [
        id,
        initialValues,
        onUpdate,
        resetValues,
        setValue,
        setValues,
        state.errors,
        state.externalErrors,
        state.values,
    ]);

    const contextValue = useMemo(
        () => ({
            id,
            isInvalid,
            errors: state.errors,
            externalErrors: state.externalErrors,
            // form: form.current,
            initialValues,
            isSubmitting: state.isSubmitting,
            isValidating: state.isValidating,
            onChange,
            resetError,
            resetValues,
            setValue,
            submit,
            validate,
            values: state.values,
        }),
        [
            id,
            initialValues,
            isInvalid,
            onChange,
            resetError,
            resetValues,
            setValue,
            state.errors,
            state.externalErrors,
            state.isSubmitting,
            state.isValidating,
            state.values,
            submit,
            validate,
        ]
    );

    return (
        <Provider value={contextValue}>
            <form id={id} ref={form} onSubmit={submitHandler}>
                {children}
            </form>
        </Provider>
    );
};

export default Form;
