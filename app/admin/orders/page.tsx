"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, X, Package, Truck, CheckCircle, Clock } from "lucide-react"
import { mockOrders } from "@/lib/mock-data"
import type { Order } from "@/lib/types"

const statusSteps = ["pending", "packed", "shipped", "delivered"] as const

const statusIcons = {
  pending: Clock,
  packed: Package,
  shipped: Truck,
  delivered: CheckCircle,
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(mockOrders)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const filteredOrders = orders.filter((order) => filterStatus === "all" || order.status === filterStatus)

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders(
      orders.map((order) => (order.id === orderId ? { ...order, status: newStatus, updatedAt: new Date() } : order)),
    )
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus, updatedAt: new Date() })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">Orders</h1>
          <p className="text-muted-foreground mt-1">{orders.length} total orders</p>
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-border bg-background focus:outline-none focus:border-foreground"
        >
          <option value="all">All Orders</option>
          <option value="pending">Pending</option>
          <option value="packed">Packed</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="bg-background border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-4 px-4 text-sm font-medium">Order ID</th>
                <th className="text-left py-4 px-4 text-sm font-medium">Customer</th>
                <th className="text-left py-4 px-4 text-sm font-medium">Items</th>
                <th className="text-left py-4 px-4 text-sm font-medium">Total</th>
                <th className="text-left py-4 px-4 text-sm font-medium">Status</th>
                <th className="text-right py-4 px-4 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => {
                const StatusIcon = statusIcons[order.status]
                return (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b border-border last:border-0"
                  >
                    <td className="py-4 px-4 text-sm font-medium">{order.id}</td>
                    <td className="py-4 px-4">
                      <p className="text-sm font-medium">{order.customerName}</p>
                      <p className="text-xs text-muted-foreground">{order.customerPhone}</p>
                    </td>
                    <td className="py-4 px-4 text-sm">{order.items.length} items</td>
                    <td className="py-4 px-4 text-sm font-medium">₹{order.totalAmount.toLocaleString()}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full capitalize ${
                          order.status === "delivered"
                            ? "bg-green-100 text-green-700"
                            : order.status === "shipped"
                              ? "bg-blue-100 text-blue-700"
                              : order.status === "packed"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        <StatusIcon size={14} />
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="p-2 hover:bg-secondary transition-colors"
                          aria-label="View order"
                        >
                          <Eye size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail Modal */}
      <AnimatePresence>
        {selectedOrder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-background w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-semibold">Order Details</h2>
                <button onClick={() => setSelectedOrder(null)} className="p-2 hover:bg-secondary transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Order Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Order ID</p>
                    <p className="font-medium">{selectedOrder.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium">{new Date(selectedOrder.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="border border-border p-4">
                  <h3 className="font-semibold mb-3">Customer Information</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-muted-foreground">Name:</span> {selectedOrder.customerName}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Phone:</span> {selectedOrder.customerPhone}
                    </p>
                    {selectedOrder.customerEmail && (
                      <p>
                        <span className="text-muted-foreground">Email:</span> {selectedOrder.customerEmail}
                      </p>
                    )}
                    <p>
                      <span className="text-muted-foreground">Address:</span> {selectedOrder.customerAddress}
                    </p>
                  </div>
                </div>

                {/* Order Items */}
                <div className="border border-border p-4">
                  <h3 className="font-semibold mb-3">Order Items</h3>
                  <div className="space-y-3">
                    {selectedOrder.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="relative w-16 h-20 bg-secondary flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Size: {item.size} | Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="font-medium text-sm">₹{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border mt-4 pt-4 flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">₹{selectedOrder.totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                {/* Status Update */}
                <div className="border border-border p-4">
                  <h3 className="font-semibold mb-3">Update Status</h3>
                  <div className="flex flex-wrap gap-2">
                    {statusSteps.map((status) => {
                      const StatusIcon = statusIcons[status]
                      const isActive = selectedOrder.status === status
                      return (
                        <button
                          key={status}
                          onClick={() => updateOrderStatus(selectedOrder.id, status)}
                          className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border transition-colors capitalize ${
                            isActive
                              ? "bg-foreground text-background border-foreground"
                              : "border-border hover:border-foreground"
                          }`}
                        >
                          <StatusIcon size={16} />
                          {status}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
