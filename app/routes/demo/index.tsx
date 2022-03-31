import { LoaderFunction, useLoaderData } from "remix"
import Button from "~/components/Button"
import { useDemo } from "./hook"


export const loader: LoaderFunction = async () => {
    const { getDataProducts } = useDemo()
    const res = await getDataProducts()
    return res;
}

const Demo = (): JSX.Element => {
    const { testClick } = useDemo()
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <div> Esta es la pagina de demo</div>
            <Button onClick={testClick}>test</Button>
        </div>
    )
}

export default Demo