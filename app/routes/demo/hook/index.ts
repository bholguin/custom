import useProviders from "~/api/providers"

export const useDemo = () => {

    const { useProductsProvider } = useProviders()
    const { getProducts } = useProductsProvider()

    const getDataProducts = async () => {
        try {
            const res = await getProducts()
            return res.data
        } catch (e: any) {
            throw e;
        }
    }

    const testClick = () => {
        alert('i am doing click')
    }

    return {
        testClick,
        getDataProducts
    }
}