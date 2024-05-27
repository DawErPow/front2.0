'use client';
import { useGetDataByCategory } from "../api/api-hooks"; 
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config"; 
import { Preloader } from "../Preloader/Preloader"; 

export default function runner() {
    const newGames = useGetDataByCategory(endpoints.games, "runner");
    return (
      <main className="main-inner">
      {newGames ? <CardsListSection id="runner" title="Ранееры" data={newGames} /> : <Preloader />}
    </main>
    );
  }