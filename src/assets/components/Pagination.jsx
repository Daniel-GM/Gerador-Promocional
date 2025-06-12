const Pagination = ({ total, perPage, setPage, currentPage }) => {
  const maxPages = Math.ceil(total / perPage)
  const pages = Array.from({ length: maxPages }, (_, index) => index + 1)

  const handlePageChange = (page) => {
    setPage(page)
  }

  const handleChangePreviousPage = () => {
    const newCurrentPage = currentPage !== 1 ? currentPage - 1 : currentPage
    handlePageChange(newCurrentPage)
  }

  const handleChangeNextPage = () => {
    const newCurrentPage = currentPage < pages.length ? currentPage + 1 : currentPage
    handlePageChange(newCurrentPage)
  }

  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 h-full flex justify-center items-center flex-wrap gap-2">
      <button
        onClick={() => handleChangePreviousPage()}
        className={`font-bold text-xl border-2 border-gray-700 px-1 rounded-md hover:border-emerald-400 transition duration-300 ${currentPage !== 1
          ? 'text-white cursor-pointer'
          : 'text-gray-500 cursor-default hover:border-gray-700'}`
        }
      >
        {'<'}
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`px-2 py-0.5 text-black rounded-sm cursor-pointer hover:bg-emerald-600 hover:text-white transition duration-200 ${currentPage === page ? "bg-emerald-500 text-white" : "bg-white"
            }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handleChangeNextPage()}
        className={`font-bold text-xl border-2 border-gray-700 px-1 rounded-md hover:border-emerald-400 transition duration-300 ${currentPage !== pages.length
          ? 'text-white cursor-pointer'
          : 'text-gray-500 cursor-default hover:border-gray-700'}`
        }
      >
        {'>'}
      </button>
    </div>
  )
}

export default Pagination