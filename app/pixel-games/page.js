'use client';
import { useGetDataByCategory } from "../api/api-hooks"; 
import { endpoints } from "../api/config"; 
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../Preloader/Preloader"; 

export default function pixel() {
    const newGames = useGetDataByCategory(endpoints.games, "pixel");
    return (
      <main className="main-inner">
      {newGames ? <CardsListSection id="pixel" title="Пиксельные" data={newGames} /> : <Preloader />}
    </main>
    );
  }