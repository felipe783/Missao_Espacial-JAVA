package trabalho.panca.MissaoEspacial.controller;
import trabalho.panca.MissaoEspacial.service.MissaoService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

// Controla toda e qualquer Requisaçãom, da o caminho da requisição
//São todas as rotas onde são dadas pelo Controller
//É o porteiro da as rotas

@RestController //Sabe que toda a classe é um controler
@RequestMapping("/missao")
public class MissaoController {

    //Injeção de independencia
    private final MissaoService missaoservice;

    public MissaoController(MissaoService missaoservice) {
        this.missaoservice = missaoservice;
    }
}
