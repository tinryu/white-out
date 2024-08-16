import { useState } from "react";

const TabDrop = (props: any) => {
  const [isOpening, setOpening] = useState(true);
  const isEpisode = props.isEpisode;

  const toggleButton = () => {
    setOpening(!isOpening);
  };

  return (
    <>
      <button
        onClick={toggleButton}
        className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-sky-900 bg-sky-300 dark:text-sky-400 dark:bg-sky-900 rounded-lg hover:bg-sky-200"
      >
        <span>{props.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className={
            isOpening
              ? "transform rotate-180 w-5 h-5 text-sky-500"
              : "w-5 h-5 text-sky-500"
          }
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {isOpening ? (
        <div className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-gray-200">
          <div className="w-full px-2 sm:px-0">
            {isEpisode ? (
              <>
                <div className="py-2 uppercase font-bold">
                  Server:
                  <span className="text-violet-500">
                    {props.episodes.server_name}
                  </span>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-16 gap-2">
                  <ListEpisodes episodes={props.episodes} />
                </div>
              </>
            ) : (
              <>
                <div
                  className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl"
                  role="tablist"
                  aria-orientation="horizontal"
                >
                  <button
                    className="p-2 text-sm leading-5 font-medium text-blue-700 dark:text-blue-500 rounded-lg bg-white dark:bg-slate-900 shadow"
                    id="headlessui-tabs-tab-10"
                    role="tab"
                    type="button"
                    aria-selected="true"
                    tabIndex={0}
                  >
                    {props.episodes.server_name}
                  </button>
                </div>
                <div className="pt-2">
                  <div
                    id="headlessui-tabs-panel-11"
                    role="tabpanel"
                    tabIndex={0}
                  >
                    <ListLinks episodes={props.episodes} type={props.type} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

function ListEpisodes(props: any) {
  const arr = props.episodes;
  const episodes = arr.server_data;

  return (
    <>
      {episodes.map(
        (episode: {
          slug: null | undefined;
          name: string | undefined;
          filename: string | undefined;
          link_embed: string | undefined;
          link_m3u8: string | undefined;
        }) => (
          <a
            href={episode.link_embed}
            target="_blank"
            rel="noopener noreferrer"
            key={episode.slug}
            className="text-center overflow-hidden overflow-ellipsis whitespace-nowrap px-5 py-1 rounded shadow-md bg-gray-400 text-gray-50 hover:bg-violet-500 dark:bg-slate-600 dark:hover:bg-violet-600"
          >
            {episode.name}
          </a>
        )
      )}
    </>
  );
}

function ListLinks(props: any) {
  const arr: any = props.episodes;
  const type: number = props.type;
  const episodes = arr.server_data;
  let result: string = "";

  episodes.map((el: any) => {
    result +=
      el.name + `|` + (type === 1 ? el.link_embed : el.link_m3u8) + `\n`;
  });

  return (
    <textarea
      className="form-control block w-full px-3 py-1.5 text-sm font-normal bg-white dark:bg-slate-900 bg-clip-padding border border-solid border-slate-700 rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none"
      rows={10}
      value={result}
      readOnly
    ></textarea>
  );
}

export default TabDrop;
