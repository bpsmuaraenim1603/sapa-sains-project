"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const features = [
  "Intuitive Kanban boards",
  "Real-time collaboration",
  "Custom workflows",
  "Advanced task tracing",
];

export const LandingPage: React.FC = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-background/95">
      <div className="pt-32 pb-20">
        <div className="max-w-[800px] mx-auto text-center space-y-8 mb-20">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                SAPA SAINS
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                Satu Pegawai Satu Instansi
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Mengatur tugas, memantau progres, dan mengelola hubungan kerja dan komunikasi antar instansi dengan mudah.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/projects" className="gap-2">
                  Lihat progress <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <>
                <Button size="lg" asChild>
                  <Link href="/create-account" className="gap-2">
                    Ayo Mulai <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/login">Sign in</Link>
                </Button>
              </>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-4 max-w-[600px] mx-auto">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-linear-to-tr from-primary/10 via-primary/5 to-background"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-160 w-160 rounded-full bg-primary/5 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};
