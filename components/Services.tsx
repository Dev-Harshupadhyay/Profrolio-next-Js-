"use client";

import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        badge="Capabilities"
        title="Solutions built for scale &amp; speed."
        description="Comprehensive technical capabilities designed to take digital ideas from concept to production deployment."
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.number} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
