import AssamMap from '@/components/AssamMap/AssamMap';

export default function AssamMapPage() {
    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold text-white mb-8">Assam Map Preview</h1>
            <div className="w-full max-w-4xl h-[600px] border border-neutral-800 rounded-3xl bg-neutral-900/50 backdrop-blur-sm overflow-hidden p-8 shadow-2xl">
                <AssamMap />
            </div>
            <p className="mt-8 text-neutral-400 max-w-lg text-center">
                This is a fully responsive, interactive SVG map of Assam. You can customize the fill color, stroke color, and hover effects via props.
            </p>
        </div>
    );
}
