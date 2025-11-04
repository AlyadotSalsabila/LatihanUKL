export default function profile() {
    return (
        <div>
            <div className="bg-white shadow rounded-xl p-6 flex flex-col justify-between h-full mr-6 mt-2">
                <h1 className="text-3xl font-bold text-center text-green-900 mt-2">Profil Pengguna</h1>

                <img src="image/profil.png" alt="" className="mx-auto items-center mt-8 rounded-full w-50 h-50"/>

                <h1 className="text-2xl mt-5">Nama</h1>
                <div className="bg-white border-2 border-gray-300 w-full h-12 rounded-xl"></div>

                <h1 className="text-2xl mt-5">Kelas</h1>
                <div className="bg-white border-2 border-gray-300 w-full h-12 rounded-xl"></div>

                <h1 className="text-2xl mt-5">Tempat/tanggal lahir</h1>
                <div className="bg-white border-2 border-gray-300 w-full h-12 rounded-xl"></div>
                
                <h1 className="text-2xl mt-5">Alamat</h1>
                <div className="bg-white border-2 border-gray-300 w-full h-12 rounded-xl"></div>

                <button className="bg-gray-300 w-35 h-12 rounded-xl mt-10 items-center mx-auto text-xl hover:bg-black hover:text-white">Edit Profil</button>
            </div>
        </div>
    )
}
