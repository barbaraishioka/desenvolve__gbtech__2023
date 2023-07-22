import { useRecoilValue } from "recoil"
import { listaParticipantesState } from "../atom"

export const useListaDeParticipantes = () => {
    return useRecoilValue(listaParticipantesState)
}