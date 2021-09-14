import React from 'react'

import {
    SPORTS_QUESTION,
} from './actions';

/**
 * sportsIndexReducer
 * track the available questions for the Sports category
 * the initial state is set in QuizWrap
 */
export const sportsIndexReducer = (state = null, action) => {
    switch (action.type) {
        case SPORTS_QUESTION:
            return action.payload;
            break;
        default:
            return state;
    }
}