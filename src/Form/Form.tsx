import React, {
    useCallback,
    useEffect,
    useMemo,
    useReducer,
    useRef,
} from 'react';
import { Provider } from './context';
import formReducer from './reducer';
import * as actions from './actions';

type ValuesObject = {
    [key: string]: any;
};

type ErrorsObject = {
    [key: string]: string;
};

type PropsT = {
    children: any;
    id?: string;
    initialValues?: ValuesObject;
    onUnmount?: (data: { id: string; values: ValuesObject }) => any;
    onMount?: (datay: { id: string; values: ValuesObject }) => any;
    onUpdate?: (data: { id: string; values: ValuesObject }) => any;
    onSubmit: (data: { form: any; id: any; values: ValuesObject }) => any;
    validation?: (data: { values: ValuesObject }) => any;
};

// type FormContextT = {
//     errors?: any;
//     externalErrors?: any;
//     form: null | any;
//     id?: string;
//     isInvalid: (fieldName: string) => boolean;
//     isSubmitting: boolean;
//     isValidating: boolean;
//     onChange: (e: React.ChangeEvent) => any;
//     resetValues: () => void;
//     resetError: (fieldName: string) => void;
//     submit: () => any;
//     values: FormValuesT;
// };

type Props = {
    children: React.ReactChildren;
    id: string;
    initialValues: ValuesObject;
    onMount: (values: ValuesObject) => any;
    onUnmount: (values: ValuesObject) => any;
    validation: ({ values }: { values: ValuesObject }) => Promise<boolean>;
};

const Form = ({
    children,
    id,
    initialValues,
    onMount,
    onUnmount,
    validation,
}: Props) => {
    const form = useRef<any>();

    const initialState = {
        values: initialValues || {},
    };

    const [state, dispatch] = useReducer(formReducer, initialState);

    const submit = useCallback(() => {
        console.log('sending stuff');
    }, []);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
    }, []);

    const setValue = useCallback((property: string, value: any) => {
        dispatch(actions.setValue(property, value));
    }, []);

    const setErrors = useCallback((errors: ErrorsObject) => {
        dispatch(actions.setErrors(errors));
    }, []);

    const resetFieldError = useCallback((fieldName: string) => {
        dispatch(actions.resetFieldError(fieldName));
    }, []);

    const validate = useCallback(async () => {
        const { values } = state;

        if (typeof validation !== 'function') {
            return true;
        }

        dispatch(actions.validationInProgress(true));
        try {
            const errors = await validation({ values });
            if (!errors || Object.keys(errors).length === 0) {
                return true;
            }
            dispatch(actions.setErrors(errors));
            return false;
        } catch (error) {
            dispatch(actions.setExternalErrors(error.message));
            return false;
        } finally {
            dispatch(actions.validationInProgress(false));
        }
    }, [state, validation]);

    useEffect(() => {
        if (typeof onMount === 'function') {
            onMount({ id, state });
        }

        return () => {
            if (typeof onUnmount === 'function') {
                onUnmount({ id, state });
            }
        };
    }, [id, onMount, onUnmount, state]);

    const contextValue = useMemo(
        () => ({
            id,
            errors: state.errors,
            externalErrors: state.externalErrors,
            form: form.current,
            resetFieldError,
            setValue,
            submit,
            values: state.values,
            validate,
            // isInvalid: isInvalid,
            // onChange: this.onChange,
            // resetValues: this.resetValues,
            // resetError: this.resetError,
            // setValue: this.setValue,
            // submit: this.submit,
            // id,
            // isSubmitting,
            // isValidating,
            // values,
        }),
        [
            id,
            resetFieldError,
            setValue,
            state.errors,
            state.externalErrors,
            state.values,
            submit,
            validate,
        ]
    );

    return (
        <Provider value={contextValue}>
            <form id={id} ref={form} onSubmit={onSubmit}>
                {children}
            </form>
        </Provider>
    );
};

export default Form;
