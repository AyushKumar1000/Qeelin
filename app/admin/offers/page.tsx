"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Pencil, Trash2, X, Tag } from "lucide-react"
import { mockOffers } from "@/lib/mock-data"
import type { Offer } from "@/lib/types"

export default function OffersPage() {
  const [offers, setOffers] = useState<Offer[]>(mockOffers)
  const [showModal, setShowModal] = useState(false)
  const [editingOffer, setEditingOffer] = useState<Offer | null>(null)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    discountPercentage: "",
    startDate: "",
    endDate: "",
    active: true,
  })

  const openAddModal = () => {
    setEditingOffer(null)
    setFormData({
      title: "",
      description: "",
      discountPercentage: "",
      startDate: "",
      endDate: "",
      active: true,
    })
    setShowModal(true)
  }

  const openEditModal = (offer: Offer) => {
    setEditingOffer(offer)
    setFormData({
      title: offer.title,
      description: offer.description,
      discountPercentage: offer.discountPercentage.toString(),
      startDate: new Date(offer.startDate).toISOString().split("T")[0],
      endDate: new Date(offer.endDate).toISOString().split("T")[0],
      active: offer.active,
    })
    setShowModal(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const offerData: Offer = {
      id: editingOffer?.id || `offer-${Date.now()}`,
      title: formData.title,
      description: formData.description,
      discountPercentage: Number(formData.discountPercentage),
      startDate: new Date(formData.startDate),
      endDate: new Date(formData.endDate),
      active: formData.active,
    }

    if (editingOffer) {
      setOffers(offers.map((o) => (o.id === editingOffer.id ? offerData : o)))
    } else {
      setOffers([offerData, ...offers])
    }

    setShowModal(false)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this offer?")) {
      setOffers(offers.filter((o) => o.id !== id))
    }
  }

  const toggleActive = (id: string) => {
    setOffers(offers.map((o) => (o.id === id ? { ...o, active: !o.active } : o)))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">Offers</h1>
          <p className="text-muted-foreground mt-1">{offers.filter((o) => o.active).length} active offers</p>
        </div>
        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 font-medium hover:bg-foreground/90 transition-colors"
        >
          <Plus size={20} />
          Add Offer
        </button>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {offers.map((offer) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-background border p-6 ${offer.active ? "border-accent" : "border-border"}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Tag size={24} className="text-accent" />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openEditModal(offer)}
                  className="p-2 hover:bg-secondary transition-colors"
                  aria-label="Edit offer"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => handleDelete(offer.id)}
                  className="p-2 hover:bg-secondary text-destructive transition-colors"
                  aria-label="Delete offer"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{offer.description}</p>

            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-accent">{offer.discountPercentage}% OFF</span>
            </div>

            <div className="text-xs text-muted-foreground mb-4">
              <p>
                {new Date(offer.startDate).toLocaleDateString()} - {new Date(offer.endDate).toLocaleDateString()}
              </p>
            </div>

            <button
              onClick={() => toggleActive(offer.id)}
              className={`w-full py-2 text-sm font-medium border transition-colors ${
                offer.active
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:border-foreground"
              }`}
            >
              {offer.active ? "Active" : "Inactive"}
            </button>
          </motion.div>
        ))}
      </div>

      {offers.length === 0 && (
        <div className="text-center py-12 bg-background border border-border">
          <Tag size={48} className="mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">No offers yet. Create your first offer!</p>
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
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
              className="bg-background w-full max-w-md"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-semibold">{editingOffer ? "Edit Offer" : "Add New Offer"}</h2>
                <button onClick={() => setShowModal(false)} className="p-2 hover:bg-secondary transition-colors">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground"
                    placeholder="New Year Sale"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground resize-none"
                    placeholder="Get 20% off on all products"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Discount Percentage</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={formData.discountPercentage}
                    onChange={(e) => setFormData({ ...formData, discountPercentage: e.target.value })}
                    className="w-full px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Start Date</label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">End Date</label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="active"
                    checked={formData.active}
                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <label htmlFor="active" className="text-sm font-medium">
                    Active
                  </label>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 py-3 border border-border font-medium hover:bg-secondary transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
                  >
                    {editingOffer ? "Update Offer" : "Add Offer"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
