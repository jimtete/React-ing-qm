import classes from "./MealsSummary.module.css";

export default function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Great quality food n stuff.</h2>
      <p>
        Chose your favorite meal from our broad selections of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};
