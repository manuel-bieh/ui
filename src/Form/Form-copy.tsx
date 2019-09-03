import * as React from 'react';
import { Provider } from './context';
import formReducer from './reducer';
import * as actions from './actions';

type FormValuesT = {
    [key: string]: any;
};

type PropsT = {
    children: any;
    id?: string;
    initialValues?: FormValuesT;
    onUnmount?: (data: { id: string; values: any }) => any;
    onMount?: (datay: { id: string; values: any }) => any;
    onUpdate?: (data: { id: string; values: any }) => any;
    onSubmit: (data: { form: any; id: any; values: any }) => any;
    validation?: (any) => any;
};

type StateT = {
    [key: string]: any;
    errors?: any;
    isSubmitting: boolean;
    isValidating: boolean;
    values: FormValuesT;
};

type FormContextT = {
    errors?: any;
    externalErrors?: any;
    form: null | any;
    id?: string;
    isInvalid: (fieldName: string) => boolean;
    isSubmitting: boolean;
    isValidating: boolean;
    onChange: (e: React.ChangeEvent) => any;
    resetValues: () => void;
    resetError: (fieldName: string) => void;
    submit: () => any;
    values: FormValuesT;
};

type ValuesObject = {
    [key: string]: any;
};

class FormClass extends React.PureComponent<PropsT, StateT> {
    state = {
        errors: null,
        isSubmitting: false,
        isValidating: false,
        externalErrors: null,
        values: this.props.initialValues || {},
    };

    componentDidMount() {
        this.setState(
            () => ({
                values: this.props.initialValues || {},
            }),
            this.onMount
        );
    }

    componentDidUpdate(prevProps: PropsT, prevState: StateT) {
        const { id, onUpdate } = this.props;
        const { values } = this.state;
        if (values !== prevState.values && typeof onUpdate === 'function') {
            onUpdate({ id, values });
        }
    }

    componentWillUnmount() {
        this.onUnmount();
    }

    form: { current: null | HTMLFormElement } = React.createRef();

    isInvalid = (fieldName: string) =>
        (this.state.errors && this.state.errors[fieldName]) || false;

    resetError = (fieldName: string) => {
        this.setState((state) => {
            const errors = state.errors ? { ...state.errors } : {};
            delete errors[fieldName];
            return {
                errors: Object.keys(errors || {}).length === 0 ? null : errors,
            };
        });
    };

    setErrors = (errors: { [string]: string }) => {
        this.setState(() => ({ errors }));
    };

    setValue = (property: string, value: any) => {
        this.setState(({ values }) => ({
            values: {
                ...values,
                [property]: value,
            },
        }));
    };

    onMount = () => {
        const { id, onMount } = this.props;
        const { values } = this.state;

        if (typeof onMount === 'function') {
            onMount({ id, values });
        }
    };

    onUnmount = () => {
        const { id, onUnmount } = this.props;
        const { values } = this.state;

        if (typeof onUnmount === 'function') {
            onUnmount({ id, values });
        }
    };

    onChange = (e: React.ChangeEvent) => {
        e.persist();
        const {
            target: { checked, name, type, value },
        } = e;

        if (!name && process.env.NODE_ENV === 'development') {
            console.warn(
                `Change event with value '${value}' happened for an element without name prop. This is probably by mistake.`
            );
        }

        // TODO: figure out if this is really such a good idea
        this.resetError(name);

        // TODO: make this more flexible (see the work that has been done in array-parser.js for more)
        if (type === 'checkbox') {
            if (!value || value === 'on') {
                return this.setState((state) => ({
                    values: {
                        ...state.values,
                        [name]: checked ? 'on' : undefined,
                    },
                }));
            }

            return this.setState((state) => ({
                values: {
                    ...state.values,
                    [name]: (checked
                        ? (Array.isArray(state.values[name])
                              ? state.values[name]
                              : []
                          ).concat(value)
                        : (Array.isArray(state.values[name])
                              ? state.values[name]
                              : []
                          ).filter((item) => item !== value)
                    ).reduce(
                        (acc, item) => (item ? (acc || []).concat(item) : acc),
                        undefined
                    ),
                },
            }));
        }

        // TODO: untested as of 2019-02-01
        this.setValue(name, value);

        // this.setState((state) => ({
        //     values: {
        //         ...state.values,
        //         [name]: value,
        //     },
        // }));
    };

    onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.submit();
    };

    validate = async () => {
        const { validation } = this.props;
        const { values } = this.state;

        if (typeof validation !== 'function') {
            return true;
        }

        this.setState(() => ({
            isValidating: true,
            errors: null,
            externalErrors: null,
        }));
        try {
            const errors = await validation({ values });
            if (!errors || Object.keys(errors).length === 0) {
                return true;
            }
            this.setErrors(errors);
            return false;
        } catch (error) {
            console.error('error:', error);
            this.setState(() => ({
                externalErrors: error.message,
            }));
        } finally {
            this.setState(() => ({ isValidating: false }));
        }
    };

    submit = async () => {
        const { id, onSubmit } = this.props;
        const { isSubmitting, values } = this.state;
        const form = this.form.current;

        if (typeof onSubmit !== 'function' || isSubmitting === true) {
            return;
        }

        const isValid = await this.validate();

        if (!isValid) {
            return;
        }

        this.setState(() => ({ isSubmitting: true }));
        try {
            await onSubmit({ form, id, resetValues: this.resetValues, values });
        } catch (error) {
            console.error('error', error);
            this.setState(() => ({
                externalErrors: error.message,
            }));
        } finally {
            this.setState(() => ({ isSubmitting: false }));
        }
    };

    resetValues = (forceEmpty) => {
        // forceEmpty makes sure all values are completely nulled instead of set to their initialValues
        this.setState(() => ({
            values: forceEmpty ? {} : this.props.initialValues,
        }));
    };

    render() {
        const { children, id } = this.props;
        const {
            errors,
            isSubmitting,
            isValidating,
            externalErrors,
            values,
        } = this.state;

        const context: FormContextT = {
            form: this.form.current,
            isInvalid: this.isInvalid,
            onChange: this.onChange,
            resetValues: this.resetValues,
            resetError: this.resetError,
            setValue: this.setValue,
            submit: this.submit,
            errors,
            externalErrors,
            id,
            isSubmitting,
            isValidating,
            values,
        };

        return (
            <Provider value={context}>
                <form
                    id={this.props.id}
                    ref={this.form}
                    onSubmit={this.onSubmit}
                >
                    {typeof children === 'function'
                        ? children(context)
                        : children}
                </form>
            </Provider>
        );
    }
}

// export default React.memo(Form);
export default FormClass;
