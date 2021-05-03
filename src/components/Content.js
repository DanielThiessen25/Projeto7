import Story from "./Story";
import Post from "./Post";
import Usuario from "./Usuario";
import Sugestao from "./Sugestao";

export default function Content() {

const storiesArray = [{nome: "9gag", imagem: "assets/img/9gag.svg"}, {nome: "meowed", imagem: "assets/img/meowed.svg"}, {nome: "barked", imagem: "assets/img/barked.svg"},
{nome: "nathanwpylestrangeplanet", imagem: "assets/img/nathanwpylestrangeplanet.svg"}, {nome: "wawawicomics", imagem: "assets/img/wawawicomics.svg"}, 
{nome: "respondeai", imagem: "assets/img/respondeai.svg"},{nome: "filomoderna", imagem: "assets/img/filomoderna.svg"}, {nome: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg"}];

const postsArray = [{ avatar:"assets/img/meowed.svg", nome:"meowed", foto:"assets/img/gato-telefone.svg", curtida:"assets/img/respondeai.svg", curtidaNome:"respondeai"},
 {avatar:"assets/img/barked.svg", nome:"barked", foto:"assets/img/dog.svg", curtida:"assets/img/adorable_animals.svg", curtidaNome:"adorable_animals" },
 { avatar:"assets/img/meowed.svg", nome:"meowed", foto:"assets/img/gato-telefone.svg", curtida:"assets/img/respondeai.svg", curtidaNome:"respondeai"},
 {avatar:"assets/img/barked.svg", nome:"barked", foto:"assets/img/dog.svg", curtida:"assets/img/adorable_animals.svg", curtidaNome:"adorable_animals" }
];

const sugestaoArray = [{nome: "bad.vibes.memes", foto: "assets/img/bad.vibes.memes.svg", razao: "Segue você"}, {nome: "chibirdart", foto: "assets/img/chibirdart.svg", razao: "Segue você"},
{nome: "razoesparaacreditar", foto: "assets/img/razoesparaacreditar.svg", razao: "Novo no Instagram"}, {nome: "adorable_animals", foto: "assets/img/adorable_animals.svg", razao: "Segue você"}, {nome: "smallcutecats", foto: "assets/img/smallcutecats.svg", razao: "Segue você"}];



  return (
    <div class="corpo">
      <div class="esquerda">
        <div class="stories">

          {storiesArray.map( storyElement =>
          <Story imagem={storyElement.imagem} nome={storyElement.nome} />
          )}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

        <div class="posts">

          {postsArray.map(postElement =>
           <Post avatar={postElement.avatar} nome={postElement.nome} foto={postElement.foto} curtida={postElement.curtida} curtidaNome={postElement.curtidaNome} />
           )}  


        </div>
      </div>


      <div class="sidebar">
        <Usuario avatar="assets/img/catanacomics.svg" nome="catanacomics" descricao="Catana" />

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
              <div>Ver tudo</div>
          </div>

          {sugestaoArray.map( sugestaoElement =>
          <Sugestao foto={sugestaoElement.foto} nome={sugestaoElement.nome} razao={sugestaoElement.razao}/>
          )}

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
    </div>
  );
}