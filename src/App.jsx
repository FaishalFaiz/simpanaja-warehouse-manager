import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@/main.css'

// Layout Import
import Dashboard from '@/pages/DashboardLayout.jsx'
import MainLayout from '@/pages/MainLayout.jsx'

// Page Import
import Home from '@/pages/Home.jsx'
import StatsPage from '@/pages/dashboard_page/Stats.jsx'
import MovementPage from '@/pages/dashboard_page/Movement.jsx'
import ProductPage from '@/pages/dashboard_page/Product.jsx'
import WarehousePage from '@/pages/dashboard_page/Warehouse.jsx'
import PurchasePage from '@/pages/dashboard_page/Purchase.jsx'

export default function App() {

  return (
    <Router>
      <Routes>

        {/* Layout untuk halaman umum */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Layout untuk dashboard */}
        <Route element={<Dashboard/>}>
          <Route path="/dashboard" element={<StatsPage />} />
          <Route path="/stock-movement" element={<MovementPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/warehouse" element={<WarehousePage />} />
          <Route path="/purchase-orders" element={<PurchasePage />} />
        </Route>

      </Routes>
    </Router>
  )
}
