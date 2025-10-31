import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

import coldImg from "../assets/cold.png";
import mildImg from "../assets/mild.png";
import sunnyImg from "../assets/sunny.png";

type Current = { temperature_2m: number; time: string };

const HYD = { name: "Hyderabad, India", lat: 17.385, lon: 78.4867 };

const MyTown: React.FC = () => {
  const [data, setData] = useState<Current | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [toF, setToF] = useState(false);

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${HYD.lat}&longitude=${HYD.lon}&current=temperature_2m`;

  const fetchWeather = useCallback(async () => {
    try {
      setLoading(true);
      setErr(null);
      const res = await axios.get(url);
      const c = res.data?.current;
      setData({ temperature_2m: c.temperature_2m, time: c.time });
    } catch {
      setErr("Failed to load weather. Try again.");
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  const cToF = (c: number) => (c * 9) / 5 + 32;
  const showTemp = (c: number) =>
    toF ? `${Math.round(cToF(c))} °F` : `${Math.round(c)} °C`;
  const imageByC = (c: number) =>
    c <= 10 ? coldImg : c >= 20 ? sunnyImg : mildImg;
  const altByC = (c: number) => (c <= 10 ? "Cold" : c >= 20 ? "Sunny" : "Mild");

  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-3xl font-bold text-blue-700">
            My Town — {HYD.name}
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setToF((v) => !v)}
              className="rounded-full bg-blue-600 text-white text-sm font-medium px-4 py-2 hover:bg-blue-700 transition"
            >
              Change to {toF ? "°C" : "°F"}
            </button>
            <button
              onClick={fetchWeather}
              className="rounded-full border border-blue-600 text-blue-700 text-sm font-medium px-4 py-2 hover:bg-blue-50 transition"
              title="Refetch weather"
            >
              Refresh
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 shadow-sm ring-1 ring-blue-200">
          {loading && (
            <div className="space-y-6">
              <div className="animate-pulse h-5 w-48 bg-blue-200/60 rounded" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center md:justify-start">
                  <div className="h-56 w-56 rounded-2xl bg-blue-200/40 animate-pulse" />
                </div>
                <div className="space-y-3">
                  <div className="h-10 w-40 bg-blue-200/60 rounded animate-pulse" />
                  <div className="h-4 w-60 bg-blue-200/60 rounded animate-pulse" />
                  <div className="h-4 w-52 bg-blue-200/60 rounded animate-pulse" />
                </div>
              </div>
            </div>
          )}

          {!loading && err && <p className="text-red-600">{err}</p>}

          {!loading && !err && data && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center md:justify-start">
                <div
                  className="
                    group relative rounded-2xl p-[2px]
                    bg-gradient-to-br from-blue-300/60 via-white to-blue-300/60
                    shadow-[0_8px_30px_rgb(0,0,0,0.06)]
                  "
                >
                  <div
                    className="
                      rounded-2xl bg-white/80 backdrop-blur
                      ring-1 ring-blue-200/60 p-4
                      transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg
                    "
                  >
                    <div className="aspect-square w-56 sm:w-64 lg:w-72 mx-auto overflow-hidden">
                      <img
                        src={imageByC(data.temperature_2m)}
                        alt={`${altByC(data.temperature_2m)} weather`}
                        className="
                          h-full w-full object-contain select-none
                          transition-transform duration-300 group-hover:scale-[1.03]
                        "
                        loading="eager"
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-slate-500 text-sm">
                  Updated: {new Date(data.time).toLocaleString()}
                </p>
                <h3 className="mt-2 text-5xl font-extrabold text-slate-900">
                  {showTemp(data.temperature_2m)}
                </h3>
                <ul className="mt-5 text-slate-700 space-y-1 text-sm">
                  <li>
                    <span className="font-semibold">Location:</span> {HYD.name}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyTown;
