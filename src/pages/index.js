import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Booking submitted! You will be contacted shortly.");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <section className="text-center py-10">
        <motion.h1
          className="text-4xl font-bold text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Singh & Juris Partners
        </motion.h1>
        <p className="text-lg mt-4 text-gray-600">
          Advocates & Legal Consultants | Experts in Service, Civil, and Criminal Law
        </p>
        <div className="mt-6">
          <Button
            className="mr-4"
            onClick={() =>
              document.getElementById("booking").scrollIntoView({ behavior: "smooth" })
            }
          >
            Request Consultation
          </Button>
          <Button variant="outline">Call Now</Button>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Practice Areas</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {["Service Matters", "Civil Disputes", "Criminal Law", "Constitutional Law", "Arbitration"].map(
            (area) => (
              <Card key={area} className="rounded-2xl shadow-md">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-blue-700">{area}</h3>
                  <p className="text-sm mt-2 text-gray-600">
                    {area === "Service Matters" && "Suspensions, Promotions, Writs, CAT"}
                    {area === "Civil Disputes" && "Property, Recovery, Injunctions"}
                    {area === "Criminal Law" && "Bail, Quashing, Appeals, NDPS, POCSO"}
                    {area === "Constitutional Law" && "PILs, Article 226/227, Fundamental Rights"}
                    {area === "Arbitration" && "Contractual Disputes, Institutional Arbitration"}
                  </p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-blue-700">Shri Raj Kumar Singh</h3>
              <p className="text-gray-600">
                Senior Counsel for the Union of India with 30+ years at High Court, Lucknow. Expert in Service & Civil Laws.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-blue-700">Yashwin Singh</h3>
              <p className="text-gray-600">
                AOR, High Court Lucknow | LL.B from GGSIPU, 2024 | Expertise in Criminal Defense & Arbitration.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Book a Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="date" type="date" value={formData.date} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="time" type="time" value={formData.time} onChange={handleChange} required className="w-full p-2 border rounded" />
          <textarea name="message" placeholder="Brief about your legal issue" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
          <Button type="submit">Submit Booking</Button>
        </form>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Contact & Offices</h2>
        <ul className="text-gray-700 space-y-2">
          <li><strong>Chamber:</strong> A-306, Advocate Chambers, Block A, High Court, Lucknow (10:00 AM - 6:00 PM)</li>
          <li><strong>Govt Counsel Office:</strong> A.S.G.I, Ground Floor (10:30 AM - 4:30 PM)</li>
          <li><strong>Evening Office:</strong> 3/140 Vikalp Khand 3, Gomti Nagar, Lucknow (6:00 PM - 10:00 PM)</li>
          <li><strong>Phone:</strong> +91-7905317004, 0522-3139696</li>
          <li><strong>Email:</strong> advyashwin.in@gmail.com, contact@singhjuris.com</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 pt-6 border-t mt-10">
        © 2025 Singh & Juris Partners. All rights reserved.
        <br />
        <em>This website does not constitute legal advice. No solicitation is intended.</em>
      </footer>
    </div>
  );
}
