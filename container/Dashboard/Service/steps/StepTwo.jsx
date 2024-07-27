import { SearchIconFlipped } from "@/assets";

export default function StepTwo({
  selectedService,
  handleNext,
  searchService,
  setSearchService,
}) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="search_form">
          <i>
            <SearchIconFlipped />
          </i>
          <input
            type="text"
            value={searchService}
            required
            placeholder="Search Sub Category"
            onChange={(e) => setSearchService(e.target.value)}
          />
        </div>
      </form>
      <div className="questions">
        <div>
          {selectedService.questions.map((question, index) => (
            <label key={index}>
              <p>{question}</p>
              <input type="radio" />
            </label>
          ))}
        </div>

        <button className="black-button" onClick={handleNext}>
          Continue
        </button>
      </div>
    </>
  );
}
