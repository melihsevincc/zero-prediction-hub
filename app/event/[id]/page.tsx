type EventPageProps = {
  params: { id: string };
};

export default async function EventPage({ params }: EventPageProps) {
  return (
    <div className="p-6">
      Event Status: {params.id}
    </div>
  );
}
