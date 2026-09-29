import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export default async function MealsPage() {
    const meals = await getMeals();

    return <>
        <header className={classes.header}></header>
        <h1>
            Delicious Meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p> Choose your favorite meals and cook them yourself</p>
        <p className={classes.cta}>
            <Link href="/meals/share">Share you favorite meals
            </Link>
        </p>
        <main className={classes.main}>
            <MealsGrid meals={meals} />
        </main>
    </>
}