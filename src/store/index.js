import { createStore } from 'vuex'
//El nombre podria ser dirente pero por convencion se le pone el mismo del index pero en esta ocacion se le pondra uno diferente
import journal from '../modules/daybook/store/journal'

const store = createStore({
    modules: {
        // Lo de abajo es lo mismo que journal: journal pero como son iguales se deja asi como aparece abajo
        journal
    }
})

export default store