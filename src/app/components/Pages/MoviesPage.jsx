import TabItem from "../TabItem/Tabitem"
import MovieCard from "../MovieCard/MovieCard"


const MoviesPage = () => (
  <main>
    <TabItem isActive>Cartelera</TabItem>
    <TabItem>Horarios</TabItem>
    <MovieCard />
  </main>
)

export default MoviesPage