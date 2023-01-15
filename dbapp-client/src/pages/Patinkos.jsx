import { useEffect, useState } from "react";
import { getpatinkos } from "../api";

export default function patinkoslist() {
  const [patinkos, setpatinkos] = useState([]);

  useEffect(() => {
    (async () => {
      const patinkos = await getpatinkos();
      setpatinkos(patinkos);
    })();
  }, []);

  return (
    <>
      <table className="table is-fullwidth is-bordered">
        <thead>
          <tr>
            <th>機種名</th>
            <th
              onClick={(event) => {
                const result = patinkos.sort((a, b) =>
                  a.maker < b.maker ? -1 : 1
                );
                setpatinkos([...result]);
              }}
            >
              メーカー
            </th>
            <th
              onClick={(event) => {
                const result = patinkos.sort((a, b) =>
                  a.type < b.type ? -1 : 1
                );
                setpatinkos([...result]);
              }}
            >
              タイプ
            </th>
            <th
              onClick={(event) => {
                const result = patinkos.sort((a, b) =>
                  a.class < b.class ? -1 : 1
                );
                setpatinkos([...result]);
              }}
            >
              右タイプ
            </th>
            <th
              onClick={(event) => {
                const result = patinkos.sort(
                  (a, b) => b.num_stores - a.num_stores
                );
                setpatinkos([...result]);
              }}
            >
              設置店舗数
            </th>
          </tr>
        </thead>
        <tbody>
          {patinkos.map((patinkos) => {
            return (
              <tr key={patinkos.name}>
                <td>{patinkos.name}</td>
                <td>{patinkos.maker}</td>
                <td>{patinkos.type}</td>
                <td>{patinkos.class}</td>
                <td>{patinkos.num_stores}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
