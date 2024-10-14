import React from 'react';
import { useRouter } from 'next/router'; // Use Next.js router

const LandingPage = () => {
  const router = useRouter(); // Use Next.js router

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.overlay}></div>
        <h1 style={styles.headline}>Dish Dash</h1>
        <h2 style={styles.subHeadline}>Your best cooking partner</h2>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => router.push('/register')}>Register</button>
          <button style={styles.buttonOutline} onClick={() => router.push('/sign-in')}>Sign In</button>
        </div>
      </header>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>You can do...</h3>
        <div style={styles.featuresContainer}>
          <div style={styles.featureItem}>
            <h4 style={styles.featureTitle}>Show Your Cooking Process</h4>
            <p style={styles.featureDescription}>
              Go upload and share your cooking journey with the world. Get real-time feedback and engage with food enthusiasts everywhere.
            </p>
          </div>
          <div style={styles.featureItem}>
            <h4 style={styles.featureTitle}>Discover New Recipes</h4>
            <p style={styles.featureDescription}>
              Explore a vast collection of recipes from all around the globe, curated by home cooks and professional chefs.
            </p>
          </div>
          <div style={styles.featureItem}>
            <h4 style={styles.featureTitle}>Join a Foodie Community</h4>
            <p style={styles.featureDescription}>
              Connect with fellow food lovers, share your recipes, and find inspiration for your next dish in a vibrant community.
            </p>
          </div>
          <div style={styles.featureItem}>
            <h4 style={styles.featureTitle}>Step-by-Step Video Tutorials</h4>
            <p style={styles.featureDescription}>
              Watch easy-to-follow videos that break down complex recipes into simple steps, making it easy for anyone to cook like a pro.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Latest Cuisine</h3>
        <div style={styles.cuisineContainer}>
          <div style={styles.cuisineItem}>
            <img src="/pasta.png" alt="Cuisine 1" style={styles.cuisineImage} />
            <p style={styles.cuisineDescription}>Delicious Pasta with a twist of garlic and herbs.</p>
          </div>
          <div style={styles.cuisineItem}>
            <img src="/potato-pancakes.jpg" alt="Cuisine 2" style={styles.cuisineImage} />
            <p style={styles.cuisineDescription}>A potato pancake, served with lingonberry jam and pork.</p>
          </div>
          <div style={styles.cuisineItem}>
            <img src="/souffle.webp" alt="Cuisine 3" style={styles.cuisineImage} />
            <p style={styles.cuisineDescription}>French hot chocolate soufflé.</p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Videos</h3>
        <h3 style={styles.subTitle}>Show your cooking process here</h3>
        <div style={styles.videoContainer}>
          {/* Replace 'your-video-url' with the Mux video URL */}
          <video
            style={styles.videoPlayer}
            controls
            src="your-video-url.mp4"
          ></video>
          <video
            style={styles.videoPlayer}
            controls
            src="your-second-video-url.mp4"
          ></video>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
    padding: '0',
    margin: '0',
  },
  header: {
    position: 'relative',
    backgroundImage: 'url("/background.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Full viewport height for the hero section
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // A Grey overlay for better text contrast
    zIndex: 1,
  },
  headline: {
    fontSize: '4rem',
    margin: '0',
    zIndex: 2,
    fontWeight: 'bold',
  },
  subHeadline: {
    fontSize: '1.8rem',
    margin: '10px 0 20px',
    zIndex: 2,
    fontWeight: 'lighter',
  },
  subTitle: {
    fontSize: '0.875rem', // Smaller font size (14px)
    color: '#555', // Adjust the color if needed
    marginTop: '10px', // Optional: adjust spacing
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    zIndex: 2,
  },
  button: {
    backgroundColor: '#ff6347', // Tomato color
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #ff6347', // Tomato border color
    padding: '10px 22px',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s, color 0.3s',
  },
  section: {
    margin: '60px 0',
    padding: '20px',
  },
  sectionTitle: {
    fontSize: '2rem',
    margin: '0 0 20px',
  },
  featuresContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '20px',
  },
  featureItem: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    width: '100%',
    maxWidth: '700px', // Optional: To limit the width of each item
    margin: '0 auto', // Center-align the item
  },
  featureTitle: {
    fontSize: '1.4rem',
    marginBottom: '10px',
    color: '#ff6347', // Tomato color for emphasis
  },
  featureDescription: {
    fontSize: '1rem',
    color: '#555',
  },
  cuisineContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px', // Space between items
    marginTop: '20px',
    flexWrap: 'nowrap', // Ensures items stay in a single row
  },
  cuisineItem: {
    flex: '1', // Each item will take equal space
    textAlign: 'center',
  },
  cuisineImage: {
    width: '100%', // Ensures the image takes full width of its container
    height: '200px', // Adjust height to maintain aspect ratio or fit your layout
    objectFit: 'cover', // Keeps the image aspect ratio and centers it within the box
    borderRadius: '10px',
  },
  cuisineDescription: {
    marginTop: '10px',
    fontSize: '1rem',
    color: '#555',
  },
  videoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  videoPlayer: {
    width: '100%',
    maxWidth: '400px', // Adjust the size as necessary
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default LandingPage;
