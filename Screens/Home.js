import LiveProductsSection from './Products/Products';

export default function Home({ navigation }) {

    function navigateTo(path, id) {
        navigation.navigate(path, { cId: id });
    }

    return (
        <>
            <LiveProductsSection />
        </>
    );
}