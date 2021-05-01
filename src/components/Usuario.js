export default function Usuario (){
    return(
        <div class="usuario">
            <img src={promps.avatar} />
            <div class="texto">
              <strong>{promps.nome}</strong>
              {promps.descricao}
            </div>
          </div>


    );
}