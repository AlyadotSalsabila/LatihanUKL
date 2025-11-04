export default function presensi() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-green-900 mt-10">Halaman Presensi</h1>
            <div className="bg-white shadow rounded-xl p-6 flex flex-col justify-between h-full mr-6 mt-5">
                <h1 className="text-2xl font-semibold mt-8">Selasa, 9 Desember 2025</h1>
                <h1 className="text-2xl text-amber-950 mt-2 font-semibold">06:15:00</h1>

                <h1 className="text-2xl font-semibold mt-7">Kehadiran</h1>

                <div className="gap-7 flex mt-2">
                    <button className="bg-white border-4 border-emerald-600 text-emerald-800 text-xl hover:border-emerald-800 hover:text-white font-semibold w-35 h-13 rounded-xl hover:bg-emerald-800">Hadir</button>
                    <button className="bg-white border-4 border-amber-600 text-amber-800 text-xl hover:border-amber-800 hover:text-white font-semibold w-35 h-13 rounded-xl hover:bg-amber-800">Sakit</button>
                    <button className="bg-white border-4 border-blue-600 text-blue-800 text-xl hover:border-blue-800 hover:text-white font-semibold w-35 h-13 rounded-xl hover:bg-blue-800">Izin</button>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <button className="items-center text-xl bg-gray-300 w-35 h-13 mt-10 mb-10 rounded-xl text-black hover:text-white hover:bg-gray-800">Kirim</button>
            </div>
        </div>
    )
}
