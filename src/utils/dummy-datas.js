import Categories from "../constants/Categories";
import Movie from "../models/Movie";

const Movies = [
  new Movie(
    1,
    "John Wick",
    Categories.ACTION,
    "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg",
    "Chad Stahelski",
    "2014",
    "John Wick is an American neo-noir action-thriller media franchise created by screenwriter Derek Kolstad and owned by Lionsgate. Keanu Reeves plays John Wick, a retired hitman seeking vengeance for the killing of the dog given to him by his recently deceased wife and the theft of his car.",
    true,
    false
  ),
  new Movie(
    2,
    "Scoob!",
    Categories.COMEDY,
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQxiiNbYp5tnl24pEnG-hAx7JpLXK3sSXvowEG9uCwEexOLLRg0",
    "Tony Cervone",
    "2020",
    "Scoob! is a 2020 American computer-animated mystery comedy film based on Hanna-Barbera's Scooby-Doo franchise, produced by the Warner Animation Group and distributed by Warner Bros. Pictures. The film is directed by Tony Cervone from a screenplay by Adam Sztykiel, Jack Donaldson, Derek Elliott, and Matt Lieberman, and a story by Lieberman, Eyal Podell, and Jonathon E. Stewart. It stars the voices of Frank Welker as the titular character (the only current television cast member to feature), as well as Will Forte, Gina Rodriguez, Zac Efron, and Amanda Seyfried as Shaggy, Velma, Fred and Daphne respectively, and also features the voices of Mark Wahlberg, Jason Isaacs, Kiersey Clemons, Ken Jeong and Tracy Morgan as other Hanna-Barbera animated characters.",
    false,
    false
  ),
  new Movie(
    3,
    "A trip to the moon",
    Categories.FANTASY,
    "https://www.filmsite.org/posters/triptomoon.jpg",
    "Georges Méliès",
    "1902",
    "A Trip to the Moon (French: Le Voyage dans la Lune)[a] is a 1902 French adventure short film directed by Georges Méliès. Inspired by a wide variety of sources, including Jules Verne's 1865 novel From the Earth to the Moon and its 1870 sequel Around the Moon, the film follows a group of astronomers who travel to the Moon in a cannon-propelled capsule, explore the Moon's surface, escape from an underground group of Selenites (lunar inhabitants), and return to Earth with a captive Selenite. Its ensemble cast of French theatrical performers is led by Méliès himself as main character Professor Barbenfouillis. The film features the overtly theatrical style for which Méliès became famous.",
    true,
    true
  ),
  new Movie(
    4,
    "Slender Man",
    Categories.MYSTERY,
    "https://upload.wikimedia.org/wikipedia/en/a/a4/Slender_Man_theatrical_poster.png",
    "Sylvain White",
    "2018",
    "Slender Man is a 2018 American supernatural horror film directed by Sylvain White and written by David Birke, based on the character of the same name. The film stars Joey King, Julia Goldani Telles, Jaz Sinclair, Annalise Basso, Alex Fitzalan, and Taylor Richardson, with Javier Botet as the title character.",
    false,
    false
  ),
  new Movie(
    5,
    "Rampage ",
    Categories.ACTION,
    "https://upload.wikimedia.org/wikipedia/en/6/6b/Rampage_teaser_film_poster.jpg",
    "Brad Peyton",
    "2018",
    "Rampage is a 2018 American science fiction monster film directed by Brad Peyton, loosely based on the video game series of the same name by Midway Games. The film stars Dwayne Johnson, Naomie Harris, Malin Åkerman, Jake Lacy, Joe Manganiello, and Jeffrey Dean Morgan. It follows a primatologist who must team up with George, an albino gorilla who turns into a raging creature of enormous size as a result of a rogue experiment, to stop two other mutated animals from destroying Chicago.",
    true,
    true
  ),
  new Movie(
    6,
    "Titanic",
    Categories.ROMANCE,
    "https://upload.wikimedia.org/wikipedia/en/1/19/Titanic_%28Official_Film_Poster%29.png",
    "James Cameron",
    "1997",
    "Titanic is a 1997 American epic romance and disaster film directed, written, co-produced, and co-edited by James Cameron. Incorporating both historical and fictionalized aspects, it is based on accounts of the sinking of the RMS Titanic, and stars Leonardo DiCaprio and Kate Winslet as members of different social classes who fall in love aboard the ship during its ill-fated maiden voyage.",
    true,
    true
  ),
  new Movie(
    7,
    "Crawl ",
    Categories.THRILLER,
    "https://upload.wikimedia.org/wikipedia/en/3/3d/CrawlMoviePoster.jpg",
    "Alexandre Aja",
    "2019",
    "Crawl is a 2019 American natural horror film directed by Alexandre Aja from a screenplay written by brothers Michael and Shawn Rasmussen. Produced by Sam Raimi, the plot follows Kaya Scodelario and Barry Pepper as a daughter and father who, along with their dog, are hunted by alligators after being trapped in their home during a Category 5 hurricane in Florida.",
    true,
    false
  ),
];

export default Movies;
