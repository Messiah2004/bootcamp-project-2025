import Image from "next/image";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.pageTitle}>Hello Universe!</h1>

      <section className={styles.about}>
        <div className={styles.aboutImage}>
          <Image
            src="/IMG_4051.jpg"
            alt="A portrait of me!"
            width={420}
            height={420}
            priority
          />
        </div>

        <div className={styles.aboutText}>
          <p className={styles.body}>
            My name is Messiah Afzalyar, and I’m a 3rd-year Electrical
            Engineering transfer student from Patterson, California.
            <br />
            <br />
            I am deeply passionate about engineering, traveling, and combat
            sports. I’ve had the honor and privilege of traveling all around the
            world and have had the opportunity to meet famous fighters like Mike
            Tyson and Khabib Nurmagomedov.
            <br />
            <br />I also enjoy music production, reading, and traveling abroad.
          </p>
          <p>
            <strong>My Mission:</strong>
          </p>
          <ul>
            <li>Surround myself with talented &amp; inspiring people</li>
            <li>Make a positive impact on the world</li>
            <li>Never stop learning</li>
          </ul>
        </div>
      </section>

      <section className={styles.lowerTwoColumns}>
        <div className={styles.column}>
          <h2 className={styles.center}>Recent Travel Destination</h2>
          <Image
            src="/ShanghaiPearlTower.jpg"
            alt="Oriental Pearl Tower"
            width={800}
            height={534}
            className={styles.responsiveImage}
          />
          <p>
            My most recent trip was a two-week adventure across China! I visited
            Beijing, Xi’an, Chengdu, Leshan, Chongqing, and Shanghai (in that
            order). The blend of ancient culture and cutting-edge modernity made
            it an unforgettable experience.
          </p>
        </div>

        <div className={styles.column}>
          <h2 className={styles.center}>Currently Obsessed With</h2>
          <div className={styles.space}>
            <Image
              src="/star-field-space-nebulae-gas-congestion_941265-18868.jpg"
              alt="Red nebula"
              width={800}
              height={534}
              className={styles.responsiveImage}
            />
            <p>
              Space aesthetics have been my current obsession. This red nebula
              reminds me of mystery, power, and a type of unique beauty only
              found in the unknown. The exploration of the unknown inspires both
              my tech work and my personal philosophy of eternal wonder.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
