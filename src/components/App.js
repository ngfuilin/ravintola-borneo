import '../App.css';
import {Routes, Route} from 'react-router-dom';
import Home from '../routes/Home';
import Brunch from '../routes/Brunch';
import Contact from '../routes/Contact';
import Lunch from '../routes/Lunch';
import Menu from '../routes/Menu';
import Layout from '../Layout';
import Takeaway from '../routes/Takeaway';
import Topical from '../routes/Topical';
import Cabinet from '../routes/Cabinet';
import Lounas_Tampere from '../routes/Lounas_Tampere';
import Lounas_Helsinki from '../routes/Lounas_Helsinki';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="brunch" element={<Brunch />} />
          <Route path="contact" element={<Contact />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="menu" element={<Menu />} />
          <Route path="takeaway" element={<Takeaway />} />
          <Route path="topical" element={<Topical />} />
          <Route path="cabinet" element={<Cabinet />} />
          <Route path="lounas_tampere" element={<Lounas_Tampere />} />
          <Route path="lounas_helsinki" element={<Lounas_Helsinki />} />
         <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;