const TableResponse=({ data })=> {
  if (!data || data.length === 0) return null;

  return (
    <div className="overflow-auto mt-4 rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
        <thead className="bg-gray-300 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left bg-gray-700 dark:bg-gray-200 text-gray-100 font-semibold dark:text-gray-900">
              Key
            </th>
            <th className="px-4 py-2 text-left bg-gray-700 dark:bg-gray-200 text-gray-100 font-semibold dark:text-gray-900">
              Value
            </th>
          </tr>
        </thead>

        <tbody className="bg-gray-200 dark:bg-gray-700 divide-y divide-gray-300 dark:divide-gray-600">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-300 dark:hover:bg-gray-600">
              <td className="px-4 py-2 bg-gray-700 dark:bg-gray-200 text-gray-100 dark:text-gray-900">{row.key}</td>
              <td className="px-4 py-2 bg-gray-700 dark:bg-gray-200 text-gray-100 dark:text-gray-900">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableResponse