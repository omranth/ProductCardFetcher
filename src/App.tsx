import Container from './component/section/Container';
import Footer from './component/section/Footer';
import './app.css';
import Header from './component/section/Header';
import Container_Response from '@mui/material/Container';

const App = () => {
  return (
    <>
      <Header />
      <Container_Response>
        <Container />
      </Container_Response>
      <Footer />
    </>
  );
};

export default App;
