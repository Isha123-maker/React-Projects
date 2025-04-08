import { useState } from "react";
import accordionData from "./data";

export default function Accordion() {
  const [singleSelected, setSingleSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);
  const [allowMultiple, setAllowMultiple] = useState(false);

  function handleSingleSelection(getCurrentId) {
    setSingleSelected(singleSelected === getCurrentId ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let updatedSelection = [...multiSelected];

    if (updatedSelection.includes(getCurrentId)) {
      updatedSelection = updatedSelection.filter((id) => id !== getCurrentId);
    } else {
      updatedSelection.push(getCurrentId);
    }

    setMultiSelected(updatedSelection);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-white p-6">
      {/* Toggle Multi-Selection Button */}
      <button
        onClick={() => setAllowMultiple(!allowMultiple)}
        className="mb-4 bg-yellow-800 text-white px-12 py-6 ml-52 rounded-lg text-2xl font-semibold shadow-md hover:bg-yellow-700 transition-all"
      >
        {allowMultiple ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>

      <div className="w-full max-w-xl">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((dataItem) => (
            <div key={dataItem.id} className="mb-3">
              <div
                onClick={() =>
                  allowMultiple
                    ? handleMultiSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                className="flex justify-between items-center h-[80px] w-[480px] bg-yellow-800  px-10 py-10 cursor-pointer rounded-lg shadow-md hover:bg-yellow-700 transition-all"
              >
                <h3 className="text-white text-2xl font-medium">{dataItem.question}</h3>
                <span className="text-2xl text-white">
                  {allowMultiple
                    ? multiSelected.includes(dataItem.id)
                      ? "−"
                      : "+"
                    : singleSelected === dataItem.id
                    ? "−"
                    : "+"}
                </span>
              </div>

              <div
                className={`bg-yellow-700 text-white px-10 py-10 h-[100px] w-[480px] rounded-lg  transition-all text-2xl font-medium ${
                  (allowMultiple && multiSelected.includes(dataItem.id)) ||
                  (!allowMultiple && singleSelected === dataItem.id)
                    ? "block"
                    : "hidden"
                }`}
              >
                {dataItem.answer}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-yellow-800">Data not Found!</div>
        )}
      </div>
    </div>
  );
}
