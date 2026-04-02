package trabalho.panca.MissaoEspacial.controller;
import org.springframework.web.bind.annotation.*;
import trabalho.panca.MissaoEspacial.service.EquipeService;
import trabalho.panca.MissaoEspacial.model.Equipe;
import java.util.List;

@RestController
@RequestMapping("/equipes")
public class EquipeController {

    private final EquipeService equipeService;
    public EquipeController(EquipeService equipeservice){
        this.equipeService = equipeservice;
    }


    @GetMapping
    public List<Equipe> getAll(){return equipeService.getAll_Equipe();}


    @PostMapping
    public Equipe create(@RequestBody Equipe equipe){return equipeService.saveEquipe(equipe);}
}
