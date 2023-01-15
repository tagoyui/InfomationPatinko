import { useEffect, useState } from "react";
import { getshopes } from "../api";

export default function Shopeslist() {
  const [shopes, setshopes] = useState([]);

  useEffect(() => {
    (async () => {
      const shopes = await getshopes();
      setshopes(shopes);
    })();
  }, []);

  return (
    <>
      <table className="table is-fullwidth is-bordered">
        <thead>
          <tr>
            <th
              onClick={(event) => {
                const result = shopes.sort((a, b) =>
                  a.name < b.name ? -1 : 1
                );
                setshopes([...result]);
              }}
              className="sortlist"
            >
              店名
            </th>
            <th
              onClick={(event) => {
                const result = shopes.sort((a, b) =>
                  a.place < b.place ? -1 : 1
                );
                setshopes([...result]);
              }}
            >
              住所
            </th>
            <th
              onClick={(event) => {
                const result = shopes.sort((a, b) =>
                  a.opentime < b.opentime ? -1 : 1
                );
                setshopes([...result]);
              }}
            >
              抽選時間
            </th>
          </tr>
        </thead>
        <tbody>
          {shopes.map((shopes) => {
            return (
              <tr key={shopes.name}>
                <td>{shopes.name}</td>
                <td>{shopes.place}</td>
                <td>{shopes.opentime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
