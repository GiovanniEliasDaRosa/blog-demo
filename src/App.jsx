import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";
import { PostsProvider } from "./contexts/PostsContext";
import ShowPost from "./pages/Post/Show/Post";
import EditPost from "./pages/Post/Edit/Post";

function App() {
  return (
    <PostsProvider>
      <BrowserRouter basename="/blog-demo/">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/post/:id">
              <Route path="" element={<ShowPost />} />
              <Route path="edit" element={<EditPost />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </PostsProvider>
  );
}

export default App;
