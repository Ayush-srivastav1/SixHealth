import React from 'react'

export default function LymphedemaCard() {
  return (
    <div className="bg-white border rounded shadow-sm overflow-hidden">
      <img
        src="https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp"
        alt="Lymphedema care"
        className="w-full h-36 object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold">Lymphedema Care</h4>
        <p className="text-sm text-gray-600 mt-1">Practical strategies, compression guidance, and treatment pathways for managing lymphedema effectively.</p>

        <div className="mt-3 text-xs text-gray-500">
          <div><strong>Author:</strong> DoctorSix Editorial Team</div>
          <div><strong>Reviewed by:</strong> Dr. Maya Patel, MSc (Physiotherapy)</div>
        </div>

        <nav className="mt-3">
          <h5 className="sr-only">Quick links</h5>
          <ul className="text-sm text-gray-700 space-y-2">
            <li><a href="#overview" className="hover:underline">Overview</a></li>
            <li><a href="#management" className="hover:underline">Management & treatment</a></li>
            <li><a href="#compression" className="hover:underline">Compression therapy</a></li>
            <li><a href="#surgery" className="hover:underline">Surgical options</a></li>
            <li><a href="#related" className="hover:underline">Related guides</a></li>
          </ul>
        </nav>

        <div className="mt-4 flex gap-2">
          <a href="#related" className="flex-1 text-center px-3 py-2 bg-blue-600 text-white rounded text-sm">See related guides</a>
          <a href="#faqs" className="px-3 py-2 bg-gray-100 text-gray-800 rounded text-sm">FAQs</a>
        </div>
      </div>
    </div>
  )
}

