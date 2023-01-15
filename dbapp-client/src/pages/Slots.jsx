import { useEffect, useState } from "react";
import { getslots } from "../api";

export default function slotslist() {
  const [slots, setslots] = useState([]);

  useEffect(() => {
    (async () => {
      const slots = await getslots();
      setslots(slots);
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
                const result = slots.sort((a, b) =>
                  a.maker < b.maker ? -1 : 1
                );
                setslots([...result]);
              }}
            >
              メーカー
            </th>
            <th
              onClick={(event) => {
                const result = slots.sort((a, b) => (a.type < b.type ? -1 : 1));
                setslots([...result]);
              }}
            >
              種類
            </th>
            <th
              onClick={(event) => {
                const result = slots.sort((a, b) =>
                  a.class < b.class ? -1 : 1
                );
                setslots([...result]);
              }}
            >
              タイプ
            </th>
            <th
              onClick={(event) => {
                const result = slots.sort(
                  (a, b) => b.num_stores - a.num_stores
                );
                setslots([...result]);
              }}
            >
              設置店舗数
            </th>
          </tr>
        </thead>
        <tbody>
          {slots.map((slots) => {
            return (
              <tr key={slots.name}>
                <td>{slots.name}</td>
                <td>{slots.maker}</td>
                <td>{slots.type}</td>
                <td>{slots.class}</td>
                <td>{slots.num_stores}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
