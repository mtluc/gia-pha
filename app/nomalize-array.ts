/**
 * Lớp chuẩn hóa 1 mảng đối tượng
 */
export interface ArrayNomalized<T extends object> {
  idField: string | number;
  ids: string[];
  data: { [id: string]: T };
}

/**
 * Chuyển đổi mảng thành object chuẩn hóa
 * @param arr Danh sách đối tượng cần chuẩn hóa
 * @param idField Tên Property của id đối tượng
 */
export const normalize = <T extends object>(
  arr: T[] = [],
  idField: string = "id"
) => {
  const result: ArrayNomalized<T> = {
    data: {},
    ids: [],
    idField: idField,
  };

  arr.forEach((item) => {
    addItem(result, item);
  });

  return result;
};

/**
 * Thêm phần tử vào object chuẩn hóa
 */
export const addItem = <T extends object>(
  { idField, data, ids }: ArrayNomalized<T>,
  newItem: T
) => {
  const id = (newItem as any)?.[idField]?.toString?.();
  if (id && !data[id]) {
    ids.push(id);
    data[id] = newItem;
  }
};

/**
 * Thêm phần tử vào vị trí xác định trong object chuẩn hóa
 */
export const addItemToIndex = <T extends object>(
  { idField, data, ids }: ArrayNomalized<T>,
  newItem: T,
  index: number
) => {
  const id = (newItem as any)?.[idField]?.toString?.();
  if (id && !data[id]) {
    if (index < 0) {
      index = 0;
    }

    if (index > ids.length) {
      index = ids.length;
    }

    ids.splice(index, 0, id);
    data[id] = newItem;
  }
};

/**
 * Xóa phần tử khỏi object chuẩn hóa
 * @param id
 */
export const removeItem = <T extends object>(
  { data, ids }: ArrayNomalized<T>,
  id: string
) => {
  if (id && data[id]) {
    delete data[id];
    ids = ids.filter((id) => id !== id);
  }
};

/**
 * Sắp xếp các phần tử trong object chuẩn hóa
 */
export const sortItems = <T extends object>(
  { data, ids }: ArrayNomalized<T>,
  compareFunction: (x1: T, x2: T) => -1 | 0 | 1
) => {
  ids.sort((id1, id2) => {
    return compareFunction(data[id1], data[id2]);
  });
};

/**
 * Chuyển đổi object chuẩn hóa thành mảng
 */
export const deNomalize = <T extends object>({
  data,
  ids,
}: ArrayNomalized<T>) => {
  return ids.map((id) => data[id]);
};
