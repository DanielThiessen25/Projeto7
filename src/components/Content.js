import Story from "./Story";
import Post from "./Post";
import Usuario from "./Usuario";
import Sugestao from "./Sugestao";

export default function Content() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <div class="stories">

          <Story imagem="assets/img/9gag.svg" nome="9gag" />
          <Story imagem="assets/img/meowed.svg" nome="meowed" />
          <Story imagem="assets/img/barked.svg" nome="barked" />
          <Story imagem="assets/img/assets/nathanwpylestrangeplanet.svg" nome="nathanwpylestrangeplanet" />
          <Story imagem="assets/img/wawawicomics.svg" nome="wawawicomics" />
          <Story imagem="assets/img/respondeai.svg" nome="respondeai" />
          <Story imagem="assets/img/filomoderna.svg" nome="filomoderna" />
          <Story imagem="assets/img/memeriagourmet.svg" nome="memeriagourmet" />

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

        <div class="posts">

          <Post avatar="assets/img/meowed.svg" nome="meowed" foto="assets/img/gato-telefone.svg" curtida="assets/img/respondeai.svg" curtidaNome="respondeai" />
          <Post avatar="assets/img/barked.svg" nome="barked" foto="assets/img/dog.svg" curtida="assets/img/adorable_animals.svg" curtidaNome="adorable_animals" />
          <Post avatar="assets/img/meowed.svg" nome="meowed" foto="assets/img/gato-telefone.svg" curtida="assets/img/respondeai.svg" curtidaNome="respondeai" />
          <Post avatar="assets/img/barked.svg" nome="barked" foto="assets/img/dog.svg" curtida="assets/img/adorable_animals.svg" curtidaNome="adorable_animals" />

        </div>



        <div class="sidebar">
          <Usuario avatar="assets/img/catanacomics.svg" nome="catanacomics" descricao="Catana"/>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <Sugestao  nome="chibirdart" razao="Segue você"/>
            <Sugestao  nome="razoesparaacreditar" razao="Novo no Instagram"/>
            <Sugestao  nome="adorable_animals" razao="Segue você"/>
            <Sugestao  nome="smallcutecats" razao="Segue você"/>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
</div>
</div>
    );
}