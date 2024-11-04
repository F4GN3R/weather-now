export default function Switch() {
  return (
    <div className="inline-flex items-center">
      <div className="relative inline-block w-8 h-4 cursor-pointer rounded-full">
        <input
          type="checkbox"
          id=":R6hj9km:"
          className="peer appearance-none w-8 h-4 absolute bg-blue-gray-100 rounded-full cursor-pointer transition-colors duration-300 checked:bg-indigo-500 peer-checked:border-indigo-500 peer-checked:before:bg-indigo-500"
        />
        <label
          htmlFor=":R6hj9km:"
          className="bg-white w-5 h-5 border border-blue-gray-100 rounded-full shadow-md absolute top-2/4 -left-1 -translate-y-2/4 peer-checked:translate-x-full transition-all duration-300 cursor-pointer before:content[''] before:block before:bg-blue-gray-500 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:transition-opacity before:opacity-0 hover:before:opacity-10 peer-checked:border-indigo-500 peer-checked:before:bg-indigo-500"
        >
          <div
            className="inline-block top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-5 rounded-full"
            // style="position: relative; overflow: hidden;"
          ></div>
        </label>
      </div>
    </div>
  );
}
