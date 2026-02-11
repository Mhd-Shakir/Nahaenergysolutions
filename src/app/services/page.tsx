"use client";
import { Metadata } from "next";
import ServicesPage from "@/views/ServicesPage";

// This would be better as a server component to use metadata
// For now, we'll add it via the Head component in the ServicesPage view
export default function Page() {
    return <ServicesPage />;
}
