<<<<<<< HEAD
'use client';
import { endpoints } from "./api/config";
import { Banner } from "./components/Banner/Banner";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";
=======
"use client"
import {Banner} from "./components/Banner/Banner";
>>>>>>> 280033fbdac0bcf3af848e4b90e58f2a6a8aed66
import { Promo } from "./components/Promo/Promo";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "./api/api-hooks";
import { endpoints } from "./api/config";
import { Preloader } from "./Preloader/Preloader";

export default function Home() {
  const popularGames = useGetDataByCategory (endpoints.games, "popular");
  const newGames = useGetDataByCategory (endpoints.games, "new");
  return (
    <main>
      <Banner />
      {popularGames && newGames ? (
        <>
        <CardsListSection id='popular' title='Популярные' data={popularGames} type="slider" />
        <CardsListSection id='new' title='Новинки' data={newGames} type="slider" />
        </>
      ) : (
        <Preloader />
      )}
      <Promo />
    </main>
  );
}







