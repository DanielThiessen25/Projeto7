export default function Usuario (props){
    return(
        <div class="usuario">
            <img src={props.avatar} />
            <div class="texto">
              <strong>{props.nome}</strong>
              {props.descricao}
            </div>
          </div>


    );
}