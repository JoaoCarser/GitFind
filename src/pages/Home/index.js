import { Header } from "../../components/Header";
import background from '../../assets/background.png';
import ItemList from '../../components/ItemList'
import './styles.css';


function App() {
  return (
    <div className="App">
      <Header />

      <div className="conteudo">
        <img src={background} className="background" alt="background app" />

        
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"/>
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/48493500?s=400&u=e93888c27bf117c57f640f4dc6c991fe200fc458&v=4" className="profile" alt="avatar"/>
            <div>
              <h3>João Carser</h3>
              <span>@JoaoCarser</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr/>
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title="Teste1" description="teste de descrição"/>
            <ItemList title="Teste1" description="teste de descrição"/>
            <ItemList title="Teste1" description="teste de descrição"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
