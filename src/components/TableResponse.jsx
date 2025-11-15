

export default function TableResponse({ data }) {
  if (!data) return null;

  if (Array.isArray(data) && data.length > 0) {
    const first = data[0];

    if (first && typeof first === "object" && "key" in first && "value" in first) {
      return (
        <div className="overflow-auto mt-4 rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-600 dark:divide-gray-500">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left text-gray-200 font-semibold">Key</th>
                <th className="px-4 py-2 text-left text-gray-200 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody className="bg-gray-700 divide-y divide-gray-600">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-gray-600 transition-colors">
                  <td className="px-4 py-2 text-gray-100">{row.key}</td>
                  <td className="px-4 py-2 text-gray-100">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

