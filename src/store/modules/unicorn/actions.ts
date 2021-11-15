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
        return new Array<Unicorn>();
    },

    /**
     * Action that initializes the state when app is loaded
     * @param commit
     */
    [UNICORN_STORE.ACTIONS.INITIALIZE_STORE]({commit}) {
        let unicorn1 = new Unicorn('Pénélope', 'Elle va vite', '../assets/img/dark_unicorn.jpg');
        let unicorn2 = new Unicorn('Gertrude', 'Elle fait des calins', '../assets/img/dark_unicorn.jpg');
        let unicorn3 = new Unicorn('Gertrude', 'Elle fait des calins', '../assets/img/dark_unicorn.jpg');
        let unicorn4 = new Unicorn('Gertrude', 'Elle fait des calins', '../assets/img/dark_unicorn.jpg');
        commit(UNICORN_STORE.MUTATIONS.ADD_UNICORN, unicorn1);
        commit(UNICORN_STORE.MUTATIONS.ADD_UNICORN, unicorn2);
        commit(UNICORN_STORE.MUTATIONS.ADD_UNICORN, unicorn3);
        commit(UNICORN_STORE.MUTATIONS.ADD_UNICORN, unicorn4);
    },

}
