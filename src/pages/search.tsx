import {useState} from 'react'
import withUpFadeIn from '../components/withupfade'
import ProductCard from '../components/ProductCard';

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const isPrevPage = page > 1;
  const isNextPage = page < 4;

  return (
    <div className="product-search-page">
      <aside>
      <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>
       
        <div>
          <h4>Max price: {maxPrice || '' }</h4>
          <input type='range' value={maxPrice} min='100' max='10000' onChange={(e) => setMaxPrice(Number(e.target.value))}/>
        </div>

       
        <div>
          <h4>category</h4>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>
       
      </aside>
      <main>
      <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-product-list">
          <ProductCard
          stock={3} productid='hahahha' photo='https://m.media-amazon.com/images/I/51jov6ONQJL._SY300_SX300_QL70_FMwebp_.jpg' price={400000} productname='Modern Sofa'
          />
        </div>
        <article>
            <button
              disabled={!isPrevPage}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
            <span>
              {page} of 4
            </span>
            <button
              disabled={!isNextPage}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </article>
      </main>
      
        </div>
  )
}

export default withUpFadeIn(Search)