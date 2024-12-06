import { addItem, ArrayNomalized, normalize } from "./nomalize-array";

export interface TreeNodeInput {
  id: number;
  name: string;
  children?: TreeNodeInput[];
  yearOfBirth?: number;
  yearOfDeath?: number;
  gender: 0 | 1;
  address?: string;
}
export const dataInput: TreeNodeInput = {
  id: 2.1,
  name: "Mai Cần",
  gender: 0,
  children: [
    {
      id: 2.11,
      name: "Mai Quần",
      gender: 0,
      children: [
        {
          id: 2.111,
          name: "Mai Quyên",
          gender: 0,
        },
        {
          id: 2.112,
          name: "Mai Quyền",
          gender: 0,
          children: [
            {
              id: 2.1121,
              name: "Mai Vệ",
              gender: 0,
              children: [
                {
                  id: 2.11211,
                  name: "Mai Uy",
                  gender: 0,
                },
                {
                  id: 2.11212,
                  name: "Mai Dậu",
                  gender: 0,
                  children: [
                    {
                      id: 2.112121,
                      name: "Mai Thắng",
                      gender: 0,
                    },
                    {
                      id: 2.112122,
                      name: "Mai Lợi",
                      gender: 0,
                    },
                  ],
                },
              ],
            },
            {
              id: 2.1122,
              name: "Mai Tuệ",
              gender: 0,
              children: [
                {
                  id: 2.11221,
                  name: "Mai Tân",
                  gender: 0,
                  children: [
                    {
                      id: 2.112211,
                      name: "Mai Uân",
                      gender: 0,
                    },
                    {
                      id: 2.112212,
                      name: "Mai Văn Chinh",
                      gender: 0,
                      yearOfBirth: 1930,
                      yearOfDeath: 2023,
                      children: [
                        {
                          id: 2.1122121,
                          name: "Mai Văn Thịnh",
                          yearOfBirth: 1965,
                          gender: 0,
                          children: [
                            {
                              id: 2.11221211,
                              name: "Mai Thị Thảo",
                              yearOfBirth: 1992,
                              gender: 1,
                            },
                            {
                              id: 2.11221212,
                              name: "Mai Thị Phương",
                              yearOfBirth: 1995,
                              gender: 1,
                            },
                            {
                              id: 2.11221213,
                              name: "Mai Tiến Lực",
                              yearOfBirth: 1996,
                              gender: 0,
                              children: [
                                {
                                  id: 2.112212131,
                                  name: "Mai Tiến Dũng",
                                  gender: 0,
                                  yearOfBirth: 2024,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: 2.1122122,
                          name: "Mai Văn Khánh",
                          yearOfBirth: 1968,
                          gender: 0,
                          children: [
                            {
                              id: 2.11221221,
                              name: "Mai Quốc Thái",
                              gender: 0,
                            },
                          ],
                        },
                        {
                          id: 2.1122123,
                          name: "Mai Văn Thủy",
                          yearOfBirth: 1974,
                          gender: 0,
                          children: [
                            {
                              id: 2.11221231,
                              name: "Mai Văn Trọng",
                              yearOfBirth: 1997,
                              gender: 0,
                            },
                            {
                              id: 2.11221232,
                              name: "Mai Thị Ngọc",
                              yearOfBirth: 1999,
                              gender: 1,
                            },
                            {
                              id: 2.11221233,
                              name: "Mai Thị Hà",
                              yearOfBirth: 2005,
                              gender: 1,
                            },
                            {
                              id: 2.11221234,
                              name: "Mai Hoàng Long",
                              yearOfBirth: 2012,
                              gender: 0,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 2.1123,
              name: "Mai Sói",
              gender: 0,
              children: [
                {
                  id: 2.11231,
                  name: "Mai Hòe",
                  gender: 0,
                  children: [
                    {
                      id: 2.112311,
                      name: "Mai Hướng",
                      gender: 0,
                      children: [
                        {
                          id: 2.1123111,
                          name: "Mai Chiều",
                          gender: 0,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 2.113,
          name: "Mai Thích",
          gender: 0,
        },
        {
          id: 2.114,
          name: "Mai Trí",
          gender: 0,
          children: [
            {
              id: 2.1141,
              name: "Mai Trợ",
              gender: 0,
            },
          ],
        },
        {
          id: 2.115,
          name: "Mai Quý",
          gender: 0,
          children: [
            {
              id: 2.1151,
              name: "Mai Giá",
              gender: 0,
              children: [
                {
                  id: 2.11511,
                  name: "Mai Giao",
                  gender: 0,
                  children: [
                    {
                      id: 2.115111,
                      name: "Mai Cầu",
                      gender: 0,
                    },
                    {
                      id: 2.115112,
                      name: "Mai Khẩn",
                      gender: 0,
                      children: [
                        {
                          id: 2.1151121,
                          name: "Mai Nguyện",
                          gender: 0,
                        },
                        {
                          id: 2.1151122,
                          name: "Mai Tỉnh",
                          gender: 0,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2.12,
      name: "Mai Hợp",
      gender: 0,
      children: [
        {
          id: 2.121,
          name: "Mai Nhu",
          gender: 0,
        },
        {
          id: 2.122,
          name: "Mai Hap",
          gender: 0,
          children: [
            {
              id: 2.1221,
              name: "Mai Nạp",
              gender: 0,
            },
            {
              id: 2.1222,
              name: "Mai Pháp",
              gender: 0,
              children: [
                {
                  id: 2.12221,
                  name: "Mai Diên",
                  gender: 0,
                },
                {
                  id: 2.12222,
                  name: "Mai Inh",
                  gender: 0,
                  children: [
                    {
                      id: 2.12221,
                      name: "Mai Đính",
                      gender: 0,
                    },
                    {
                      id: 2.12222,
                      name: "Mai Đảng",
                      gender: 0,
                      children: [
                        {
                          id: 2.122221,
                          name: "Mai Đạt",
                          gender: 0,
                        },
                        {
                          id: 2.122222,
                          name: "Mai Tiến",
                          gender: 0,
                        },
                        {
                          id: 2.122223,
                          name: "Mai Bộ",
                          gender: 0,
                        },
                      ],
                    },
                    {
                      id: 2.12223,
                      name: "Mai Đam",
                      gender: 0,
                      children: [
                        {
                          id: 2.122231,
                          name: "Mai Thọ",
                          gender: 0,
                        },
                        {
                          id: 2.122232,
                          name: "Mai Trường",
                          gender: 0,
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2.12223,
                  name: "Mai Tặng",
                  gender: 0,
                  children: [
                    {
                      id: 2.122231,
                      name: "Mai Tăng",
                      gender: 0,
                    },
                    {
                      id: 2.122232,
                      name: "Mai Châu",
                      gender: 0,
                      children: [
                        {
                          id: 2.1222321,
                          name: "Mai Tuấn",
                          gender: 0,
                        },
                      ],
                    },
                    {
                      id: 2.122233,
                      name: "Mai Cao",
                      gender: 0,
                      children: [
                        {
                          id: 2.1222331,
                          name: "Mai Sang",
                          gender: 0,
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2.12224,
                  name: "Mai Phô",
                  gender: 0,
                  children: [
                    {
                      id: 2.122241,
                      name: "Mai Chương",
                      gender: 0,
                      children: [
                        {
                          id: 2.1222411,
                          name: "Mai Đức",
                          gender: 0,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 2.123,
          name: "Mai Doãn",
          gender: 0,
        },
      ],
    },
  ],
};

export interface TreeNode {
  id: number;
  name: string;
  children?: ArrayNomalized<TreeNode>;
  yearOfBirth?: number;
  yearOfDeath?: number;
  gender: 0 | 1;
  address?: string;
}

export const convertData = (node: TreeNodeInput, current?: TreeNode) => {
  if (!current) {
    current = {} as TreeNode;
  }
  Object.assign(current, { ...node, children: undefined });
  delete current.children;

  if (node.children?.length) {
    current.children = normalize(
      node.children.reduce((children, item) => {
        children.push(convertData(item));
        return children;
      }, [] as TreeNode[])
    );
  }

  return current;
};

export interface TreeNodeNew {
  id: number;
  name: string;
  children?: number[];
  yearOfBirth?: number;
  yearOfDeath?: number;
  gender: 0 | 1;
  address?: string;
  left: number;
  right: number;
  level: number;
}
export const convertDataNew = (
  current: ArrayNomalized<TreeNodeNew> = {
    data: {},
    ids: [],
    idField: "id",
  }
) => {
  const addNode = (node: TreeNodeInput, parent?: TreeNodeNew) => {
    let left: number = parent?.right || 1;
    let level: number = (parent?.level || 0) + 1;
    parent?.children?.push(node.id);
    current.ids.forEach((id) => {
      if (current.data[id].left >= left) {
        current.data[id].left += 2;
      }

      if (current.data[id].right >= left) {
        current.data[id].right += 2;
      }
    });
    const item = { ...node, children: [], left, level, right: left + 1 };
    addItem(current, item);
    if (node.children?.length) {
      node.children.forEach((x) => {
        addNode(x, item);
      });
    }
  };
  addNode(dataInput);
  return current;
};
