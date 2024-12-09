"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  convertData,
  convertDataNew,
  dataInput,
  TreeNodeInput,
  TreeNodeNew,
} from "./data";
import styles from "./page.module.scss";
import { addItem, ArrayNomalized, normalize } from "./nomalize-array";
const datas = convertDataNew();

interface Row {
  id: number;
  nodes: ArrayNomalized<TreeNodeNew>;
  countItem: number;
}

export default function Home() {
  // const [rows, setRows] = useState([] as TreeNodeNew[][]);
  // useEffect(() => {
  //   const _rows: TreeNodeNew[][] = [];
  //   datas.ids.map((id) => {
  //     if (!_rows[datas.data[id].level - 1]) {
  //       _rows.push([]);
  //     }
  //     _rows[datas.data[id].level - 1].push(datas.data[id]);
  //   });
  //   //setRows(_rows);
  // }, []);

  const [rows, setRows] = useState(() => {
    return normalize<Row>([]);
  });

  const calc = (_rows: ArrayNomalized<Row>, id: number) => {
    const node = datas.data[id];
    const rowIdx = node.level - 1;

    let row = _rows.data[rowIdx];
    if (!row) {
      addItem(_rows, {
        countItem: 0,
        id: _rows.ids.length,
        nodes: normalize<TreeNodeNew>([]),
      });
      row = _rows.data[rowIdx];
    }
    addItem(row.nodes, {...node});
    if (node.children?.length) {
      if(node.children.length > 1){
        
      }
      for (let i = 0; i < node.children.length; i++) {
        calc(_rows, node.children[i]);
      }
    }
  };

  useEffect(() => {
    const _rows = { ...rows };
    calc(_rows, dataInput.id);
    setRows(_rows);
  }, []);

  return (
    <div className={styles.page}>
      {rows.ids.map((rowId) => {
        return (
          <div
            key={rowId}
            style={{
              display: "flex",
            }}
          >
            {rows.data[rowId].nodes.ids.map((id) => {
              return (
                <div
                  key={id}
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
                    {rows.data[rowId].nodes.data[id].name}
                    <br />
                    {rows.data[rowId].nodes.data[id].left}-
                    {rows.data[rowId].nodes.data[id].right}
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
