
// nodeのライブラリ？の中にあるCSS　node_modules\smart-webcomponents-react\source\styles\smart.default.css
// import "smart-webcomponents-react/source/styles/smart.default.css";
import "gridjs/dist/theme/mermaid.css";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { Grid as Gridjs} from "gridjs";


// const columns = [
//     {
//       label: "A",
//       dataField: "id",
//       width: 10,
//     },
//     {
//       label: "A",
//       dataField: "name",
//       width: 10,
//     },
//   ],
//   sorting = {
//     enabled: true,
//   },
//   filtering = {
//     enabled: true,
//   },
//   selection = {
//     enabled: true,
//     checkBoxes: {
//       enabled: false,
//     },
//   },
//   dataSource = [
//     { id: 1, name: "Hydrogen" },
//     { id: 2, name: "Helium" },
//     { id: 3, name: "Lithium" },
//     { id: 4, name: "Beryllium" },
//     { id: 5, name: "Boron" },
//     { id: 6, name: "Carbon" },
//     { id: 7, name: "Nitrogen" },
//     { id: 8, name: "Oxygen" },
//     { id: 9, name: "Fluorine" },
//     { id: 10, name: "Neon" },
//     { id: 11, name: "Sodium" },
//     { id: 12, name: "Magnesium" },
//     { id: 13, name: "Aluminum" },
//     { id: 14, name: "Silicon" },
//     { id: 15, name: "Phosphorus" },
//     { id: 16, name: "Sulfur" },
//     { id: 17, name: "Chlorine" },
//     { id: 18, name: "Argon" },
//     { id: 19, name: "Potassium" },
//     { id: 20, name: "Calcium" },
//   ],
//   dataSourceSettings = {
//     dataFields: [
//       { name: "id", dataType: "number" },
//       { name: "name", dataType: "string" },
//     ],
//   };

// デフォルトでエクスポートしたものがページに反映される
export default function Grid({ allPostsData }) {
  //Dynamically import the Smart.Grid component
  const Grid = dynamic(() => import("smart-webcomponents-react/grid"), {
    ssr: false, //no server-side rendering
    loading: () => <p>Loading...</p>,
  });
  const wrapperRef = useRef(null);

  console.log(Gridjs);
  const grid = new Gridjs({
    columns: ["Name", "Email", "Phone Number","gg","dd"],
    data: [
      ["John", "john@example.com", "(353) 01 222 3333","a","b"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444","d","g"],
    ],
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });
console.log(grid);
  return (
    <>
    <div ref={wrapperRef}/>
      {/* <Grid
        id="grid"
        sorting={sorting}
        filtering={filtering}
        columns={columns}
        selection={selection}
        dataSource={dataSource}
        dataSourceSettings={dataSourceSettings}
      ></Grid> */}
    </>
  );
}
