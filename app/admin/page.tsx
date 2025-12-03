"use client"

import { motion } from "framer-motion"
import { Package, ShoppingCart, Tag, TrendingUp, IndianRupee } from "lucide-react"
import { mockProducts, mockOrders, mockOffers } from "@/lib/mock-data"

export default function AdminDashboard() {
  const totalProducts = mockProducts.length
  const totalOrders = mockOrders.length
  const activeOffers = mockOffers.filter((o) => o.active).length
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.totalAmount, 0)

  const stats = [
    {
      label: "Total Products",
      value: totalProducts,
      icon: Package,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Total Orders",
      value: totalOrders,
      icon: ShoppingCart,
      color: "bg-green-50 text-green-600",
    },
    {
      label: "Active Offers",
      value: activeOffers,
      icon: Tag,
      color: "bg-orange-50 text-orange-600",
    },
    {
      label: "Revenue",
      value: `₹${totalRevenue.toLocaleString()}`,
      icon: IndianRupee,
      color: "bg-purple-50 text-purple-600",
    },
  ]

  const recentOrders = mockOrders.slice(0, 5)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back, Admin</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-background border border-border p-6"
          >
            <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon size={24} />
            </div>
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Orders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-background border border-border p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          <TrendingUp size={20} className="text-muted-foreground" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Order ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Customer</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-border last:border-0">
                  <td className="py-4 px-4 text-sm font-medium">{order.id}</td>
                  <td className="py-4 px-4 text-sm">{order.customerName}</td>
                  <td className="py-4 px-4 text-sm">₹{order.totalAmount.toLocaleString()}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full capitalize ${
                        order.status === "delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "shipped"
                            ? "bg-blue-100 text-blue-700"
                            : order.status === "packed"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.a
          href="/admin/products"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-foreground text-background p-6 hover:bg-foreground/90 transition-colors"
        >
          <Package size={24} className="mb-3" />
          <h3 className="font-semibold">Manage Products</h3>
          <p className="text-sm text-background/70 mt-1">Add, edit, or remove products</p>
        </motion.a>

        <motion.a
          href="/admin/orders"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-background border border-border p-6 hover:border-foreground transition-colors"
        >
          <ShoppingCart size={24} className="mb-3" />
          <h3 className="font-semibold">View Orders</h3>
          <p className="text-sm text-muted-foreground mt-1">Track and update order status</p>
        </motion.a>

        <motion.a
          href="/admin/offers"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-background border border-border p-6 hover:border-foreground transition-colors"
        >
          <Tag size={24} className="mb-3" />
          <h3 className="font-semibold">Manage Offers</h3>
          <p className="text-sm text-muted-foreground mt-1">Create and manage discounts</p>
        </motion.a>
      </div>
    </div>
  )
}
