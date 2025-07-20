import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <div className="min-h-screen flex flex-col gap-4 items-center justify-center p-4">
                {/* Sizes */}
                <h2 className="text-lg font-semibold">Sizes</h2>
                <Button title="Small Button" className="text-sm px-3 py-1" />
                <Button title="Medium Button" className="text-base px-4 py-2" />
                <Button title="Large Button" className="text-lg px-6 py-3" />

                {/* Shapes */}
                <h2 className="text-lg font-semibold mt-6">Shapes</h2>
                <Button title="Rounded-sm" className="rounded-sm" />
                <Button title="Rounded-md" className="rounded-md" />
                <Button title="Rounded-full" className="rounded-full" />
            </div>
        </div>
    )
}
export default Landing