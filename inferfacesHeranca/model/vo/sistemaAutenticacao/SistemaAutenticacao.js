export class SistemaAutenticacao {
    static login(pUsuario, pSenha) {
        if (SistemaAutenticacao.isAutenticavel(pUsuario)) {
            return pUsuario.autenticar(pSenha);    
        }

        return false;
    }

    static isAutenticavel(pUsuario) {
        //verifica se a chave autenticar existe dentro do objeto pUsuario
        return "autenticar" in pUsuario && pUsuario.autenticar instanceof Function;
    }
}