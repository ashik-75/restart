import React from "react";

const persons = [
  { id: 1, name: "Alex Jones", age: 54, address: "New york no. 1 Lake Part" },
  {
    id: 2,
    name: "Mark Brown",
    age: 74,
    address: "West island virginia",
  },
  {
    id: 3,
    name: "Jemie Seens",
    age: 27,
    address: "Massacuates, NYT, USA",
  },
  {
    id: 4,
    name: "Mark Millie",
    age: 56,
    address: "Gary wilson",
  },
  {
    id: 5,
    name: "Mathew Gead",
    age: 19,
    address: "Verginia, west side kentaky",
  },
];

const Table: React.FC = () => {
  return (
    <div className=" flex h-full items-center justify-center">
      <div className="overflow-x-auto">
        <div className="font-inter text-left">
          <table className="divide-y">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium uppercase text-gray-500 dark:text-gray-100">
                  Name
                </th>
                <th className="px-6 py-3 text-xs font-medium uppercase text-gray-500 dark:text-gray-100">
                  Age
                </th>
                <th className="px-6 py-3 text-xs font-medium uppercase text-gray-500 dark:text-gray-100">
                  Address
                </th>
                <th className="px-6 py-3 text-xs font-medium uppercase text-gray-500 dark:text-gray-100">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {persons.map((person) => (
                <tr key={person.id}>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-600 dark:text-gray-100">
                    {person.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-600 dark:text-gray-100">
                    {person.age}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-600 dark:text-gray-100">
                    {person.address}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 text-sm font-medium text-blue-700 dark:text-blue-500">
                    <button className="font-semibold underline-offset-2 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
