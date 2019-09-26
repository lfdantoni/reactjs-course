import { POKEMON_ACTIONS } from "../actions";

const INIT_STATE = {
    pokemons: [],
    pokemonDetail: {},
    loading: false
}

export default function pokemons(state = INIT_STATE, action) {
    switch (action.type) {
        case POKEMON_ACTIONS.GET_ALL:
            return {
                ...state,
                loading: action.payload.loading
            }
        case POKEMON_ACTIONS.GET_DETAIL:
            return {
                ...state,
                loading: action.payload.loading,
                detailId: action.payload.pokemonId,
                pokemon: null
            }
        case POKEMON_ACTIONS.GET_ALL_SUCCESS:
            return {
                ...state,
                loading: action.payload.loading,
                list: action.payload.pokemons
            }
        case POKEMON_ACTIONS.GET_DETAIL_SUCCESS:
            return {
                ...state,
                loading: action.payload.loading,
                detail: action.payload.pokemonDetail
            }
        case POKEMON_ACTIONS.GET_ALL_FAIL:
        case POKEMON_ACTIONS.GET_DETAIL_FAIL:
            return {
                ...state,
                loading: action.payload.loading,
                error: action.payload.error
            }
        default:
            return state;
    }
}