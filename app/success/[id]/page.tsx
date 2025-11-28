type SuccessPageProps = {
  params: { id: string };
};

export default async function SuccessPage({ params }: SuccessPageProps) {
  return (
    <div className="p-6">
      Prediction Success: {params.id}
    </div>
  );
}
