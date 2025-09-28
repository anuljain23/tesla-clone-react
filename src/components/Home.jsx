import styled from 'styled-components'
import Section from './Section'

const cars = [
    {
        title: 'CYBERTRUCK',
        description: '0% APR with FSD (Supervised) Purchase Ends September 30',
        backgroundImg: 'cybertruck.jpg',
        leftBtnText: 'Custom Order',
        rightBtnText: 'Existing Inventory',
        tag: 'Utility Truck',
    },
    {
        title: 'Model S',
        description: 'Now Includes Luxe Package With FSD (Supervised) and More',
        backgroundImg: 'model-s.jpg',
        leftBtnText: 'Custom Order',
        rightBtnText: 'Existing Inventory',
        tag: 'Luxury Sedan',
    },
    {
        title: 'Model Y',
        description: 'Now Includes Luxe Package With FSD (Supervised) and More',
        backgroundImg: 'model-y.jpg',
        leftBtnText: 'Custom Order',
        rightBtnText: 'Existing Inventory',
        tag: 'Midsize SUV',
    },
    {
        title: 'Model 3',
        description: 'Lease From $ 349/mo',
        backgroundImg: 'model-3.jpg',
        leftBtnText: 'Custom Order',
        rightBtnText: 'Existing Inventory',
        tag: 'Sports Sedan',
    },
    {
        title: 'Model X',
        description: '3.99% APR Available',
        backgroundImg: 'model-x.jpg',
        leftBtnText: 'Custom Order',
        rightBtnText: 'Existing Inventory',
        tag: 'Luxury SUV',
    }
]

const solar = [
    {
        title: 'Solar Panels',
        description: 'Use Solar Energy to Power Your Home and Charge Your Tesla',
        backgroundImg: 'solar-panel.jpg',
        leftBtnText: 'Order Now',
        rightBtnText: 'Learn More',
    },
    {
        title: 'Solar Roof',
        description: 'Generate Clean Energy With Your Roof',
        backgroundImg: 'solar-roof.jpg',
        leftBtnText: 'Order Now',
        rightBtnText: 'Learn More',
    },
    {
        title: 'Powerwall',
        description: 'Keep Your Lights On During Outages',
        backgroundImg: 'powerwall.jpg',
        leftBtnText: 'Order Now',
        rightBtnText: 'Learn More',
    },
    {
        title: 'Megapack',
        description: 'Massive Batteries for Massive Energy Support',
        backgroundImg: 'megapack.jpg',
        rightBtnText: 'Learn More',
    },
]

const Home = () => {
    return (
        <Container>
            {/* Section for Cars */}
            {
                cars && cars.map((car, index) => (
                    <Section
                        key={index}
                        data={car}
                    />
                ))
            }
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