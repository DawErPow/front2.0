'use client';
import { useGetDataByCategory } from "../api/api-hooks"; 
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config"; 
import { Preloader } from "../Preloader/Preloader"; 

export default function popular() {
    const newGames = useGetDataByCategory(endpoints.games, "popular");
    return (
      <main className="main-inner">
      {newGames ? <CardsListSection id="popular" title="Популярные" data={newGames} /> : <Preloader />}
    </main>
    );
  }