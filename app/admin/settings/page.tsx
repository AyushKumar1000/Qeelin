"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Camera, Save, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const router = useRouter()
  const [adminData, setAdminData] = useState({
    name: "Admin User",
    email: "admin@qeelin.com",
    profileImage: "/placeholder.svg?height=200&width=200",
  })
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate save
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    alert("Settings saved successfully!")
  }

  const handleLogout = () => {
    localStorage.removeItem("qeelin-admin-auth")
    router.push("/admin/login")
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your admin profile</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-background border border-border p-6"
      >
        <h2 className="font-semibold text-lg mb-6">Profile Information</h2>

        {/* Profile Image */}
        <div className="flex items-center gap-6 mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-secondary overflow-hidden">
              <img
                src={adminData.profileImage || "/placeholder.svg"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              className="absolute bottom-0 right-0 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:bg-foreground/90 transition-colors"
              aria-label="Change profile image"
            >
              <Camera size={16} />
            </button>
          </div>
          <div>
            <p className="font-medium">{adminData.name}</p>
            <p className="text-sm text-muted-foreground">{adminData.email}</p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={adminData.name}
              onChange={(e) => setAdminData({ ...adminData, name: e.target.value })}
              className="w-full px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={adminData.email}
              onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
              className="w-full px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Profile Image URL</label>
            <input
              type="text"
              value={adminData.profileImage}
              onChange={(e) => setAdminData({ ...adminData, profileImage: e.target.value })}
              className="w-full px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground"
            />
          </div>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50"
          >
            <Save size={18} />
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </motion.div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-background border border-destructive/30 p-6"
      >
        <h2 className="font-semibold text-lg mb-4 text-destructive">Danger Zone</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Once you log out, you will need to sign in again to access the admin panel.
        </p>
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 border border-destructive text-destructive px-6 py-3 font-medium hover:bg-destructive hover:text-background transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </motion.div>
    </div>
  )
}
