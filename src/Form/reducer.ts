import { produce } from 'immer';

type State = {
    [key: string]: any;
    errors?: {};
    values?: {};
};

export const initialState: State = Object.freeze({
    errors: undefined,
    externalErrors: undefined,
    // form: null | any,
    id: undefined,
    isInvalid: false,
    isSubmitting: false,
    isValidating: false,
    // onChange: () => {},
    // resetValues: () => void,
    // resetError: (fieldName: string) => void,
    // submit: () => any,
    values: {},
});

export default (state: State = initialState, action: any) =>
    produce(state, (draft: State) => {
        switch (action.type) {
            case 'SET_VALUES': {
                draft.values = action.payload;
                return;
            }

            case 'SET_VALUE': {
                if (typeof action.payload.value === 'undefined') {
                    delete draft.values[action.payload.name];
                } else {
                    draft.values[action.payload.name] = action.payload.value;
                }
                return;
            }

            case 'SET_VALIDATION_STATUS': {
                draft.isValidating = action.payload;
                if (action.payload === true) {
                    draft.externalErrors = null;
                    draft.errors = null;
                }
                return;
            }

            case 'RESET_FIELD_ERROR': {
                if (
                    typeof draft.errors !== 'undefined' &&
                    draft.errors !== null
                ) {
                    delete draft.errors[action.payload];
                }
                return;
            }

            case 'SET_SUBMISSION_STATUS': {
                draft.isSubmitting = action.payload || false;
                return;
            }
        }

        return initialState;
    });
