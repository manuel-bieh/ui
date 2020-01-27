export type ValuesObject = {
    [key: string]: any;
};

export type ErrorsObject = {
    [key: string]: undefined | string | boolean;
};

export type FormProps = {
    id?: string;
    initialValues?: ValuesObject;
    onMount?: (values: ValuesObject) => any;
    onUnmount?: (values: ValuesObject) => any;
    onUpdate?: (any: any) => any;
    onSubmit: (TEMP: any) => void;
    validation?: ({
        values,
    }: {
        values: ValuesObject;
    }) => Promise<ErrorsObject> | Promise<boolean> | boolean;
};

export type FormState = {
    [key: string]: any;
    errors?: any;
    externalErrors?: any;
    isSubmitting?: boolean;
    isValidating?: boolean;
    values?: {};
};
