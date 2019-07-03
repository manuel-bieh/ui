import { produce } from 'immer';

type State = { [key: string]: any };

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

export default (state: any = initialState, action: any) =>
    produce(state, (draft: State) => {
        switch (action.type) {
            case 'SET_VALUES': {
                draft.values = action.payload;
                return;
            }

            case 'SET_VALUE': {
                draft.values[action.payload.name] = action.payload.value;
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
                delete draft.errors[action.payload];
                return;
            }
        }

        return initialState;
    });
