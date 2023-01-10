import './css/app.css';
import {Container} from 'react-bootstrap';
import {Header, Train, Test, Test2, Test3} from './components';
import { Routes, Route, HashRouter } from 'react-router-dom';

function MyApp() {
  return (
    <HashRouter>
      <Container>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Train />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default MyApp;
