import { useRecoilValue } from "recoil"
import { resultadoAmigoSecreto } from "../atom"

export const useResultadoSorteio = () => {
    return useRecoilValue(resultadoAmigoSecreto)
}