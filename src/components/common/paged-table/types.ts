export type TableProps = {
  tbodyData: TableBodyData[];
  theadData: string[];
  setTableData: React.Dispatch<
    React.SetStateAction<
      {
        breed: string;
        subBreed: string | null;
        rating: number;
      }[]
    >
  >;
  initialState: TableBodyData[];
};

export type TableBodyData = {
  breed: string;
  subBreed: string | null;
  rating: number;
};

export type TableRowProps = {
  data: TableBodyData;
};

export type PageData = {
  data: TableBodyData[];
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (i: number) => void;
};
