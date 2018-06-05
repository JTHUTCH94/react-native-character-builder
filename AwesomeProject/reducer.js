import { ENTER_SCREEN, CREATE_FORM, CREATE_CHARACTER, GET_CHARACTERS, DELETE_CHARACTER, SET_NAME, SET_RACE, SET_CLASSIFICATION, SET_WEAPON, UPDATE_CHARACTER, SET_UPDATE } from './actions';

const initialState = {
    characters: [],
    display: 'enter-screen',
    name: '',
    race: '',
    classification: '',
    weapon: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ENTER_SCREEN:
            return Object.assign({}, state, {
                display: 'form'
            });
        case CREATE_FORM:
            return Object.assign({}, state, {
                display: 'form',
                name: '',
                race: '',
                classification: '',
                weapon: ''
            });
        case CREATE_CHARACTER:
        return Object.assign({}, state, {
            display: 'new-character',
            name: action.newCharacter.name,
            race: action.newCharacter.race,
            classification: action.newCharacter.classification,
            weapon: action.newCharacter.weapon
        });
        case SET_NAME:
        return Object.assign({}, state, {
            name: action.name
        });
        case SET_RACE:
        return Object.assign({}, state, {
            race: action.race
        });
        case SET_CLASSIFICATION:
        return Object.assign({}, state, {
            classification: action.classification
        });
        case SET_WEAPON:
        return Object.assign({}, state, {
            weapon: action.weapon
        });
        case SET_UPDATE:
        return Object.assign({}, state, {
            display: 'update',
            name: action.character.name,
            race: action.character.race,
            classification: action.character.classification,
            weapon: action.character.weapon,
            id: action.character.id
        });
        case GET_CHARACTERS:
        return Object.assign({}, state, {
            characters: action.characters,
            display: 'characters'
        });
        case DELETE_CHARACTER:
        return Object.assign({}, state, {
            characters: state.characters.filter(character => character.id !== action.id)
        });
        case UPDATE_CHARACTER:
        console.log(action.updatedCharacter.name);
        return Object.assign({
            display: 'updated-character',
            name: action.updatedCharacter.name,
            race: action.updatedCharacter.race,
            classification: action.updatedCharacter.classification,
            weapon: action.updatedCharacter.weapon
        });
        default:
            return state;
}};