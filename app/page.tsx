"use client";
import { useEffect, useState } from "react";
import { convertData, convertDataNew, dataInput, TreeNodeNew } from "./data";
import styles from "./page.module.scss";
const datas = convertDataNew();

export default function Home() {
  const [rows, setRows] = useState([] as TreeNodeNew[][]);
  useEffect(() => {
    const _rows: TreeNodeNew[][] = [];
    datas.ids.map((id) => {
      if (!_rows[datas.data[id].level - 1]) {
        _rows.push([]);
      }
      _rows[datas.data[id].level - 1].push(datas.data[id]);
    });
    setRows(_rows);
  }, []);

  return (
    <div className={styles.page}>
      {rows.map((row, idx) => {
        return (
          <div
            key={idx}
            style={{
              display: "flex",
            }}
          >
            {row.map((x) => {
              return (
                <div
                  key={x.id}
                  style={{
                    width: 90,
                    minWidth: 90,
                    boxSizing: "border-box",
                    wordSpacing: 90,
                    lineHeight: 1.45,
                    padding: 8,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      textAlign: "center",
                      border: "thin solid",
                      boxSizing: "border-box",
                      padding: "10px 0px",
                      borderRadius: 8,
                    }}
                  >
                    {x.name}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
