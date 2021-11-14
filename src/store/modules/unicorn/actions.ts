import { Http } from "../../../services/http.service";
import {IActions} from "./interfaces";
import { UNICORN_STORE } from '../../constants';
import { Unicorn } from "../../../entities/unicorn";

export const actions: IActions = {


    /**
     * The RETURN_UNICORNS action, will return unicorns from database
     * @param commit
     */
    [UNICORN_STORE.ACTIONS.RETURN_UNICORNS]({commit}) {
    },

    /**
     * Action that initializes the state when app is loaded
     * @param commit
     */
    [UNICORN_STORE.ACTIONS.INITIALIZE_STORE]({commit}) {
        let unicorn1 = new Unicorn('Pénélope', 'Elle va vite', 'src/assets/img/dark_unicorn.jpg');
        let unicorn2 = new Unicorn('Gertrude', 'Elle fait des calins', 'src/assets/img/dark_unicorn.jpg');
        commit(UNICORN_STORE.MUTATIONS.ADD_UNICORN, unicorn1);
        commit(UNICORN_STORE.MUTATIONS.ADD_UNICORN, unicorn2);
    },

}
