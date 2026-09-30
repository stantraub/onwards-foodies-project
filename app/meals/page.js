import Link from 'next/link';
import { Suspense } from 'react';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export default function MealsPage() {
    return <>
        <header className={classes.header}>
            <h1>
                Delicious Meals, created <span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose your favorite meals and cook them yourself</p>
            <p className={classes.cta}>
                <Link href="/meals/share">Share your favorite meals</Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
             <Meals />
            </Suspense>
        </main>
    </>
}