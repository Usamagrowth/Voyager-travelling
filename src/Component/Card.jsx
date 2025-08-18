export const Card = () => {
    <article
  className="relative bg-[url('https://turmet-react.vercel.app/assets/img/team/01.jpg')] bg-cover bg-center h-[350px] w-full max-w-[300px] mt-8 mx-auto rounded-2xl  shadow-lg "
>
  {/* White info box */}
  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-xl px-6 py-8 w-[90%] shadow-md">
    <h3 className="text-[1.5rem] font-middle text-gray-900">Esther Howard</h3>
    <p className="text-1.8xl font-normal text-gray-500">Tourist Guide</p>

    {/* Share button */}
    <button className="absolute -top-4 right-4 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-blue-600 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 12v.01M12 4v.01M12 20v.01M20 12v.01M16.24 7.76l-8.48 8.48M7.76 7.76l8.48 8.48"
        />
      </svg>
    </button>
  </div>
</article>
}
export default Card