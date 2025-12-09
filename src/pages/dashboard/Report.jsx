import React from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Template } from "../../assets/component/Template";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { toast } from "react-toastify";

export const Report = () => {
  const Logout = () => {
    CookieStorage.remove(CookieKeys.AuthToken);
    toast.warning("Logout Berhasil");
    setTimeout(() => {
      window.location.href = "/Login";
    }, 2000);
  };

  const chartData = [
    { name: "Jan", uv: 300 },
    { name: "Feb", uv: 500 },
    { name: "Mar", uv: 200 },
    { name: "Apr", uv: 800 },
  ];

  const chartMargin = { top: 20, right: 30, left: 20, bottom: 20 };

  const formatAxisTick = (value: any): string => `*${value}*`;

  const renderCustomBarLabel = ({ x, y, width, value }: any) => {
    return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
  };

  return (
    <div>
      <Template>
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-extrabold tracking-wide text-gray-800">Report Overview</h1>

          <button className="bg-red-500 text-white px-5 py-2 rounded-lg shadow hover:bg-red-600 transition-all" onClick={Logout}>
            Logout
          </button>
        </header>

        {/* Chart Title */}
        <h2 className="text-center text-xl font-semibold text-gray-700 mb-4">Monthly Performance Chart</h2>

        {/* Chart Card */}
        <div className="flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all w-fit">
            <BarChart width={650} height={320} data={chartData} margin={chartMargin}>
              <XAxis dataKey="name" tickFormatter={formatAxisTick} />
              <YAxis />
              <Bar dataKey="uv" fill="#6366f1" label={renderCustomBarLabel} radius={[8, 8, 0, 0]} />
            </BarChart>
          </div>
        </div>
      </Template>
    </div>
  );
};
