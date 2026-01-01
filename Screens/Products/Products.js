import { useEffect, useState } from "react";
import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import ProductCard from "./ProductCard";
import { isAfter } from "date-fns";

const liveProductsMetaData = {
    header: 'Live Products',
    subHeader: 'These products are actively collecting orders. Join others to unlock better prices!'
}

const comingSoonProductsMetaData = {
    header: 'Coming Soon',
    subHeader: 'New products launching soon. Be the first to know when they go live!'
}

function LiveProductsHeader({ header, subHeader }) {
    return (
        <View style={styles.header}>
            <Text style={styles.h1}>{header}</Text>
            <Text style={styles.h2}>{subHeader}</Text>
        </View>)
}

function LiveFooterHeader({ isLoading }) {
    if (isLoading) {
        return <View style={styles.header}>
            <Text style={styles.h1}> {isLoading ? 'Loading...' : ''}</Text>
        </View>
    } else {
        return null;
    }
}

export default function LiveProductsSection() {

    const [liveProducts, setLiveProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        async function fetchLiveProducts() {
            setIsLoading(true);
            try {
                const response = await fetch('https://bulkbuy-rumt.onrender.com/product/allProducts');
                const data = await response.json();
                setIsLoading(false);
                const liveProductsList = [];
                const comingSoonProductsList = [];
                data.forEach((product) => {
                    if (isAfter(product.productLiveTime, new Date())) {
                        comingSoonProductsList.push(product);
                    } else {
                        liveProductsList.push(product);
                    }
                });
                setLiveProducts({ liveProductsList, comingSoonProductsList });
            } catch (error) {
                setIsLoading(false);
            }
        }
        fetchLiveProducts();
        return () => { console.log('Dest....') }
    }, []);

    function onListScroll(event) {
        // console.log(event.on);
    }

    function endScrollingDrag(e) {
        console.log('End Dragged');
    }

    function topScrollingDrag() {
        console.log('Top Dragged');
    }

    return (
        <ScrollView>
            <FlatList
                scrollEnabled={false}
                data={liveProducts?.liveProductsList}
                ListHeaderComponent={() => <LiveProductsHeader header={liveProductsMetaData.header} subHeader={liveProductsMetaData.subHeader} />}
                ListFooterComponent={() => <LiveFooterHeader isLoading={isLoading} />}
                renderItem={(item) => <ProductCard key={item.index} item={item.item} isLive={true} />}
                style={styles.page}
                onScroll={onListScroll}
                onScrollEndDrag={endScrollingDrag}
                onScrollTop={topScrollingDrag}
            />
            <FlatList
                scrollEnabled={false}
                data={liveProducts?.comingSoonProductsList}
                ListHeaderComponent={() => <LiveProductsHeader header={comingSoonProductsMetaData.header} subHeader={comingSoonProductsMetaData.subHeader} />}
                ListFooterComponent={() => <LiveFooterHeader isLoading={isLoading} />}
                renderItem={(item) => <ProductCard key={item.index} item={item.item} isLive={false} />}
                style={styles.page}
                onScroll={onListScroll}
                onScrollEndDrag={endScrollingDrag}
                onScrollTop={topScrollingDrag}
            />
        </ScrollView>
    );
}

const TEXT = "#0F172A";
const MUTED = "#64748B";

const styles = StyleSheet.create({
    page: {
        paddingVertical: 18,
        paddingHorizontal: 14,
        backgroundColor: "#e5e6e7ff",
    },
    header: {
        marginBottom: 14
    },
    h1: {
        fontSize: 18,
        fontWeight: "500",
        color: TEXT,
        marginBottom: 6,
        textAlign: "center"
    },
    h2: {
        fontSize: 16,
        color: MUTED,
        lineHeight: 22,
        textAlign: "center"
    }
});