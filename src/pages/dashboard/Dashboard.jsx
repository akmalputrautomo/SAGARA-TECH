import React, { useState } from "react";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  // Dummy summary data
  const summary = [
    { title: "Total Users", value: 120 },
    { title: "Transactions", value: 340 },
    { title: "Revenue", value: "$12,500" },
  ];

  // Dummy user table
  const dummyUsers = [
    { id: 1, name: "Akmal", email: "akmal@mail.com", role: "Admin", createdAt: "2024-01-01" },
    { id: 2, name: "Putra", email: "putra@mail.com", role: "User", createdAt: "2024-01-02" },
    { id: 3, name: "Siti", email: "siti@mail.com", role: "User", createdAt: "2024-01-05" },
    { id: 4, name: "Budi", email: "budi@mail.com", role: "User", createdAt: "2024-01-06" },
    { id: 5, name: "Ani", email: "ani@mail.com", role: "Admin", createdAt: "2024-01-08" },
    { id: 6, name: "Rizky", email: "rizky@mail.com", role: "User", createdAt: "2024-01-10" },
    { id: 7, name: "Nanda", email: "nanda@mail.com", role: "User", createdAt: "2024-01-11" },
    { id: 8, name: "Fajar", email: "fajar@mail.com", role: "Admin", createdAt: "2024-01-12" },
    { id: 9, name: "Tina", email: "tina@mail.com", role: "User", createdAt: "2024-01-13" },
    { id: 10, name: "Rara", email: "rara@mail.com", role: "Super Admin", createdAt: "2024-01-14" },
    { id: 11, name: "Dimas", email: "dimas@mail.com", role: "User", createdAt: "2024-01-15" },
    { id: 12, name: "Ajeng", email: "ajeng@mail.com", role: "User", createdAt: "2024-01-16" },
    { id: 13, name: "Hendra", email: "hendra@mail.com", role: "Admin", createdAt: "2024-01-17" },
    { id: 14, name: "Rika", email: "rika@mail.com", role: "User", createdAt: "2024-01-18" },
    { id: 15, name: "Yoga", email: "yoga@mail.com", role: "User", createdAt: "2024-01-19" },
    { id: 16, name: "Joko", email: "joko@mail.com", role: "Admin", createdAt: "2024-01-20" },
    { id: 17, name: "Mira", email: "mira@mail.com", role: "User", createdAt: "2024-01-21" },
    { id: 18, name: "Aulia", email: "aulia@mail.com", role: "User", createdAt: "2024-01-22" },
    { id: 19, name: "Bagas", email: "bagas@mail.com", role: "Admin", createdAt: "2024-01-23" },
    { id: 20, name: "Linda", email: "linda@mail.com", role: "User", createdAt: "2024-01-24" },
    { id: 21, name: "Samuel", email: "samuel@mail.com", role: "User", createdAt: "2024-01-25" },
    { id: 22, name: "Kevin", email: "kevin@mail.com", role: "Admin", createdAt: "2024-01-26" },
    { id: 23, name: "Gina", email: "gina@mail.com", role: "Super Admin", createdAt: "2024-01-27" },
    { id: 24, name: "Adit", email: "adit@mail.com", role: "User", createdAt: "2024-01-28" },
    { id: 25, name: "Farhan", email: "farhan@mail.com", role: "User", createdAt: "2024-01-29" },
    { id: 26, name: "Nabila", email: "nabila@mail.com", role: "Admin", createdAt: "2024-01-30" },
    { id: 27, name: "Dewi", email: "dewi@mail.com", role: "User", createdAt: "2024-01-31" },
    { id: 28, name: "Randy", email: "randy@mail.com", role: "User", createdAt: "2024-02-01" },
    { id: 29, name: "Sabrina", email: "sabrina@mail.com", role: "Admin", createdAt: "2024-02-02" },
    { id: 30, name: "Cindy", email: "cindy@mail.com", role: "User", createdAt: "2024-02-03" },
    { id: 31, name: "Anton", email: "anton@mail.com", role: "User", createdAt: "2024-02-04" },
    { id: 32, name: "Galih", email: "galih@mail.com", role: "Admin", createdAt: "2024-02-05" },
    { id: 33, name: "Silvi", email: "silvi@mail.com", role: "User", createdAt: "2024-02-06" },
    { id: 34, name: "Arif", email: "arif@mail.com", role: "User", createdAt: "2024-02-07" },
    { id: 35, name: "Mega", email: "mega@mail.com", role: "Admin", createdAt: "2024-02-08" },
    { id: 36, name: "Donny", email: "donny@mail.com", role: "User", createdAt: "2024-02-09" },
    { id: 37, name: "Yuni", email: "yuni@mail.com", role: "Super Admin", createdAt: "2024-02-10" },
    { id: 38, name: "Reno", email: "reno@mail.com", role: "User", createdAt: "2024-02-11" },
    { id: 39, name: "Fitri", email: "fitri@mail.com", role: "User", createdAt: "2024-02-12" },
    { id: 40, name: "Fina", email: "fina@mail.com", role: "Admin", createdAt: "2024-02-13" },
    { id: 41, name: "Seno", email: "seno@mail.com", role: "User", createdAt: "2024-02-14" },
    { id: 42, name: "Dika", email: "dika@mail.com", role: "User", createdAt: "2024-02-15" },
    { id: 43, name: "Olivia", email: "olivia@mail.com", role: "Admin", createdAt: "2024-02-16" },
    { id: 44, name: "Mario", email: "mario@mail.com", role: "User", createdAt: "2024-02-17" },
    { id: 45, name: "Rio", email: "rio@mail.com", role: "User", createdAt: "2024-02-18" },
    { id: 46, name: "Niko", email: "niko@mail.com", role: "Admin", createdAt: "2024-02-19" },
    { id: 47, name: "Hani", email: "hani@mail.com", role: "User", createdAt: "2024-02-20" },
    { id: 48, name: "Wahyu", email: "wahyu@mail.com", role: "User", createdAt: "2024-02-21" },
    { id: 49, name: "Zahra", email: "zahra@mail.com", role: "Admin", createdAt: "2024-02-22" },
    { id: 50, name: "Kiki", email: "kiki@mail.com", role: "User", createdAt: "2024-02-23" },
  ];

  const [search, setSearch] = useState("");
  const [sortCol, setSortCol] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sorting
  const handleSort = (col) => {
    const order = sortOrder === "asc" ? "desc" : "asc";
    setSortCol(col);
    setSortOrder(order);
  };

  const sortedData = [...dummyUsers].sort((a, b) => {
    if (!sortCol) return 0;
    if (a[sortCol] < b[sortCol]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortCol] > b[sortCol]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // Search filter
  const filteredData = sortedData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Logout
  const Logout = () => {
    CookieStorage.remove(CookieKeys.AuthToken);
    toast.warning("Logout Berhasil");
    setTimeout(() => {
      window.location.href = "/Login";
    }, 2000);
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold mb-6">My Admin</h2>
        <nav className="space-y-2">
          <button onClick={() => navigate("/dashboard")} className="block p-2 rounded hover:bg-gray-200 w-full text-left">
            Dashboard
          </button>
          <button onClick={() => navigate("/")} className="block p-2 rounded hover:bg-gray-200 w-full text-left">
            User
          </button>
          <button onClick={() => navigate("/reports")} className="block p-2 rounded hover:bg-gray-200 w-full text-left">
            Report
          </button>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={Logout}>
            Logout
          </button>
        </header>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {summary.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-2xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Data Table */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">User Table</h3>
            <input
              type="text"
              placeholder="Search name..."
              className="border px-3 py-2 rounded-lg"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left bg-gray-200">
                <th className="p-3 cursor-pointer" onClick={() => handleSort("id")}>
                  ID
                </th>
                <th className="p-3 cursor-pointer" onClick={() => handleSort("name")}>
                  Name
                </th>
                <th className="p-3 cursor-pointer" onClick={() => handleSort("email")}>
                  Email
                </th>
                <th className="p-3 cursor-pointer" onClick={() => handleSort("role")}>
                  Role
                </th>
                <th className="p-3 cursor-pointer" onClick={() => handleSort("createdAt")}>
                  Created At
                </th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-3">{item.id}</td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.role}</td>
                  <td className="p-3">{item.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="flex justify-center items-center mt-6 gap-2">
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50">
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button key={i} onClick={() => goToPage(i + 1)} className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                {i + 1}
              </button>
            ))}

            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
