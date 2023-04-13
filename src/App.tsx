import { CreatePost } from "components/pages/CreatePost";
import { Mypage } from "components/pages/Mypage";
import { Top } from "components/pages/Top";
import { DefaultLayout } from "components/ui/layout/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <DefaultLayout>
                <Top />
              </DefaultLayout>
            }
          />
          <Route
            path="/mypage"
            element={
              <DefaultLayout>
                <Mypage />
              </DefaultLayout>
            }
          />
          <Route
            path="/create-post"
            element={
              <DefaultLayout>
                <CreatePost />
              </DefaultLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
