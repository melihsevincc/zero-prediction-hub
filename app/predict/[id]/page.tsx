type PredictPageProps = {
    params: { id: string };
};

export default async function PredictPage({ params }: PredictPageProps) {
    return (
        <div className="p-6">
            Prediction Detail: {params.id}
        </div>
    );
}
