import React from 'react';
import './about.css'

export function About() {
  return (
    <main className="aboutMain">
      <div>
        <img src="https://thumbs.dreamstime.com/b/row-vintage-books-background-web-banner-free-copy-space-reading-education-literature-book-fair-concept-170940371.jpg" alt="aboutBanner" />
            <div id="about">
                <h2>~ About us ~</h2>
                Koob is a fresh, innovative take on media rating site, allowing the user essentially complete freedom to upload titles and works and compile them into lists, whether books, poetry, comics, and more. The ease of upload allows any user to create and rate entries immediately after reading them, as well as compile a comprehensive list of anything they might have already read, giving users a hub for their literature and a way to track and rate their literary journey. Unlike traditional review sites that limit what can be submitted or emphasize only popular titles, Koob offers complete freedom for uploads, ensuring that every piece of literature has a place, no matter how niche.

                Koob also allows users to search for others' profiles, opening up a way for readers to be exposed to new literature and writers, as well as see others' thoughts on those titles. The comment feature gives a more immersive experience to the user, in addition to the numerical rating system, further giving freedom to the user to create the lists and rankings that might only be inside of their heads.
            </div>
        <hr/>
        <p>For taking the time to see what Koob is all about, here is a book recommendation for you to try! </p>
        <p>[Third Party book recommendation goes here]</p>
        </div>
    </main>
  );
}