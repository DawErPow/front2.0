'use client';
import { endpoints } from "@/app/api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function TDS() {
    const newGames = useGetDataByCategory(endpoints.games, "TDS");
    return (
      <main className="main-inner">
      {newGames ? <CardsListSection id="TDS" title="TDS" data={newGames} /> : <Preloader />}
    </main>
    );
  }