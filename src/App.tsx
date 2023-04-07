import { Mypage } from "components/pages/Mypage";
import { Top } from "components/pages/Top";
import { DefaultTemplate } from "components/templates/DefaultTemplate";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <DefaultTemplate>
                <Top />
              </DefaultTemplate>
            }
          />
          <Route
            path="/mypage"
            element={
              <DefaultTemplate>
                <Mypage />
              </DefaultTemplate>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
