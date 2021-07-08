export const initialState = {
    user: null,
    playlists:[],
    Spotify:null,
    playing: false,
    item:null,
    //token: 'BQAOPq8j2K7vCkrLf_dmvMwOyDJL1dMVcRjaeqLn0n2I0fZe_czz_resGaA2PHdawpISh2kBiCHvP5G2t2UL7jNVdqdOIpI6Gh005d59dA-ltRjQjlr4aXKaf4dhWhw8G8j93Bi9Y6nqHwxfDw1NxK8n3I1CCjup6nFUn9SRxSlrQIzVKAc',

};
const reducer = (state, action)=> {
console.log (action);

switch(action.type){
    case 'SET_USER':
        return{
            ...state,
            user: action.user,
        };
        case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        };

        case 'SET_PLAYLISTS':
        return {
            ...state, 
            playlists: action.playlists

        };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }

}

export default reducer;