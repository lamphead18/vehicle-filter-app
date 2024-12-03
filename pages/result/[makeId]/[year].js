export default function ResultPage({ vehicleModels }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Vehicle Models
        </h1>
        <ul className="space-y-4">
          {vehicleModels.length ? (
            vehicleModels.map((model) => (
              <li
                key={model.Model_ID}
                className="bg-gray-50 p-4 rounded border border-gray-200 shadow-sm"
              >
                {model.Model_Name}
              </li>
            ))
          ) : (
            <li className="text-center text-gray-600">
              No models found for the selected make and year.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { makeId, year } = params;

  const res = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  const data = await res.json();

  return {
    props: { vehicleModels: data.Results || [] },
  };
}
