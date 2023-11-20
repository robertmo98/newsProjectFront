import ReactPaginate from "react-paginate"
import "./pagination.css"
import { PagintaionProps } from "../../@Types"


const PaginationBar = (props: PagintaionProps) => {

  
  return (
    <ReactPaginate 
    previousLabel={"Previus"}
    nextLabel={"Next"}
    pageCount={props.pageCount}
    onPageChange={props.changePage}
    containerClassName={"paginationBtns"}
    previousLinkClassName={"previousBtn"}
    nextLinkClassName={"nextBtn"}
    disabledClassName={"paginationDisabled"}
    activeClassName={"paginationActive"}
/>
  )
}

export default PaginationBar