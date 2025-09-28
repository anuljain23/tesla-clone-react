import styled from 'styled-components'
import Section from './Section'
import { useSelector } from 'react-redux'
import { selectCars } from '../features/car/carSlice'
import { selectSolar } from '../features/solar/solarSlice'
import CarsSlider from './CarsSlider'

const Home = () => {
    const cars = useSelector(selectCars)
    const solar = useSelector(selectSolar)
    return (
        <Container>
            {/* Section for Cars */}
            <CarsSlider cars={cars} />
            {/* Section for Solar */}
            {
                solar && solar.map((item, index) => (
                    <Section
                        key={index}
                        data={item}
                    />
                ))
            }
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
`

export default Home