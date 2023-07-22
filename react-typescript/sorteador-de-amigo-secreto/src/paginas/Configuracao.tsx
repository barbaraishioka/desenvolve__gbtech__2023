import Card from "../componentes/Card"
import Formulario from "../componentes/Formulario"
import ListaParticipantes from "../componentes/ListaParticipantes"
import Rodape from "../componentes/Rodape"

const Configuracao = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </section>
        </Card>
    )
}

export default Configuracao