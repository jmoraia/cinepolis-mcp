import TabItem from "../TabItem/Tabitem"
import MovieCard from "../MovieCard/MovieCard"
import CinemaSelector from '@/app/components/CinemaSelector/CinemaSelector'


const MoviesPage = () => (
  <main>
    <TabItem isActive>Cartelera</TabItem>
    <TabItem>Horarios</TabItem>
    <CinemaSelector />
    <MovieCard />
  </main>
)

export default MoviesPage