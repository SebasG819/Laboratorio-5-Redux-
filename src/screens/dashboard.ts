import Card, {Attribute} from "../components/card/card";
import { getPerson } from "../store/actions";
import { addObserved, appState, dispatch } from "../store/index";

class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        addObserved(this)
    }
    async connectedCallback(){
        const action = await getPerson();
        dispatch(action)
    }

    render(){
        appState.Person.forEach((data:any) => {
            const StarWarCard = this.ownerDocument.createElement("my-card") as Card;
            StarWarCard.setAttribute(Attribute.name, data.name);
            StarWarCard.setAttribute(Attribute.gender, data.gender);
            this.shadowRoot?.appendChild(StarWarCard)
        })
    }
}

customElements.define("app-dashboard", Dashboard)