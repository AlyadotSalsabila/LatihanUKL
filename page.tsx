export default function dashboard() {
    return (
        <div>
            <section>
                <div className="flex gap-35 p-6">
                    <div>
                        <img src="image/kalenderBaru.png" alt="" className="h-118 rounded-xl shadow"/>
                    </div>
                    <div className="bg-white shadow rounded-xl p-6 flex flex-col justify-between h-fit">
                        <h1 className="font-bold text-3xl mr-4">Selasa, 9 Desember 2025</h1>
                        <div className="flex gap-5 mt-5">
                            <h1 className="font-semibold text-2xl text-rose-900">Belum presensi</h1>
                            <h1 className="text-gray-600 text-xl mt-1">06:15:00</h1>
                        </div>
                        <img src="image/logo2.png" alt="" className="w-58 ml-auto mr-auto mt-20"/>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="text-3xl font-semibold p-6 mt-10">Kehadiran di Bulan Desember</h1>
                <div className="flex gap-35 p-6 mt-0">
                    <div className="bg-white shadow rounded-xl p-6 border-l-8 border-l-emerald-600 flex flex-col justify-between w-fit">
                        <div className="flex items-center gap-10">
                            <h1 className="font-bold text-3xl text-emerald-600">Hadir</h1>
                            <img src="image/line.png" alt="" className="h-15 w-3"/>
                            <h1 className="font-bold text-3xl text-emerald-600">7</h1>
                        </div>
                    </div>

                     <div className="bg-white shadow rounded-xl p-6 border-l-8 border-l-amber-600 flex flex-col justify-between w-fit">
                        <div className="flex items-center gap-10">
                            <h1 className="font-bold text-3xl text-amber-600">Sakit</h1>
                            <img src="image/line.png" alt="" className="h-15 w-3"/>
                            <h1 className="font-bold text-3xl text-amber-600">0</h1>
                        </div>
                    </div>

                     <div className="bg-white shadow rounded-xl p-6 border-l-8 border-l-cyan-600 flex flex-col justify-between w-fit">
                        <div className="flex items-center gap-10">
                            <h1 className="font-bold text-3xl text-cyan-600">Izin</h1>
                            <img src="image/line.png" alt="" className="h-15 w-3"/>
                            <h1 className="font-bold text-3xl text-cyan-600">0</h1>
                        </div>
                    </div>

                     <div className="bg-white shadow rounded-xl p-6 border-l-8 border-l-red-700 flex flex-col justify-between w-fit">
                        <div className="flex items-center gap-10">
                            <h1 className="font-bold text-3xl text-red-700">Alpa</h1>
                            <img src="image/line.png" alt="" className="h-15 w-3"/>
                            <h1 className="font-bold text-3xl text-red-700">0</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}