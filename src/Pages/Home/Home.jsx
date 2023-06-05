import Categories from '../../components/Categories/Categories';
import Container from '../../components/Container/Container';
import Rooms from '../../components/Rooms/Rooms';

const Home = () => {
    return (
        <Container>
            <Categories></Categories>
            <Rooms></Rooms>
        </Container>
    );
};

export default Home;