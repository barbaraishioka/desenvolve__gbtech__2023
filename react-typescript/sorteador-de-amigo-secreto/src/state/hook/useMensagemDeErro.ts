import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const useMensagemDeErro = () => {
    const mensagem = useRecoilValue(erroState)
    return mensagem;
}