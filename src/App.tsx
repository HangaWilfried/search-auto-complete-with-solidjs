import { type Component, createSignal, For } from 'solid-js';
import { Business, businesses } from "./utils/data";

const App: Component = () => {
  const [query, setQuery] = createSignal("");

  const suggestions = ():Business[] => {
    return businesses
      .filter(
        (business) => business.name.toLowerCase().includes(query().toLowerCase())
      )
      .map((business) => {
        const regex = new RegExp(query(), "gi");
        return {
          ...business,
          name: business.name.replace(regex, `<b class="text-blue-500">$&</b>`)
        }
      });
  };

    return (<>
      <section class="flex justify-center items-center bg-gray-300 min-h-screen">
        <div class="flex flex-col gap-3 min-w-xl p-10 bg-white/95">
          <div class="flex flex-col gap-2">
            <label for="search">Search</label>
            <input
              class="border border-gray-400 pl-2 outline-none focus:border-blue-500 rounded"
              type="text"
              onInput={(e) => setQuery(e.target.value)}
            />
          </div>
          <ul>
            <For each={suggestions()}>
              {(suggestion, index) => (
                <li innerHTML={suggestion.name}></li>
              )}
            </For>
          </ul>
        </div>
      </section>
    </>)
};

export default App;
