import Icon from "../Icon";

function Table({ header, data }) {
  return (
    <div>
      <h2 className="flex justify-center font-bold p-1 text-blue-900 capitalize">
        {header}
      </h2>
      <table>
        <TableRow data={data} />
      </table>
    </div>
  );
}

function TableRow({ data }) {
  return (
    <tr className="flex flex-wrap justify-center m-2">
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
    <td className=" bg-white shadow hover:shadow-xl m-3 rounded-full p-3 flex items-center justify-center">
      {children}
    </td>
  );
}

export default Table;
