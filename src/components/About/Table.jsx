import { data as skillData } from "./skills";
import Icon from "../Icon";

function Table({ header }) {
  return (
    <div>
      <h2 className="flex justify-center font-bold p-1">{header}</h2>
      <table>
        <TableRow data={skillData} />
      </table>
    </div>
  );
}

function TableRow({ data }) {
  return (
    <tr className="flex flex-wrap gap-3 justify-center m-6">
      {data.map((item, i) => (
        <TableCell key={i}>
          <Icon icon={item.icon} size={45} />
        </TableCell>
      ))}
    </tr>
  );
}

function TableCell({ children }) {
  return (
    <td className="border border-slate-300 bg-slate-300 p-1 shadow-md hover:shadow-lg m-3">
      {children}
    </td>
  );
}

export default Table;
