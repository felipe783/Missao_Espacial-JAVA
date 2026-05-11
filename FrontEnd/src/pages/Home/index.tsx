import "./style.css";
import { useTypingEffect } from "../../hooks/useTypingEffect";

function Home() {
  const { displayText, showCursor } = useTypingEffect({
    text: 'Espacial',
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,      // Pausa Final Digitação
    pauseAfterDelete: 1000,   // Pausa Depois de Deletar
    repeat: true,
  })

  return (
    <>

      <div className="main-title">
        <span id="title-mission">Missão</span>
        <span id="title-special">
          {displayText}
          {showCursor && <span className="cursor">|</span>}
        </span>
        <h1>
          No ano de 2089, um erro em um laboratório criou um psicopata chamdo Ederson🚀.Ele penseu em um onde controla astronautas, foguetes e missões espaciais, além de calcular tempo e custos das viagens. Dizem que, se alguém cancelar uma missão de madrugada, o sistema toca funk espacial nos alto-falantes 😭🔥, e pediu pros seus "estagarios" vulgo alunos criarem ele
        </h1>
      </div>

      <div className="container-cards">
        <div className="card">
          <h2>Astronautas</h2>
          <p>Gerencie os astronautas da missão.</p>
        </div>

        <div className="card">
          <h2>Equipes</h2>
          <p>Controle as equipes espaciais.</p>
        </div>

        <div className="card">
          <h2>Foguetes</h2>
          <p>Veja informações dos foguetes.</p>
        </div>

        <div className="card">
          <h2>Missões</h2>
          <p>Acompanhe as missões ativas.</p>
        </div>
      </div>
      <div>
        <h1>Repositorio GitHub</h1>
      </div>
    </>
  );
}

export default Home;
