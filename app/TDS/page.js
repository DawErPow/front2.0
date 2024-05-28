'use client';
import { useGetDataByCategory } from "../api/api-hooks"; 
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config"; 
import { Preloader } from "../Preloader/Preloader"; 

export default function TDS() {
    const newGames = useGetDataByCategory(endpoints.games, "TDS");
    return (
      <main className="main-inner">
      {newGames ? <CardsListSection id="TDS" title="TDS" data={newGames} /> : <Preloader />}
    </main>
    );
  }