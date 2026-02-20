import styles from "./AboutPage.module.css";
import BetterImage from "../../components/BetterImage/BetterImage";

export default function AboutPage() {
  return (
    <>
      <section className={styles.section}>
        <h2>About</h2>
        <p>
          This is a simple blog build with <strong>React and Vite</strong> with placeholder content,
          that means some classic lorem ipsum filler text.
        </p>
      </section>

      <div className={styles.section}>
        <h2>Image credits</h2>
        <p>The images used are from Unsplash.</p>

        <div className={styles.image_links}>
          <a className="button" href="https://unsplash.com/photos/london-bridge-london-Q6UehpkBSnQ">
            <BetterImage src="images/london.png" alt="" />
            <span>Photo by Charles Postiaux</span>
          </a>
          <a
            className="button"
            href="https://unsplash.com/photos/statue-of-liberty-new-york-under-white-and-blue-cloudy-skies-PeFk7fzxTdk"
          >
            <BetterImage src="images/new-york.png" alt="" />
            <span>Photo by Ferdinand Stöhr</span>
          </a>
          <a
            className="button"
            href="https://unsplash.com/photos/cityscape-photo-during-daytime-hIKVSVKH7No"
          >
            <BetterImage src="images/new-zealand.png" alt="" />
            <span>Photo by Dan Freeman</span>
          </a>
          <a
            className="button"
            href="https://unsplash.com/photos/eiffel-tower-paris-france-nnzkZNYWHaU"
          >
            <BetterImage src="images/paris.png" alt="" />
            <span>Photo by Chris Karidis</span>
          </a>
        </div>
      </div>
    </>
  );
}
