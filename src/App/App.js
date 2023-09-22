import {Layout} from "antd";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Content, Header} from "antd/lib/layout/layout";
import {HeaderMenu} from "../widgets/HeaderMenu"
import HomePage from "../pages/home/components/HomePage";
import styles from './styles/App.css'


function App() {
  return (
      <Router>
          <Layout>
              <Header style={{background:"white", borderBottom: "solid 1px black", padding: "0 10px 0 10px"}}>
                  <HeaderMenu/>
              </Header>
              <Content>
                  <Routes>
                      <Route path='/' element={<HomePage />}/>
                  </Routes>
              </Content>
          </Layout>
      </Router>
  );
}

export default App;
