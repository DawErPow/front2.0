'use client';
import { useGetDataByCategory } from "../api/api-hooks"; 
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config"; 
import { Preloader } from "../Preloader/Preloader"; 

export default function shooter() {
    const newGames = useGetDataByCategory(endpoints.games, "shooter");
    return (
      <main className="main-inner">
      {newGames ? <CardsListSection id="shooter" title="Шутеры" data={newGames} /> : <Preloader />}
    </main>
    );
  }