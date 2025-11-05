import React from 'react'
import HeroImage from '@/assets/hero_image.svg'
import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'
import Stats from '@/components/Stats.jsx'
import '@/main.css'

export default function Home() {
    return (
        <>


            <header className="px-10  hero font-geologica min-h-screen">
                <div className=" w-full text-black flex flex-col justify-center items-center md:flex-row">
                    <div className="mr-10 gap-5 flex flex-col items-center md:items-start justify-center mb-10 md:mb-0">
                        <h1 className="text-4xl text-center md:text-start text-utama ">Kelola Stok Lebih Mudah, <span className=" font-bold">SimpanAja!</span></h1>
                        <p className="text-xl text-center md:text-start font-light text-gray-700 max-w-3/4 text-wrap">Pantau, simpan, dan atur stok barangmu tanpa ribet. Semuanya langsung dari satu tempat.</p>
                        <a className="btn btn-outline btn-success">Coba Sekarang!</a>
                    </div>
                    <div>
                        <img src={HeroImage} />
                    </div>
                </div>
            </header>

            <Stats />

            <section className="mt-20 max-w-[1000px] mx-auto flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold text-utama mb-10 text-center">Cara Kerja SimpanAja</h2>
                <ul className="timeline timeline-snap-icon text-utama text-xl max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">Langkah 1</time>
                            <div className="text-lg font-black">Mencatat Stok Barang</div>
                            SimpanAja membantu pemilik usaha mencatat stok produk dengan rapi dan otomatis.
                            Tidak perlu lagi menghitung manual — setiap perubahan stok langsung tercatat dalam sistem.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end md:mb-10">
                            <time className="font-mono italic">Langkah 2</time>
                            <div className="text-lg font-black">Mencatat Penjualan</div>
                            Setiap transaksi otomatis tercatat sehingga pemilik usaha bisa melihat produk apa yang paling laku,
                            dan kapan waktu penjualan tertinggi terjadi.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">Langkah 3</time>
                            <div className="text-lg font-black">Analisis Laporan Otomatis</div>
                            Data yang sudah tersimpan diolah oleh SimpanAja menjadi laporan penjualan dan grafik performa usaha,
                            sehingga pemilik bisa mengambil keputusan yang lebih cerdas.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end md:mb-10">
                            <time className="font-mono italic">Langkah 4</time>
                            <div className="text-lg font-black">Pengingat Restok Otomatis</div>
                            Jika stok mulai menipis, sistem SimpanAja otomatis memberi pengingat agar pemilik bisa segera restok,
                            sehingga penjualan tidak terganggu.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">Langkah 5</time>
                            <div className="text-lg font-black">Mengembangkan Usaha</div>
                            Dengan laporan yang akurat dan stok yang terkelola, SimpanAja membantu usaha tumbuh lebih cepat,
                            efisien, dan siap bersaing di era digital.
                        </div>
                    </li>
                </ul>
            </section>

            <section className=" text-black px-50 flex flex-col gap-3 my-30">
                <div className="collapse collapse-arrow bg-aksen border border-gray">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">How do I create an account?</div>
                    <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                </div>
                <div className="collapse collapse-arrow bg-aksen border border-gray">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>
                <div className="collapse collapse-arrow bg-aksen border border-gray     ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How do I update my profile information?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
            </section>

        </>
    )
}
