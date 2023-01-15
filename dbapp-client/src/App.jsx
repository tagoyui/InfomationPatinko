import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Shopeslist from "./pages/Shopes";
import Patinkolist from "./pages/Patinkos";
import Slotlist from "./pages/Slots";

export default function App() {
  return (
    <BrowserRouter>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-2">
              <aside className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/patinkos/list">パチンコ</Link>
                  </li>
                  <li>
                    <Link to="/slots/list">スロット</Link>
                  </li>
                  <li>
                    <Link to="/shopes/list">店舗</Link>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="column is-10">
              <Routes>
                <Route path="/shopes/list" element={<Shopeslist />} />
                <Route path="/patinkos/list" element={<Patinkolist />} />
                <Route path="/slots/list" element={<Slotlist />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
}
