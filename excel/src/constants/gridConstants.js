export const ROW_COUNT = 30;
export const COL_COUNT = 26;

export const createEmptyGrid = () =>
  Array.from({ length: ROW_COUNT }, () =>
    Array.from({ length: COL_COUNT }, () => ({
      text: "",
      textColor: "text-black",
      bg: "bg-white",
      size: 11,
      fontFamily: "sans-serif",
      isBold: false,
      align: "left",
    }))
  );
