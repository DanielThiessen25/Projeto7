export default function Sugestao(props){
    return(
    <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/bad.vibes.memes.svg" />
                <div class="texto">
                  <div class="nome">{props.nome}</div>
                  <div class="razao">{props.razao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
            );
}