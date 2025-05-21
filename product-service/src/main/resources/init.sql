CREATE TABLE IF NOT EXISTS product
(
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price DOUBLE PRECISION,
    imageurl VARCHAR(255)
    );

INSERT INTO product (id, name, description, price, imageurl)
VALUES (1, 'Shoe Cleaner', 'Reinigt deine Schuhe gründlich und entfernt selbst hartnäckigen Schmutz. Unser Shoe Cleaner wurde speziell für empfindliche Materialien wie Wildleder, Mesh und Leder entwickelt. Die Formel ist biologisch abbaubar und sicher für die Umwelt. Schon eine kleine Menge reicht aus, um deine Schuhe wieder wie neu aussehen zu lassen. Perfekt für Sneaker-Liebhaber und alle, die ihre Schuhe mit Stolz tragen.', 15.50, '/images/Shoe_Cleaner.png'),
       (2, 'Waterproof Spray', 'Schützt deine Schuhe effektiv vor Wasser, Schnee und Flecken. Unser Spray legt eine unsichtbare Schutzschicht über das Material, ohne die Atmungsaktivität zu beeinträchtigen. Ideal für Alltag, Sport und Outdoor-Aktivitäten. Einmal aufgetragen, hält der Schutz mehrere Wochen an. Auch für Rucksäcke, Jacken und Caps geeignet. Dein Must-Have für die nasse Jahreszeit.', 25.50, '/images/splash-protectors.jpeg'),
       (3, 'Shoe Polish', 'Verleiht deinem Schuhwerk intensiven Glanz und pflegt das Leder nachhaltig. Die cremige Formel schützt vor Rissen, Feuchtigkeit und Verfärbungen. Einfach mit einem Tuch auftragen, einpolieren – und deine Schuhe sehen aus wie neu. Geeignet für Glattleder aller Farben. Die ideale Pflege für Business-Schuhe, elegante Sneaker oder klassische Lederboots.', 8.95, '/images/Shoe-polish.png'),
       (4, 'Shoe Laces', 'Langlebige Schnürsenkel mit verstärktem Kern für extra Stabilität. Sie bieten festen Halt und lösen sich nicht von selbst. Ideal für Sport-, Freizeit- und Arbeitsschuhe. Erhältlich in mehreren Farben und Längen, passend zu jedem Style. Die wasserabweisende Beschichtung sorgt für Langlebigkeit auch bei Regen und Schnee. Dein Schuh, dein Statement.', 801.75, '/images/shoelace.png'),
       (5, 'Shoe Insoles', 'Unsere ergonomisch geformten Einlegesohlen bieten optimalen Komfort und Dämpfung für jeden Schritt. Das atmungsaktive Material verhindert Geruchsbildung und sorgt für ein angenehmes Fußklima – den ganzen Tag. Perfekt für lange Arbeitstage, Sport oder Spaziergänge. Reduziert Druckstellen und unterstützt eine gesunde Fußhaltung. Für Damen und Herren geeignet.', 4.95, '/images/Shoe-sole.png');
