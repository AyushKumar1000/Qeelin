(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/mock-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFeaturedProducts",
    ()=>getFeaturedProducts,
    "getNewArrivals",
    ()=>getNewArrivals,
    "getProductById",
    ()=>getProductById,
    "getProductsByCategory",
    ()=>getProductsByCategory,
    "mockOffers",
    ()=>mockOffers,
    "mockOrders",
    ()=>mockOrders,
    "mockProducts",
    ()=>mockProducts
]);
const mockProducts = [
    // Kurti Sets
    {
        id: "ks-001",
        name: "Elegant Noir Kurti Set",
        category: "kurti-sets",
        price: 2499,
        originalPrice: 2999,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            "Black",
            "White"
        ],
        stock: 25,
        images: [
            "/elegant-black-kurti-set-indian-women-fashion.jpg",
            "/black-kurti-set-back-view.jpg"
        ],
        description: "An elegant black kurti set with intricate white embroidery. Perfect for festive occasions.",
        featured: true,
        newArrival: true,
        createdAt: new Date()
    },
    {
        id: "ks-002",
        name: "Pearl White Anarkali Set",
        category: "kurti-sets",
        price: 3299,
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            "White",
            "Off-White"
        ],
        stock: 18,
        images: [
            "/placeholder-jbhjb.png",
            "/white-anarkali-side-view.jpg"
        ],
        description: "A stunning pearl white anarkali set with delicate lacework. Timeless elegance for any celebration.",
        featured: true,
        createdAt: new Date()
    },
    {
        id: "ks-003",
        name: "Minimalist Blush Kurti",
        category: "kurti-sets",
        price: 1899,
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        colors: [
            "Pastel Pink",
            "Lavender"
        ],
        stock: 30,
        images: [
            "/pastel-pink-kurti-set-minimal-design.jpg"
        ],
        description: "A minimalist blush kurti with clean lines and subtle detailing. Perfect for everyday elegance.",
        newArrival: true,
        createdAt: new Date()
    },
    {
        id: "ks-004",
        name: "Classic Charcoal Kurta Set",
        category: "kurti-sets",
        price: 2799,
        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        colors: [
            "Charcoal",
            "Black"
        ],
        stock: 22,
        images: [
            "/placeholder-05hxe.png"
        ],
        description: "A classic charcoal kurta set with modern silhouette. Versatile and sophisticated.",
        createdAt: new Date()
    },
    // Tops
    {
        id: "tp-001",
        name: "Silk Noir Blouse",
        category: "tops",
        price: 1499,
        originalPrice: 1799,
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        colors: [
            "Black"
        ],
        stock: 40,
        images: [
            "/black-silk-blouse-women-elegant.jpg",
            "/black-silk-top-back-view.jpg"
        ],
        description: "A luxurious silk blouse in deep noir. Perfect for both office and evening wear.",
        featured: true,
        createdAt: new Date()
    },
    {
        id: "tp-002",
        name: "Ivory Lace Peplum Top",
        category: "tops",
        price: 1299,
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            "White",
            "Ivory"
        ],
        stock: 35,
        images: [
            "/white-lace-peplum-top-women-fashion.jpg"
        ],
        description: "An ivory lace peplum top with feminine details. Romantic and chic.",
        newArrival: true,
        createdAt: new Date()
    },
    {
        id: "tp-003",
        name: "Structured Cotton Shirt",
        category: "tops",
        price: 999,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        colors: [
            "White",
            "Black"
        ],
        stock: 50,
        images: [
            "/structured-white-cotton-shirt-women-minimal.jpg"
        ],
        description: "A perfectly structured cotton shirt. A wardrobe essential for the modern woman.",
        featured: true,
        createdAt: new Date()
    },
    {
        id: "tp-004",
        name: "Draped Asymmetric Top",
        category: "tops",
        price: 1699,
        sizes: [
            "S",
            "M",
            "L"
        ],
        colors: [
            "Black",
            "Charcoal"
        ],
        stock: 28,
        images: [
            "/black-asymmetric-draped-top-women-fashion.jpg"
        ],
        description: "An avant-garde draped top with asymmetric hemline. Bold and artistic.",
        newArrival: true,
        createdAt: new Date()
    },
    // Jeans
    {
        id: "jn-001",
        name: "High-Rise Noir Denim",
        category: "jeans",
        price: 2199,
        originalPrice: 2599,
        sizes: [
            "26",
            "28",
            "30",
            "32",
            "34"
        ],
        colors: [
            "Black"
        ],
        stock: 45,
        images: [
            "/black-high-rise-jeans-women-premium.jpg",
            "/black-denim-back-view-women.jpg"
        ],
        description: "Premium high-rise black denim with perfect stretch. Sleek and flattering.",
        featured: true,
        createdAt: new Date()
    },
    {
        id: "jn-002",
        name: "White Wide-Leg Jeans",
        category: "jeans",
        price: 1999,
        sizes: [
            "26",
            "28",
            "30",
            "32"
        ],
        colors: [
            "White",
            "Off-White"
        ],
        stock: 32,
        images: [
            "/white-wide-leg-jeans-women-elegant.jpg"
        ],
        description: "Elegant white wide-leg jeans for a sophisticated summer look.",
        newArrival: true,
        createdAt: new Date()
    },
    {
        id: "jn-003",
        name: "Charcoal Skinny Fit",
        category: "jeans",
        price: 1799,
        sizes: [
            "26",
            "28",
            "30",
            "32",
            "34"
        ],
        colors: [
            "Charcoal",
            "Grey"
        ],
        stock: 38,
        images: [
            "/charcoal-grey-skinny-jeans-women.jpg"
        ],
        description: "A versatile charcoal skinny fit jean. Perfect for any occasion.",
        createdAt: new Date()
    },
    {
        id: "jn-004",
        name: "Midnight Straight Leg",
        category: "jeans",
        price: 2099,
        sizes: [
            "26",
            "28",
            "30",
            "32"
        ],
        colors: [
            "Black",
            "Midnight Blue"
        ],
        stock: 25,
        images: [
            "/placeholder.svg?height=600&width=400"
        ],
        description: "Classic straight leg jeans in midnight black. Timeless and comfortable.",
        featured: true,
        newArrival: true,
        createdAt: new Date()
    }
];
const mockOrders = [
    {
        id: "ord-001",
        customerName: "Priya Sharma",
        customerPhone: "+91 98765 43210",
        customerEmail: "priya@email.com",
        customerAddress: "123, MG Road, Bengaluru, Karnataka - 560001",
        items: [
            {
                productId: "ks-001",
                name: "Elegant Noir Kurti Set",
                price: 2499,
                size: "M",
                quantity: 1,
                image: "/placeholder.svg?height=100&width=100"
            }
        ],
        totalAmount: 2499,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "ord-002",
        customerName: "Ananya Patel",
        customerPhone: "+91 87654 32109",
        customerAddress: "456, Park Street, Mumbai, Maharashtra - 400001",
        items: [
            {
                productId: "tp-001",
                name: "Silk Noir Blouse",
                price: 1499,
                size: "S",
                quantity: 2,
                image: "/placeholder.svg?height=100&width=100"
            },
            {
                productId: "jn-001",
                name: "High-Rise Noir Denim",
                price: 2199,
                size: "28",
                quantity: 1,
                image: "/placeholder.svg?height=100&width=100"
            }
        ],
        totalAmount: 5197,
        status: "shipped",
        createdAt: new Date(Date.now() - 86400000),
        updatedAt: new Date()
    }
];
const mockOffers = [
    {
        id: "offer-001",
        title: "New Year Sale",
        description: "Get 20% off on all Kurti Sets",
        discountPercentage: 20,
        startDate: new Date(),
        endDate: new Date(Date.now() + 7 * 86400000),
        active: true
    }
];
function getProductsByCategory(category) {
    return mockProducts.filter((p)=>p.category === category);
}
function getProductById(id) {
    return mockProducts.find((p)=>p.id === id);
}
function getFeaturedProducts() {
    return mockProducts.filter((p)=>p.featured);
}
function getNewArrivals() {
    return mockProducts.filter((p)=>p.newArrival);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/offers/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OffersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function OffersPage() {
    _s();
    const [offers, setOffers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockOffers"]);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingOffer, setEditingOffer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        description: "",
        discountPercentage: "",
        startDate: "",
        endDate: "",
        active: true
    });
    const openAddModal = ()=>{
        setEditingOffer(null);
        setFormData({
            title: "",
            description: "",
            discountPercentage: "",
            startDate: "",
            endDate: "",
            active: true
        });
        setShowModal(true);
    };
    const openEditModal = (offer)=>{
        setEditingOffer(offer);
        setFormData({
            title: offer.title,
            description: offer.description,
            discountPercentage: offer.discountPercentage.toString(),
            startDate: new Date(offer.startDate).toISOString().split("T")[0],
            endDate: new Date(offer.endDate).toISOString().split("T")[0],
            active: offer.active
        });
        setShowModal(true);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const offerData = {
            id: editingOffer?.id || `offer-${Date.now()}`,
            title: formData.title,
            description: formData.description,
            discountPercentage: Number(formData.discountPercentage),
            startDate: new Date(formData.startDate),
            endDate: new Date(formData.endDate),
            active: formData.active
        };
        if (editingOffer) {
            setOffers(offers.map((o)=>o.id === editingOffer.id ? offerData : o));
        } else {
            setOffers([
                offerData,
                ...offers
            ]);
        }
        setShowModal(false);
    };
    const handleDelete = (id)=>{
        if (confirm("Are you sure you want to delete this offer?")) {
            setOffers(offers.filter((o)=>o.id !== id));
        }
    };
    const toggleActive = (id)=>{
        setOffers(offers.map((o)=>o.id === id ? {
                ...o,
                active: !o.active
            } : o));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl md:text-3xl font-semibold",
                                children: "Offers"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/offers/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-1",
                                children: [
                                    offers.filter((o)=>o.active).length,
                                    " active offers"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/offers/page.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/offers/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openAddModal,
                        className: "inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 font-medium hover:bg-foreground/90 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/admin/offers/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            "Add Offer"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/offers/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/offers/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: offers.map((offer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: `bg-background border p-6 ${offer.active ? "border-accent" : "border-border"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                            size: 24,
                                            className: "text-accent"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/offers/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/offers/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>openEditModal(offer),
                                                className: "p-2 hover:bg-secondary transition-colors",
                                                "aria-label": "Edit offer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/offers/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/offers/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDelete(offer.id),
                                                className: "p-2 hover:bg-secondary text-destructive transition-colors",
                                                "aria-label": "Delete offer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/offers/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/offers/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/offers/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/offers/page.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg mb-2",
                                children: offer.title
                            }, void 0, false, {
                                fileName: "[project]/app/admin/offers/page.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground mb-4",
                                children: offer.description
                            }, void 0, false, {
                                fileName: "[project]/app/admin/offers/page.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-bold text-accent",
                                    children: [
                                        offer.discountPercentage,
                                        "% OFF"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/offers/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/offers/page.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-muted-foreground mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        new Date(offer.startDate).toLocaleDateString(),
                                        " - ",
                                        new Date(offer.endDate).toLocaleDateString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/offers/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/offers/page.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleActive(offer.id),
                                className: `w-full py-2 text-sm font-medium border transition-colors ${offer.active ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"}`,
                                children: offer.active ? "Active" : "Inactive"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/offers/page.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        ]
                    }, offer.id, true, {
                        fileName: "[project]/app/admin/offers/page.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/admin/offers/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            offers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12 bg-background border border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                        size: 48,
                        className: "mx-auto mb-4 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/offers/page.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "No offers yet. Create your first offer!"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/offers/page.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/offers/page.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.95,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        exit: {
                            scale: 0.95,
                            opacity: 0
                        },
                        className: "bg-background w-full max-w-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-6 border-b border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold",
                                        children: editingOffer ? "Edit Offer" : "Add New Offer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/offers/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowModal(false),
                                        className: "p-2 hover:bg-secondary transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/offers/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/offers/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/offers/page.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "p-6 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-2",
                                                children: "Title"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/offers/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.title,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        title: e.target.value
                                                    }),
                                                className: "w-full px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground",
                                                placeholder: "New Year Sale",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/offers/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/offers/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-2",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/offers/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: formData.description,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        description: e.target.value
                                                    }),
                                                rows: 2,
                                                className: "w-full px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground resize-none",
                                                placeholder: "Get 20% off on all products",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/offers/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/offers/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-2",
                                                children: "Discount Percentage"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/offers/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                max: "100",
                                                value: formData.discountPercentage,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        discountPercentage: e.target.value
                                                    }),
                                                className: "w-full px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/offers/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/offers/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-2",
                                                        children: "Start Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/offers/page.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: formData.startDate,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                startDate: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/offers/page.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/offers/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-2",
                                                        children: "End Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/offers/page.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: formData.endDate,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                endDate: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-foreground",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/offers/page.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/offers/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/offers/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                id: "active",
                                                checked: formData.active,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        active: e.target.checked
                                                    }),
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/offers/page.tsx",
                                                lineNumber: 249,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "active",
                                                className: "text-sm font-medium",
                                                children: "Active"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/offers/page.tsx",
                                                lineNumber: 256,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/offers/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowModal(false),
                                                className: "flex-1 py-3 border border-border font-medium hover:bg-secondary transition-colors",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/offers/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "flex-1 py-3 bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors",
                                                children: editingOffer ? "Update Offer" : "Add Offer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/offers/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/offers/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/offers/page.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/offers/page.tsx",
                        lineNumber: 173,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/offers/page.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/offers/page.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/offers/page.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(OffersPage, "Tvc3BNhHKp9pdwNNu6zOeJIZSRw=");
_c = OffersPage;
var _c;
__turbopack_context__.k.register(_c, "OffersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_595287d3._.js.map