import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    async function fetchTours() {
      try {
        const response = await fetch('/api/tours');
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error('Error de busqueda tours:', error);
      }
    }

    fetchTours();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.banner}>
        <h1>Explora Nuestros Destinos</h1>
        <p>Encuentra los mejores tours para tus próximas vacaciones</p>
        
        <button  className={styles.botonct}  >Ver Destinos</button>
      </header>

      <section className={styles.carouselSection}>
        <h2>Destinos Populares</h2>
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
          {tours.map(tour => (
            <div key={tour.id}>
              <img src={tour.image} alt={tour.title} />
              <p className="legend">{tour.title}</p>
            </div>
          ))}
        </Carousel>
      </section>

      <section className={styles.Tourspopular}>
        <h2 className={styles.h2}>Explora Nuestros Tours</h2>
        <div className={styles.toursGrid}>
          {tours.map(tour => (
            <div key={tour.id} className={styles.tourCard}>
              <img src={tour.image} alt={tour.title} className={styles.tourImage} />
              <div className={styles.tourDetails}>
                <h3>{tour.title}</h3>
                <p>{tour.price}</p>
                <button className={styles.botonct}>Reservar Ahora</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2024 Tu Agencia de Turismo.</p>
      </footer>
    </div>
  );
}
