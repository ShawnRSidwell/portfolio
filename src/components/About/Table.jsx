import Icon from "../Icon";

function Table({ header, data }) {
  return (
    <div>
      <h2 className="flex justify-center font-bold md:p-1 text-blue-900 capitalize">
        {header}
      </h2>
      <table className="flex justify-center ">
        <TableRow data={data} />
      </table>
    </div>
  );
}

function TableRow({ data }) {
  return (
    <tr className="flex flex-wrap justify-center items-center md:m-2">
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
    <td className=" flex justify-center items-center bg-white shadow hover:shadow-xl m-1 md:m-3 rounded-full md:p-3">
      {children}
    </td>
  );
}

export default Table;
