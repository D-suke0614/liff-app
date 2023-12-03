/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import logo from "../logo.svg";

const Top = () => {
  const [count, setCount] = useState(0);
  const [liffObject, setLiffObject] = useState<any>(null);
  console.log(liffObject);

  useEffect(() => {
    import("@line/liff").then((liff: any) => {
      liff
        .init({ liffId: import.meta.env.VITE_APP_LIFF_ID })
        .then(() => {
          setLiffObject(liff);
          if (liff.isLoggedIn()) {
            // ログインの確認が取れたら
          }
        })
        .catch((err: any) => {
          console.log({ err });
        });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default Top;
