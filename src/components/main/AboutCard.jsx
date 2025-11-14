import CartLogo from '@/assets/icons/cart_logo.svg'
import MovementLogo from '@/assets/icons/movements_logo.svg'
import WarehouseLogo from '@/assets/icons/warehouse_logo.svg'
import ProductLogo from '@/assets/icons/simpanaja_logo.svg'

export default function AboutCard() {

    return (
        <>
            <section className="flex flex-row flex-wrap w-4/5 justify-evenly">
                <div className="card     md:card-xl card-border bg-base-100 w-96">
                    <div className="card-body">
                        <div className="bg-utama w-fit rounded-lg p-3">
                            <img src={CartLogo} />
                        </div>
                        <h2 className="card-title">Quick Stock Entry</h2>
                        <p>Add new items smoothly with a simple input process designed to make stock recording faster and more efficient.</p>
                    </div>
                </div>
                <div className="card md:card-xl card-border bg-base-100 w-96">
                    <div className="card-body">
                        <div className="bg-utama w-fit rounded-lg p-3">
                            <img src={MovementLogo} />
                        </div>
                        <h2 className="card-title">Track Item Movement</h2>
                        <p>Kepp your in and out is stock log, giving you accurate and reliable movement history at all times.</p>
                    </div>
                </div>
                <div className="card md:card-xl card-border bg-base-100 w-96">
                    <div className="card-body">
                        <div className="bg-utama w-fit rounded-lg p-3">
                            <img src={WarehouseLogo} />
                        </div>
                        <h2 className="card-title">Warehouse Management</h2>
                        <p>Easily monitor and control inventory across multiple warehouse locations from one organized dashboard.</p>
                    </div>
                </div>
                <div className="card md:card-xl card-border bg-base-100 w-96">
                    <div className="card-body">
                        <div className="bg-utama w-fit rounded-lg p-3">
                            <img src={ProductLogo} />
                        </div>
                        <h2 className="card-title">Organized Product Data</h2>
                        <p>Store and manage product details clearly so you can access all important information whenever you need it.</p>
                    </div>
                </div>
            </section>
        </>
    )
}