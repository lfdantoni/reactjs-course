export const POKEMON_ACTIONS = {
    GET_ALL: 'GET_ALL',
    GET_ALL_SUCCESS: 'GET_ALL_SUCCESS',
    GET_ALL_FAIL: 'GET_ALL_FAIL',
    GET_DETAIL: 'GET_DETAIL',
    GET_DETAIL_SUCCESS: 'GET_DETAIL_SUCCESS',
    GET_DETAIL_FAIL: 'GET_DETAIL_FAIL'
}

export const getAllPokemons = () => {
    return {
        type: POKEMON_ACTIONS.GET_ALL,
        payload: {
            loading: true
        }
    }
}

export const getAllPokemonsFail = (error) => {
    return {
        type: POKEMON_ACTIONS.GET_ALL_FAIL,
        payload: {
            loading: false,
            error
        }
    }
}

export const getAllPokemonsSuccess = (pokemons) => {
    return {
        type: POKEMON_ACTIONS.GET_ALL_SUCCESS,
        payload: {
            loading: false,
            pokemons
        }
    }
}

export const getPokemonDetail = (pokemonId) => {
    return {
        type: POKEMON_ACTIONS.GET_DETAIL,
        payload: {
            loading: true,
            pokemonId
        }
    }
}

export const getPokemonDetailFail = (error) => {
    return {
        type: POKEMON_ACTIONS.GET_DETAIL_FAIL,
        payload: {
            loading: false,
            error
        }
    }
}

export const getPokemonDetailSuccess = (pokemonDetail) => {
    return {
        type: POKEMON_ACTIONS.GET_DETAIL_SUCCESS,
        payload: {
            loading: false,
            pokemonDetail
        }
    }
}