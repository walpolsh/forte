export const mapOption = arr =>
  arr.map((x, i) => (
    <option key={i} value={i}>
      {x}
    </option>
  ));

export const mapButton = (fn, cond, x, y) => (
  <button onClick={() => fn(!cond)}>{!cond ? x : y}</button>
);
