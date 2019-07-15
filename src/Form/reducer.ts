import { produce } from 'immer';
import { FormState } from './types';

export default (state: FormState = {}, action: any) =>
    produce(state, (draft: FormState) => {
        console.log({ action });
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
                    draft.externalErrors = undefined;
                    draft.errors = undefined;
                    // TODO: Write tests and check if this works even if they're not set yet
                    // delete draft.externalErrors;
                    // delete draft.errors;
                }
                return;
            }

            case 'RESET_FIELD_ERROR': {
                if (
                    typeof draft.errors !== 'undefined' &&
                    draft.errors !== null
                ) {
                    delete draft.errors[action.payload];
                    // No more errors left? Delete errors property completely
                    if (Object.keys(draft.errors).length === 0) {
                        delete draft.errors;
                    }
                }
                return;
            }

            case 'SET_SUBMISSION_STATUS': {
                draft.isSubmitting = action.payload || false;
                return;
            }

            case 'SET_ERRORS': {
                draft.errors = action.payload;
                return;
            }

            case 'RESET_ERRORS': {
                delete draft.errors;
                return;
            }
        }

        return state;
    });
