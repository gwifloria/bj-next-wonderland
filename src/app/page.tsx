"use client";
import { StyleProvider } from "@ant-design/cssinjs";
import { PersonalIntroduction } from "@/components/PersonalIntroduction";
import { useWebVital } from "@/hooks/useWebVitals";
import { AuthProvider } from "@/context";

export default function Home() {
  useWebVital();

  return (
    <StyleProvider hashPriority="high">
      <AuthProvider>
        <main className="flex min-h-screen flex-col items-center justify-between ">
          <PersonalIntroduction></PersonalIntroduction>
        </main>
      </AuthProvider>
    </StyleProvider>
  );
}
